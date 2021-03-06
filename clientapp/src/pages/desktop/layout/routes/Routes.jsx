import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from '../../mainPage/MainPage';
import Casino from '../../casino/Casino'
import Slots from '../../slots/Slots'
import Keno from '../../keno/Keno'
import JetX from '../../jetx/JetX'
import Games from '../../games/Games'
import Boardgames from '../../boardgames/Boardgames'
function Router() {
    return (
        <Routes>
            <Route path="/" element={<MainPage />}/>
            <Route path="/casino" element={<Casino />}/>
            <Route path="/slots" element={<Slots />}/>
            <Route path="/keno" element={<Keno />}/>
            <Route path="/jetx" element={<JetX />}/>
            <Route path="/games" element={<Games />}/>
            <Route path="/boardgames" element={<Boardgames />}/>

        </Routes>
    )
}

export default Router
