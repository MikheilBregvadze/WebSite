import React from 'react';
import style from './ActiveUser.module.css';
import Logout from '../logout/Logout'
import CustomButton from '../../../../components/customButton/CustomButton'
function ActiveUser(props) {
    return (
        <div className={style.userDiv}>
            <CustomButton buttonType={"balance"} text="Balance" />
            <CustomButton buttonType={"account"} text="Account" />
            <span className={style.userName} >{props.clientInfo.username}</span>
            <div className={style.testContainer}>
                    <a className={style.companyLogo}></a>
                    <a className={style.options} >Account management</a>
                    <a className={style.options} >Messages</a>
                    <a className={style.options}>Change password</a>
                    <a className={style.options}>Security Settings</a>
                    <a className={style.options}>Transcations history</a>
                    <a className={style.logout} >
                        <Logout clickHandler={props.clickHandler}/>
                    </a>
            </div>
        </div>
    )
}

export default ActiveUser
