import React, { useState, useContext } from 'react';
import { NavLink } from "react-router-dom";
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
                    { auth 
                        ? 
                        <div>
                            {/* {clientInfo.username} */}
                            {clientInfo && <ActiveUser clientInfo={clientInfo} clickHandler={() => logOut()} />}
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
                <NavLink to="/" className={({ isActive }) => `${style.navigationLink} ${isActive ? style.active : ''}`}>Main</NavLink>
                <NavLink to="/casino" className={({ isActive }) => `${style.navigationLink} ${isActive ? style.active : ''}`}>Casino</NavLink>
                <NavLink to="/slots" className={({ isActive }) => `${style.navigationLink} ${isActive ? style.active : ''}`}>Slots</NavLink>
                <NavLink to="/keno" className={({ isActive }) => `${style.navigationLink} ${isActive ? style.active : ''}`}>Keno</NavLink>
                <NavLink to="/jetx" className={({ isActive }) => `${style.navigationLink} ${isActive ? style.active : ''}`}>JetX</NavLink>
                <NavLink to="/games" className={({ isActive }) => `${style.navigationLink} ${isActive ? style.active : ''}`}>Games</NavLink>
                <NavLink to="/boardgames" className={({ isActive }) => `${style.navigationLink} ${isActive ? style.active : ''}`}>Boardgames</NavLink>
            </ul>
        </>
    )
}
export default Header
