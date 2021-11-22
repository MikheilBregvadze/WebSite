import React from 'react';
import style from './header.module.css';
import CustomInput from '../../../../components/customInput/input'
function Header() {
    return (
        <div className={style.header}>
            <a></a>
            <CustomInput type="text"></CustomInput>
            <CustomInput type="password"></CustomInput>
        </div>
    )
}

export default Header
