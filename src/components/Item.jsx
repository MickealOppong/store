import { formatPrice } from "../util";

const Item = ({ label, amount, style }) => {
  return <div className={`flex justify-between capitalize text-gray-700 ${style}`}>
    <label>{label}</label>
    <p>{formatPrice(amount)}</p>
  </div>
}
export default Item;