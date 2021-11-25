import React from 'react';
import style from './CustomInput.module.css';
function CustomInput(props){
    const testStyle ={
        display:"none"
    }
    return (
    <input  
        type={props.type} 
        name=""
        style={props.style}
        className={style.input}
        onChange={props.test}
        value={props.value}
        placeholder={props.placeholder}
    />

    )
}
export default CustomInput