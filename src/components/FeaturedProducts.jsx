import { Link, useLoaderData } from "react-router-dom";
import { formatPrice } from "../util";
import SectionTitle from "./SectionTitle";


const FeaturedProducts = () => {
  const { products } = useLoaderData();

  return <section className="px-8 md:px-16 lg:px-32 py-8">
    <SectionTitle title="Featured Products" />
    <div className="gap-y-4 grid md:grid-cols-2 md:gap-4 lg:grid-cols-3">
      {
        products.map((product) => {
          const { image, title, price } = product.attributes;
          return <Link to={`/singleProduct/${product.id}`} key={product.id} className="card bg-base-100 shadow-xl p-4 flex flex-col items-center">
            <img src={image} alt={title} className="w-96 h-56 object-cover p-4" />
            <div className="flex justify-center flex-col items-center gap-2">
              <h2 className="card-title capitalize">{title}</h2>
              <span>{formatPrice(price)}</span>
            </div>
          </Link>

        })
      }
    </div>
  </section>
}
export default FeaturedProducts;