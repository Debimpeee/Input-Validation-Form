import React, {useState} from "react"
import "./forminputs.css"


const FormInputs = (props) => {

  const [focused, setFocused] = useState(false)

  const {label, errorMessage, value="", onChange, id, isSubmitting, ...inputProps} = props

  const handleFocus = () => {
    setFocused(true)
  }
  

  return (
    <div className='formInputs'>
      <label>{label}</label>
      <input {...inputProps}
      value={value}
       onChange={onChange}
       onBlur={handleFocus} 
       onFocus={() =>
        inputProps.name === "confirmPassword" && setFocused(true)}
       focused={focused.toString()}/>
      {!isSubmitting && <span>{errorMessage}</span>}
    </div>
  )
}

export default FormInputs
