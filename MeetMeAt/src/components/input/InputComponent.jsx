import React from 'react'

export const InputComponent = ({className, type, name, placeholder, changeFunction, blurFunction, required }) => {
return (
    <>
    <Form.Control
    className={className} 
    required={true}
    type={type}
    name={name}
    placeholder={placeholder}
    onChange={(e) => changeFunction(e)}
    onBlur={(e) => blurFunction(e)}
    />
    </>
)
}
