import { useState } from "react";

const CheckboxInput = ({ label, name, defValue }) => {
  const [isFreeShipping, setIsFreeShipping] = useState(false)

  return (
    <div className="form-control items-center cursor-pointer flex w-56 ">
      <label className="label " htmlFor={name}>
        <span className="label-text capitalize">{label}</span>
      </label>
      <input type="checkbox" name={name} className={`checkbox checkbox-bordered `} onChange={() => setIsFreeShipping(!isFreeShipping)} value={isFreeShipping} defaultChecked={defValue} />
    </div>
  )
}
export default CheckboxInput