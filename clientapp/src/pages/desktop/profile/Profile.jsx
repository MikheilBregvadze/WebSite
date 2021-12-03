import React from 'react'
import { NavLink } from "react-router-dom";
import style from './Profile.module.css'

function Profile() {
    return (
        <>
            <nav className={style.navigation}>
                <NavLink to="/client/profile/personalinformation" className={({ isActive }) => `${isActive ? style.active : ''}`}>Account Management</NavLink>
                <NavLink to="/client/profile/balance" className={({ isActive }) => `${isActive ? style.active : ''}`}>Balance</NavLink>
                <NavLink to="/client/profile/messages" className={({ isActive }) => `${isActive ? style.active : ''}`}>Messages</NavLink>
                <NavLink to="/client/profile/bettinghistory" className={({ isActive }) => `${isActive ? style.active : ''}`}>Betting History</NavLink>
                <NavLink to="/client/profile/securitysettings" className={({ isActive }) => `${isActive ? style.active : ''}`}>Security Settings</NavLink>
                <NavLink to="/client/profile/transaction" className={({ isActive }) => `${isActive ? style.active : ''}`}>Transactions History</NavLink>

            </nav>
        </>
    )
}

export default Profile
