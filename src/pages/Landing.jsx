import { FeaturedProducts, Hero } from "../components/index";
import { customFetch } from "../util/index";
import Footer from "./Footer";
export const loader = async () => {
  try {
    const response = await customFetch.get('/products?featured=true')
    const products = response.data.data;
    return {
      products
    }
  } catch (error) {

  }
}
const Landing = () => {

  return <>
    <Hero />
    <FeaturedProducts />
    <Footer />
  </>
}
export default Landing;