import React, { useState, useContext } from 'react';
import {Link} from "react-router-dom";
import CustomButton from '../../../../components/customButton/CustomButton';
import style from './Header.module.css';
import Login from '../../authentication/login/Login';
// import Logout from '../../authentication/logout/Logout';
import { Auth } from '../../../../services/context/AuthContext';
import ActiveUser from '../../authentication/activeUser/ActiveUser';
import Registration from '../../registration/Registration';
import { getItemFromLocalStorage } from '../../../../services/common';

function Header() {
    const { auth, clientInfo, logOut } = useContext(Auth);
    

    // const logOut = () => {
    //     localStorage.removeItem("clientInfo");
    //     setClientInfo(null);
    // }
    // const registrationHandler = () => {
        
    // }
    return (
        <>
            <div className={style.header}>
                <Link className={style.logo} to="/"></Link>
                <div className={style.headerFields} >
                    { auth && clientInfo
                        ? 
                        <div>
                            {/* {clientInfo.username} */}
                            <ActiveUser clientInfo={clientInfo} clickHandler={() => logOut()} />
                            {/* <ActiveUser clientInfo={clientInfo} clickHandler={logOut}/> */}
                            {/* <span onClick={logOut} className={style.logout}>logout</span> */}
                            {/* <Logout clickHandler={logOut} /> */}
                        </div> 
                        : 
                        <>
                            {/* <CustomButton buttonType={"registration"} text="Registration"  /> */}
                            <Registration/>
                            <Login />
                        </>
                    }
                </div>
            </div>
            <ul className={style.navigation}>
                <li> <Link className={style.navigationLink} to="/">Main</Link> </li>
                <li> <Link className={style.navigationLink} to="/casino">Casino</Link> </li>
                <li> <Link className={style.navigationLink} to="/slots">Slots</Link> </li>
                <li> <Link className={style.navigationLink} to="/keno">Keno</Link> </li>
                <li> <Link className={style.navigationLink} to="/jetx">JetX</Link> </li>
                <li> <Link className={style.navigationLink} to="/games">Games</Link> </li>
                <li> <Link className={style.navigationLink} to="/boardgames">Boardgames</Link> </li>
            </ul>
        </>
    )
}
export default Header
