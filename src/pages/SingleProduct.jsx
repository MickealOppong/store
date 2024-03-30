import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLoaderData } from "react-router-dom";
import { NavHeader } from "../components";
import { addItem } from "../features/cart/cartSlice";
import { customFetch, formatPrice, generateNumbers } from "../util";
export const loader = async ({ params }) => {
  const productId = await params.id
  const response = await customFetch.get(`/products/${productId}`)
  const product = response.data.data;
  return { product }
}
const SingleProduct = () => {
  const { product } = useLoaderData();
  const { image, title, description, price, colors, company } = product.attributes;
  const dispatch = useDispatch();

  const [productColour, setProductColor] = useState(colors[0]);
  const [quantity, setQuantity] = useState(1);

  const item = {
    cartID: product.id + productColour,
    title,
    image,
    amount: quantity,
    productColour,
    price,
    company
  }

  const addToCart = () => {
    dispatch(addItem(item));
  }
  return <section className="mt-12">
    <NavHeader text='products' />
    <article className="grid md:grid-cols-2 gap-8 max-w-6xl mt-8 justify-start px-8 md:px-16 lg:px-32">
      <div>
        <img src={image} alt={title} className="rounded-md w-[30rem] h-[30rem]" />
      </div>
      <div className="flex flex-col gap-y-4 w-[40rem]">
        <h2 className="text-6xl text-primary capitalize">{title}</h2>
        <p className="text-gray-500 capitalize">{company}</p>
        <p className="text-gray-600">{formatPrice(price)}</p>
        <p className="text-gray-600">{description}</p>
        <div className="flex gap-x-2">
          <p className="capitalize text-gray-600">colors</p>
          {
            colors.map((color) => {
              return <button className={`badge h-6 w-6 ${color === productColour ? 'outline' : ''}`} style={{ backgroundColor: color }} key={color} onClick={() => setProductColor(color)}>
              </button>
            })
          }
        </div>
        <div>
          <select className="select select-bordered w-full max-w-xs" onChange={(e) => setQuantity(parseInt(e.target.value))}>
            {
              generateNumbers(10).map((item) => {
                return <option key={item}  >{item}</option>
              })
            }
          </select>
        </div>
        <div className="mt-4">
          <button className="uppercase btn btn-primary" onClick={() => addToCart()}>add to cart</button>
        </div>
      </div>

    </article>

  </section>
}
export default SingleProduct;