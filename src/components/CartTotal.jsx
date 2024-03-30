import { useSelector } from "react-redux";
import Item from "./Item";

const CartTotal = () => {
  const { cartTotal, orderTotal, shipping, tax } = useSelector((state) => state.cartState)

  return <article className="border-2 rounded-md shadow-md p-8 w-80 h-64">
    <h2 className="uppercase mb-4 text-gray-700 border-b pb-2 text-sm">Cart Details</h2>
    <div className="flex flex-col gap-y-4 text-sm">
      <Item label='subtotal' amount={cartTotal} />
      <Item label='tax' amount={tax} />
      <Item label='shipping' amount={shipping} />
      <Item label='order total' amount={orderTotal} style='border-t border-b py-4 font-semibold pb-2' />
    </div>
  </article>

}
export default CartTotal