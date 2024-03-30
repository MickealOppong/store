import { Link, useLoaderData } from "react-router-dom";
import { formatPrice } from "../util";
const ProductGrid = () => {
  const { products } = useLoaderData();
  return <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
    {
      products.map((product) => {
        const { title, price, image } = product.attributes;
        return <Link to={`/singleProduct/${product.id}`} className="card  shadow-xl p-6" key={product.id}>
          <img src={image} alt={title} className="w-96 h-56" />
          <div className="flex flex-col items-center gap-2 py-2">
            <h2 className="card-title capitalize">{title}</h2>
            <p className="text-gray-500">{formatPrice(price)}</p>
          </div>
        </Link>
      })
    }
  </div>
}
export default ProductGrid;