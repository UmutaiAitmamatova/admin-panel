import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../components/Home/Home";
import { authContext } from "../firebase";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegistrationPage from "../pages/RegistrationPage/RegistrationPage";
import {useAuthState} from 'react-firebase-hooks/auth'

const Router = () => { 

    const {auth} = React.useContext(authContext);
    const [user] = useAuthState(auth)
    

    return user ? (
        <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="*" element={<>asd</>}/>
        </Routes>
    ): (
    <Routes>
        <Route path="/login" element={<LoginPage />} exact />
        <Route path="/registration" element={<RegistrationPage />} exact />
        <Route path="*" element={<LoginPage />}/>
    </Routes>
    );
};

export default Router;
