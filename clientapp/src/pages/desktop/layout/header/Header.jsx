import React, { useState } from 'react';
import {Link} from "react-router-dom";
import CustomButton from '../../../../components/customButton/CustomButton';
import style from './Header.module.css';
import Login from '../../authentication/login/Login';
// import Logout from '../../authentication/logout/Logout';
import ActiveUser from '../../authentication/activeUser/ActiveUser';
import Registration from '../../registration/Registration'
import { getItemFromLocalStorage } from '../../../../services/common';

function Header() {
    const [clientInfo, setClientInfo] = useState(getItemFromLocalStorage('clientInfo'));

    const updateHeader = (_clientInfo) => {
        setClientInfo(_clientInfo)
    }

    const logOut = () => {
        localStorage.removeItem("clientInfo");
        setClientInfo(null);
    }
    // const registrationHandler = () => {
        
    // }
    return (
        <>
            <div className={style.header}>
                <Link className={style.logo} to="/"></Link>
                <div className={style.headerFields} >
                    { clientInfo && clientInfo.token 
                        ? 
                        <div>
                            {/* {clientInfo.username} */}
                            <ActiveUser clientInfo={clientInfo} clickHandler={logOut}/>
                            {/* <span onClick={logOut} className={style.logout}>logout</span> */}
                            {/* <Logout clickHandler={logOut} /> */}
                        </div> 
                        : 
                        <>
                            {/* <CustomButton buttonType={"registration"} text="Registration"  /> */}
                            <Registration/>
                            <Login updateHeader={updateHeader} />
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
