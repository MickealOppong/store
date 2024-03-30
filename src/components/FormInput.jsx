const FormInput = ({ label, name, type, defValue, size }) => {
  return <label className="form-control">
    <div className="label">
      <span className="label-text">{label}</span>
    </div>
    <input type={type} className={`input input-bordered ${size}`} name={name} defaultValue={defValue} />
  </label>
}
export default FormInput;