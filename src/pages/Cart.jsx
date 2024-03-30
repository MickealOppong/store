import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CartItemList, CartTotal, SectionTitle } from "../components/index";

const Cart = () => {
  const user = useSelector((state) => state.userState.user);
  const itemsInCart = useSelector((state) => state.cartState.itemsInCart)
  const dispatch = useDispatch();
  if (itemsInCart === 0) {
    return <section className="px-8 lg:px-32 my-20">
      <SectionTitle title='Your cart is empty' />
    </section>
  }

  return <div className="px-8 lg:px-32 my-20">
    <SectionTitle title='Shopping cart' />
    <div className="flex  flex-col md:flex-row md:justify-between gap-12">
      <CartItemList />
      <div>

        <CartTotal />

        <div>
          {
            user ? <Link to='/checkout' className={`btn btn-primary mt-8 w-80 text-gray-100 uppercase ${itemsInCart > 0 ? 'flex' : 'hidden'}`}>proceed to checkout</Link> : <Link to="/login" className="btn btn-secondary mt-8 w-80 text-gray-100 uppercase">please login</Link>
          }
        </div>

      </div>
    </div>
  </div>
}
export default Cart;