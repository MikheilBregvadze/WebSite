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
            <div className={style.navigation}>
                    <a className={style.companyLogo}></a>
                    <a className={style.account } >Account management</a>
                    <a className={style.messages } >Messages</a>
                    <a className={style.password }>Change password</a>
                    <a className={style.security }>Security Settings</a>
                    <a className={style.transactions }>Transcations history</a>
                    <a className={style.logout} >
                        <Logout clickHandler={props.clickHandler}/>
                    </a>
            </div>
        </div>
    )
}

export default ActiveUser
