import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import MainPage from '../../mainPage/MainPage';
import Casino from '../../casino/Casino';
import Slots from '../../slots/Slots';
import Keno from '../../keno/Keno';
import JetX from '../../jetx/JetX';
import Games from '../../games/Games';
import Boardgames from '../../boardgames/Boardgames';
import Profile from '../../profile/Profile';
import ProtectedRoute from './ProtectedRoute';
import PersonalInformation from '../../profile/personalinformation/PersonalInformation';
import Messages from '../../profile/messages/Messages';
// import SecuritySettings from '../../profile/securitysettings/SecuritySettings';
import Transaction from '../../profile/transaction/Transaction';
import Balance from '../../profile/balance/Balance';
import BettingHistory from '../../profile/bettinghistory/BettingHistory';
import SecuritySettings from '../../profile/securitysettings/SecuritySettings';
import { GApageView } from '../../../..';

import style from '../../profile/Profile.module.css'
function Router() {
    const {pathname} = useLocation();
    useEffect(() => { GApageView(pathname); }, [pathname]);
    return (
        <Routes>
            <Route path="/" element={<MainPage />}/>
            <Route path="/casino" element={<Casino />}/>
            <Route path="/slots" element={<Slots />}/>
            <Route path="/keno" element={<Keno />}/>
            <Route path="/jetx" element={<JetX />}/>
            <Route path="/games" element={<Games />}/>
            <Route path="/boardgames" element={<Boardgames />}/>

            <Route exact path="/client/profile" element={<div className={style.profileContainer}><Profile /><ProtectedRoute /></div>}>
                <Route path="personalinformation" element={<PersonalInformation />} /> 
                <Route path="balance" element={<Balance />}/>
                <Route path="messages" element={<Messages />}/>
                <Route path="bettinghistory" element={<BettingHistory />}/>
                <Route path="securitysettings" element={<SecuritySettings />}/>
                <Route path="transaction" element={<Transaction />}/>
                
            </Route>
            {/* <Route path="/client/profile/messages" element={<Messages />}/> */}

            {/* <Route path="/client/security" element={<Security />}/>
            <Route path="/client/transaction" element={<Transaction />}/> */}
        </Routes>
    )
}

export default Router

