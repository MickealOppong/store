import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const CartList = () => {
  const cartItems = useSelector((state) => state.cartState.cartItems)

  return <div className="flex flex-col gap-y-4 w-11/12 ">
    {
      cartItems.map((item) => {
        return <CartItem  {...item} key={item.cartID} />
      })
    }
  </div>
}
export default CartList