import { Filters, PaginationContainer, ProductsContainer } from "../components/index";
import { customFetch } from "../util";

export const loader = async ({ request }) => {
  const params = Object.fromEntries([...new URL(request.url).searchParams]);
  try {
    const response = await customFetch.get('/products', {
      params
    })
    const products = response.data.data;
    const meta = response.data.meta;
    return {
      products,
      meta,
      params
    }
  } catch (error) {
    return null;
  }
}
const Products = () => {


  return <section className="px-8">
    <Filters />
    <ProductsContainer />
    <PaginationContainer />
  </section>
}
export default Products;