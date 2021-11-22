import React from 'react';
import MainPage from '../../mainPage/mainPage';
import { Routes, Route } from 'react-router-dom';

function Router() {
    return (
        <Routes>
            <Route path="/" element={<MainPage />}/>
        </Routes>
    )
}

export default Router
