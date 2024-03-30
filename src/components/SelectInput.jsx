const SelectInput = ({ data, name, label, defValue, size }) => {
  return <label className={`form-control ${size}`}>
    <div className="label">
      <span className="label-text text-black">{label}</span>
    </div>
    <select className="select select-bordered" name={name} defaultValue={defValue}>
      {
        data.map((item, index) => {
          return <option key={index}  >{item}</option>
        })
      }
    </select>
  </label>
}
export default SelectInput;