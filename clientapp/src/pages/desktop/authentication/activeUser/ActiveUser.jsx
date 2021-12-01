import React from 'react';
import { NavLink } from "react-router-dom";
import style from './ActiveUser.module.css';
import Logout from '../logout/Logout'
import CustomButton from '../../../../components/customButton/CustomButton'
function ActiveUser(props) {
    return (
        <div className={style.userDiv}>
            <CustomButton buttonType={"balance"} text="Balance" />
            <CustomButton buttonType={"account"} text="Account" />
            <span className={style.userName} >{props.clientInfo.username}</span>
            <div className={style.navigation}>
                    <NavLink to="/client/profile" className={({ isActive }) => `${style.account} ${isActive ? style.active : ''}`}>Account management</NavLink>
                    <NavLink to="/client/messages" className={({ isActive }) => `${style.messages} ${isActive ? style.active : ''}`}>Messages</NavLink>
                    <NavLink to="/client/security" className={({ isActive }) => `${style.security} ${isActive ? style.active : ''}`}>Security Settings</NavLink>
                    <NavLink to="/client/transaction" className={({ isActive }) => `${style.transactions} ${isActive ? style.active : ''}`}>Transactions history</NavLink>
                    

                    {/* <a className={style.account } >Account management</a>
                    <a className={style.messages } >Messages</a>
                    <a className={style.password }>Change password</a>
                    <a className={style.security }>Security Settings</a>
                    <a className={style.transactions }>Transcations history</a> */}
                    <a className={style.logout} >
                        <Logout clickHandler={props.clickHandler}/>
                    </a>
            </div>
        </div>
    )
}

export default ActiveUser
