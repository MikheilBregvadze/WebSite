import React from 'react';
import style from './CustomInput.module.css';
function CustomInput(props){
    return (
    <input  
        name=""
        type={props.type} 
        value={props.value}
        className={style[props.inputType] ? style[props.inputType] + ' ' + style.input : style.input}
        placeholder={props.placeholder}
        onChange={props.onChangeHandler}
    />

    )
}
export default CustomInput