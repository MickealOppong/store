import { redirect } from "react-router-dom";
import { OrderList, Pagination, SectionTitle } from "../components";
import { customFetch } from "../util";

export const loader = (store) => async ({ request }) => {
  const user = store.getState().userState.user;
  const token = store.getState().userState.token;
  if (!user) {
    return redirect('/login')
  }

  const params = Object.fromEntries([...new URL(request.url).searchParams.entries()])

  try {
    const response = await customFetch.get('/orders', {
      params,
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    const orders = response.data.data;
    const meta = response.data.meta;
    const data = {
      orders,
      meta
    }
    return data;
  } catch (error) {
    if (error.response.status === 401) {
      return redirect('/login')
    }
    return null;
  }

}
const Orders = () => {

  return <section className="px-8 lg:px-32 mt-20">
    <SectionTitle title='Orders' />
    <div>
      <OrderList />
    </div>
    <Pagination />
  </section>
}
export default Orders;