import Form from "react-bootstrap/Form";


export const InputComponent = ({className, type, name, placeholder, changeFunction, blurFunction,required, maxLength }) => {
return (
    <>
    <Form.Control
    className={className} 
    required={required}
    type={type}
    name={name}
    maxLength={maxLength}
    placeholder={placeholder}
    onChange={(e) => changeFunction(e)}
    onBlur={(e) => blurFunction(e)}
    />
    </>
)
}