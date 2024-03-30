import { useLoaderData, useLocation, useNavigate } from "react-router-dom";


const Pagination = () => {
  const { meta } = useLoaderData();
  const { pageCount, page } = meta.pagination;
  const navigate = useNavigate();
  const { search, pathname } = useLocation();

  console.log('page', page);
  const handlePageChange = (pageNumber) => {
    const param = new URLSearchParams(search);
    param.set('page', pageNumber);
    navigate(`${pathname}?${param.toString()}`)
  }

  const activeButton = ({ pageNumber, active }) => {
    return <button className={`btn ${active ? 'btn-base-300' : 'btn-accent'}`} onClick={() => {
      handlePageChange(pageNumber)
    }} key={pageNumber}>{pageNumber}</button>
  }
  const renderButtons = () => {
    const pageButtons = [];
    //first button
    pageButtons.push(activeButton({ pageNumber: 1, active: page === 1 }))

    //dots-1
    if (page > 2) {
      pageButtons.push(<button className="btn btn-accent" key="dot-1">...</button>)
    }
    //active page
    if (page !== 1 && page !== pageCount) {
      pageButtons.push(activeButton({ pageNumber: page, active: true }))
    }

    //dot-2
    if (page !== pageCount - 1) {
      pageButtons.push(<button className="btn btn-accent" key="dot-2">...</button>)
    }

    //last button
    pageButtons.push(activeButton({ pageNumber: pageCount, active: page === pageCount }))
    return pageButtons;
  }
  if (pageCount < 2) return null;

  return <div className="flex justify-end p-8 gap-x-1">
    <button className="btn btn-accent uppercase" onClick={() => {
      let curr = page - 1;
      if (curr < 1) {
        curr = pageCount;
      }
      handlePageChange(curr)
    }}>prev</button>
    {
      renderButtons()
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
export default Pagination;