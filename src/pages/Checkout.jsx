import { useSelector } from "react-redux";
import { redirect } from "react-router-dom";
import { CartTotal, CheckoutForm, SectionTitle } from "../components/index";

export const loader = (store) => () => {
  const user = store.getState().userState.user;
  if (!user) {
    return redirect('/login')
  }
  return null;
}
const Checkout = () => {
  const itemsInCart = useSelector((state) => state.cartState.itemsInCart)
  if (itemsInCart === 0) {
    return <section className="px-8 mt-20 max-w-6xl lg:px-32">
      <SectionTitle title='Your cart is empty' />
    </section>
  }
  return <section className="px-8 mt-20 max-w-5xl mx-auto lg:px-32 pb-20">
    <SectionTitle title='Checkout' />
    <div className="flex flex-col gap-y-8 justify-between md:flex-row">
      <CheckoutForm />
      <CartTotal />
    </div>

  </section>
}
export default Checkout;