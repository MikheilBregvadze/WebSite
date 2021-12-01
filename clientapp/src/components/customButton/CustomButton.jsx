import React from 'react';
import style from './CustomButton.module.css'
function CustomButton({type,text,clickHandler,buttonType}) {
    return (
        <button 
            type={type}
            className={style.button + " " +  (style[buttonType] ?  style[buttonType] : '')}
            onClick={clickHandler}
        >
            {text}
        </button>
    )
}

export default CustomButton
