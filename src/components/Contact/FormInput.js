//Importing the styles
import '../../styles/Contact/FormInput.css'

function FormInput({placeholder,value,onChange}){
    return(
        <input value={value} placeholder={placeholder} onChange={onChange}/>
    )
}

export default FormInput;