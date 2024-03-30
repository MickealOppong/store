import { Form, redirect, useNavigation } from "react-router-dom";
import { clearCart } from "../features/cart/cartSlice";
import { customFetch, formatPrice } from "../util";
import FormInput from "./FormInput";


export const action = (store) => async ({ request }) => {
  const formData = await request.formData();
  const { name, address } = Object.fromEntries(formData);
  const { cartItems, orderTotal, itemsInCart } = store.getState().cartState;
  const token = store.getState().userState.token;
  console.log(name, address);
  const info = {
    name,
    address,
    chargeTotal: orderTotal,
    orderTotal: formatPrice(orderTotal),
    cartItems,
    numItemsInCart: itemsInCart
  }

  try {
    const response = await customFetch.post('/orders', { data: info }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    store.dispatch(clearCart())
    return redirect('/orders')
  } catch (error) {
    if (error.response.status === 401) {
      return redirect('/login')
    }
    return null;
  }
}
const Shipping = () => {
  const navigation = useNavigation();

  const isLoading = navigation.state === 'submitting';

  return <div>
    <h2 className="text-gray-600 mb-4">Shipping information</h2>

    <Form className="flex flex-col gap-y-4" method="post">
      <FormInput label='Name' name='name' size='w-80' type='text' />
      <FormInput label='Address' name='address' size='w-80' type='text' />
      <button className="btn btn-primary w-80 uppercase">{isLoading ? <span className="loading loading-spinner text-accent"></span> : 'place order'}</button>
    </Form>
  </div>
}
export default Shipping;