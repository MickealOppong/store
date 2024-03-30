import { useState } from "react";
import { formatPrice } from '../util/index';
const maxPrice = 100000

const InputRange = ({ name, price, label, size }) => {
  const [selectedPrice, setSelectedPrice] = useState(price || maxPrice)
  const step = 1000;
  return <div className="form-control">
    <label htmlFor={name} className="mb-2">
      <span>{label}</span>
    </label>
    <input type="range" min={0} max={maxPrice} className="range range-primary " name={name} id={name} step={step} onChange={(e) => setSelectedPrice(e.target.value)} value={selectedPrice} />
    <div className="flex justify-between mt-2">
      <span>{0}</span>
      <span>{formatPrice(selectedPrice)}</span>
    </div>
  </div>
}
export default InputRange;