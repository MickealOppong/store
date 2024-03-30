import { useDispatch } from "react-redux";
import { editItem, removeItem } from "../features/cart/cartSlice";
import { formatPrice, generateNumbers } from "../util";
const CartItem = ({ image, title, productColour, company, price, amount, cartID }) => {
  const dispatch = useDispatch();

  const removeItemFromCart = (productID) => {
    dispatch(removeItem(productID))
  }
  const editCartQuantity = (id, quantity) => {
    dispatch(editItem({ id, quantity }))
  }

  return <div className="grid grid-cols-4 p-2 justify-between">
    <img src={image} alt={title} className="w-24 h-24 rounded-md" />
    <div className="flex flex-col gap-y-2 text-gray-600">
      <h2 className="font-semibold capitalize">{title}</h2>
      <p >{company}</p>
      <div className="flex items-center gap-x-2 mt-4">
        <span className="capitalize ">colour</span>
        <p className="h-4 w-4 rounded-full" style={{ backgroundColor: productColour }}></p>
      </div>
    </div>
    <div className="flex flex-col items-center gap-y-2">
      <label className="text-gray-600" >Amount</label>
      <select className="select select-bordered" onChange={(e) => editCartQuantity(cartID, parseInt(e.target.value))} value={amount} >
        {
          generateNumbers(10).map((item, index) => {
            return <option key={index} >{item}</option>
          })
        }
      </select>
      <button className="text-primary mt-2" onClick={() => removeItemFromCart(cartID)}>Remove</button>
    </div>
    <div className="flex justify-end">
      <p>{formatPrice(price)}</p>
    </div>
  </div>
}
export default CartItem