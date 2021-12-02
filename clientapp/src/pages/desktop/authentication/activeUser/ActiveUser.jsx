import React from 'react';
import { NavLink , useNavigate } from "react-router-dom";
import style from './ActiveUser.module.css';
import Logout from '../logout/Logout'
import CustomButton from '../../../../components/customButton/CustomButton'
function ActiveUser(props) {
    const navigate = useNavigate();
    const accountClick = () =>{
        navigate('/client/profile/personalinformation')
    }
    const balanceClick = () =>{
        navigate('/client/profile/addbalance')
    }
    return (
        <div className={style.userDiv}>
            <CustomButton buttonType={"balance"} text="Balance" clickHandler={balanceClick}/>
            <CustomButton buttonType={"account"} text="Account" clickHandler={accountClick}/>
            <span className={style.userName} >{props.clientInfo.username}</span>
            <div className={style.navigation}>
                    <NavLink to="/client/profile/personalinformation" className={({ isActive }) => `${style.account} ${isActive ? style.active : ''}`}>Account management</NavLink>
                    <NavLink to="/client/profile/messages" className={({ isActive }) => `${style.messages} ${isActive ? style.active : ''}`}>Messages</NavLink>
                    <NavLink to="/client/profile/securitysettings" className={({ isActive }) => `${style.security} ${isActive ? style.active : ''}`}>Security Settings</NavLink>
                    <NavLink to="/client/profile/transaction" className={({ isActive }) => `${style.transactions} ${isActive ? style.active : ''}`}>Transactions history</NavLink>
                    

                    <a className={style.logout} >
                        <Logout clickHandler={props.clickHandler}/>
                    </a>
            </div>
        </div>
    )
}

export default ActiveUser
