import { useLoaderData, useLocation, useNavigate } from "react-router-dom";

const PaginationContainer = () => {
  const { meta } = useLoaderData();
  const { pageCount, page } = meta.pagination;
  const navigate = useNavigate();
  const { search, pathname } = useLocation();
  const list = Array.from({ length: pageCount }, (_, index) => {
    return index + 1;
  })

  const handlePageChange = (pageNumber) => {
    const searchParams = new URLSearchParams(search);
    searchParams.set('page', pageNumber)
    navigate(`${pathname}?${searchParams}`)
  }
  return <div className="flex justify-end p-8 gap-x-1">
    <button className="btn btn-accent uppercase" onClick={() => {
      let curr = page - 1;
      if (curr < 1) {
        curr = pageCount;
      }
      handlePageChange(curr)
    }}>prev</button>
    {
      list.map((pageNumber, index) => {
        return <button key={index} className={`btn  ${pageNumber === page ? 'btn-base-300 ' : 'btn-accent'}`} onClick={() => handlePageChange(pageNumber)} >{pageNumber}</button>
      })
    }
    <button className="btn btn-accent uppercase" onClick={() => {
      let curr = page + 1;
      if (curr > pageCount) {
        curr = 0;
      }
      handlePageChange(curr)
    }}>next</button>
  </div>

}
export default PaginationContainer;