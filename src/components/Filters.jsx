import { Form, Link, useLoaderData } from "react-router-dom";
import CheckboxInput from "./CheckboxInput";
import FormInput from "./FormInput";
import InputRange from "./InputRange";
import SelectInput from "./SelectInput";


const Filters = () => {
  const { meta, params } = useLoaderData();
  const { product, category, company, order, price, shipping } = params;

  const companyMetaData = () => {
    return meta.companies.map((item) => item)
  }

  const categoryMetaData = () => {
    return meta.categories.map((item) => item)
  }
  const sortItems = () => {
    const sortBy = ['a-z', 'z-a', 'high', 'low']
    return sortBy.map((item) => item)
  }

  return <div className="p-8 bg-slate-300 max-w-6xl flex mt-24 mx-auto">
    <Form className="grid gap-y-4 md:grid-cols-3 lg:grid-cols-4 items-center gap-8 ">
      {/** SEARCH PRODUCT */}
      <FormInput type="text" name="product" defValue={product} label="Search product" size='w-96 md:w-56' />
      {/** CATEGORY */}
      <SelectInput data={categoryMetaData()} name='category' label="Select Category" size='w-96 md:w-56' defValue={category} />
      {/** COMPANIES */}
      <SelectInput data={companyMetaData()} name='company' label="Select Company" size='w-96l md:w-56' defValue={company} />
      {/** SORT BY */}
      <SelectInput data={sortItems()} name='order' label="Select Category" size='w-96 md:w-56' defValue={order} />
      {/** PRICE */}
      <InputRange name="price" label='Select price' price={price} />
      {/** SHIPPING */}
      <CheckboxInput name='shipping' label="Free Shipping" defValue={shipping} />
      <button className="btn btn-primary uppercase" >search</button>
      <Link to='/products' className="btn btn-secondary uppercase text-base-100">reset</Link>
    </Form>
  </div>
}
export default Filters;