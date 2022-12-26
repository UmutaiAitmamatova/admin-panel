import React, { useEffect } from 'react';
import app from './firebase.js';

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrendUser] = React.useState(null)

    useEffect(() => {
        app.auth().onAuthChanged(setCurrendUser);
    }, []);

    return (
        <AuthContext.Provider
            value={{ currentUser }}
        >
            {children}
        </AuthContext.Provider>
    )
}