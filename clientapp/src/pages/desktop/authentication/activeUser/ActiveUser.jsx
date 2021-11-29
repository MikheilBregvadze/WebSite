import React from 'react';
import style from './ActiveUser.module.css';
import Logout from '../logout/Logout'
function ActiveUser(props) {
    return (
        <div className={style.userDiv}>
            <span className={style.userName} >{props.clientInfo.username}</span>
            <Logout/>
        </div>
    )
}

export default ActiveUser
