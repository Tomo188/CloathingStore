import "./form-input.styles.scss"
const Input=({label,value,onChangeFun,type})=>{
    return(
        <div className="group">
            <input required className="form-input" type={type} value={value} onChange={onChangeFun} />
            {label && ( 
        <label className={`${value?.length?"shrink":""} form-input-label`}>{label}</label>
            )}
        </div>
    )
}
export default Input