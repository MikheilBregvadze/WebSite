import React from 'react';
import style from './CustomInput.module.css';
function CustomInput(props){
    return (
    <input  
        type={props.type} 
        name=""
        className={style[props.inputType] ? style[props.inputType] + ' ' + style.input : style.input}
        onChange={props.test}
        value={props.value}
        placeholder={props.placeholder}
    />

    )
}
export default CustomInput