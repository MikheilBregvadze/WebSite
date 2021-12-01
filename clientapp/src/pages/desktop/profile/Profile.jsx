import React from 'react'
import { NavLink } from "react-router-dom";
import style from './Profile.module.css'

function Profile() {
    return (
        <>
            <nav className={style.navigation}>
                <NavLink to="/client/profile" className={({ isActive }) => `${style.account} ${isActive ? style.active : ''}`}>PersonalInformation</NavLink>
                <NavLink to="/client/profile/AcountInformation" className={({ isActive }) => `${style.account} ${isActive ? style.active : ''}`}>Account Information</NavLink>
            </nav>
        </>
    )
}

export default Profile
