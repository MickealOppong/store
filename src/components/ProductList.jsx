import { Link, useLoaderData } from "react-router-dom";
import { formatPrice } from "../util";
const ProductList = () => {
  const { products } = useLoaderData();
  return <div className="grid gap-6 w-full">
    {
      products.map((product) => {
        const { title, price, image, company } = product.attributes;
        return <Link to={`/singleProduct/${product.id}`} className="card shadow-xl p-8 flex flex-row gap-x-4 md:gap-x-8 lg:gap-x-32 hover:scale-105 duration-300" key={product.id}>
          <img src={image} alt={title} className="w-36 h-36 md:w-60 md:h-56 lg:w-80 lg:h-56 card shadow-sm " />
          <div className="flex gap-x-2">
            <div className="w-80 md:80 lg:w-96">
              <h2 className="card-title capitalize">{title}</h2>
              <p className="mt-2 text-gray-500">{company}</p>
            </div>
            <p className="text-gray-500 ">{formatPrice(price)}</p>
          </div>
        </Link>
      })
    }
  </div>
}

export default ProductList;