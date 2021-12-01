import React, { useContext } from 'react';
import { Navigate, Outlet } from "react-router-dom";
import { Auth } from '../../../../services/context/AuthContext';

const ProtectedRoute = () => {
    const { auth } = useContext(Auth);
    return auth ? <Outlet /> : <Navigate to="/Home" />;
}

export default ProtectedRoute;
