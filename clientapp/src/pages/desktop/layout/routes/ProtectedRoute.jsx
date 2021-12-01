import React, { useContext } from 'react';
import { Navigate } from "react-router-dom";
import { Auth } from '../../../../services/context/AuthContext';

const ProtectedRoute = ({ children, redirectTo }) => {
    const { auth } = useContext(Auth);
    return auth ? children : <Navigate to={redirectTo} />;
}

export default ProtectedRoute;