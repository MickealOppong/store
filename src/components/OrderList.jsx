import { useLoaderData } from "react-router-dom";

const OrderList = () => {
  const { orders, meta } = useLoaderData()
  const { total, pageCount, page } = meta.pagination;

  return <div>
    <div className="flex items-center gap-x-2 text-gray-600 mb-8">
      <h2 className="text-sm capitalize">total orders:</h2>
      <span className="text-sm ">{total}</span>
    </div>
    <div className="overflow-x-auto">
      <table className="table table-zebra">
        {/* head */}
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Address</th>
            <th>Products</th>
            <th>Cost</th>
            <th className="hidden md:flex">Created date</th>
          </tr>
        </thead>
        <tbody>
          {
            orders.map((order) => {
              const { name, createdAt, orderTotal, address, numItemsInCart } = order.attributes;
              {/* row 1 */ }
              return <tr key={order.id}>
                <th>{order.id}</th>
                <th>{name}</th>
                <td>{address}</td>
                <td>{numItemsInCart}</td>
                <td>{orderTotal}</td>
                <td className="hidden md:flex">{createdAt}</td>
              </tr>
            })
          }
        </tbody>
      </table>
    </div>
  </div>
}
export default OrderList;