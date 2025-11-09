import React, { useState, createContext, useEffect } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localstorage';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [userdata, setUserdata] = useState(null);

    useEffect(() => {
        setLocalStorage();
        const { employees, admin } = getLocalStorage();
        setUserdata({ employees, admin })
    }, [])

    const contextValue = {
        userdata,
        setUserdata
    };

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;