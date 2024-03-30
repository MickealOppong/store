import { redirect } from "react-router-dom";
import { OrderList, SectionTitle } from "../components";

export const loader = (store) => () => {
  const user = store.getState().userState.user;
  if (!user) {
    return redirect('/login')
  }
  return null;
}
const Orders = () => {
  return <section className="px-8 lg:px-32 mt-20">
    <SectionTitle title='Orders' />
    <div>
      <OrderList />
    </div>
  </section>
}
export default Orders;