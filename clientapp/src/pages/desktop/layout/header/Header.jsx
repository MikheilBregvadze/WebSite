import React, { useState } from 'react';
import {Link} from "react-router-dom";
import CustomButton from '../../../../components/customButton/CustomButton'
import style from './Header.module.css';
import Login from '../../authentication/login/Login';
import { getItemFromLocalStorage } from '../../../../services/common';

function Header() {
    const [clientInfo, setClientInfo] = useState(getItemFromLocalStorage('clientInfo'));

    const updateHeader = (_clientInfo) => {
        setClientInfo(_clientInfo)
    }
    const registrationHandler = (e) =>{
        console.log(e.target)
    }

    const logOut = () => {
        localStorage.removeItem("clientInfo");
        setClientInfo(null);
    }
    
    return (
        <>
            <div className={style.header}>
                <Link className={style.logo} to="/"></Link>
                <div className={style.headerFields} >
                    { clientInfo && clientInfo.token 
                        ? 
                        <div>
                            {clientInfo.username}
                            <span onClick={logOut} className={style.logout}>logout</span>
                        </div> 
                        : 
                        <>
                            <CustomButton buttonType={"registration"} text="Registration" clickHandler={registrationHandler} />
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
