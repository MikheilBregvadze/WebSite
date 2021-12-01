import React, { useState, useEffect } from "react";
// import {useHistory} from 'react-router-dom';
import { getItemFromLocalStorage, setItemToLocalStorage } from "../common";
import { GetClientInfo } from "../services";

export const Auth = React.createContext({});

export const AuthContext = () => {
    const [auth, setAuth] = useState(getItemFromLocalStorage('accessToken'));
    const [clientInfo, setClientInfo] = useState(null);
    // let history = useHistory();

    useEffect(() => {
        if(auth && !clientInfo) {
            GetClientInfo()
                .then(res => {
                    setClientInfo(res.data);
                })
                .catch(err => {
                    setAuth(false);
                    localStorage.removeItem('accessToken');
                })
        }
    }, [auth, clientInfo])

    const authenticate = (token) => {
        console.log(token);
        setItemToLocalStorage('accessToken', token);
        setAuth(token);
    }

    const logOut = () => {
        setAuth(false);
        setClientInfo(null);
        localStorage.removeItem('accessToken');
    }

    return {
        auth,
        authenticate,
        logOut,
        clientInfo
    }
}
