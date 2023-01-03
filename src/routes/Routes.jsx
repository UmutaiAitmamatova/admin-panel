import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import { authContext } from "../firebase";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegistrationPage from "../pages/RegistrationPage/RegistrationPage";
import {useAuthState} from 'react-firebase-hooks/auth'
import AdminPanel from "../pages/AdminPanel/AdminPanel";
import AllStudents from "../components/AllStudents/AllStudents";
import Create from "../components/Create/Create";
import Header from "../components/Header/Header";

const Router = () => { 

    const {auth} = React.useContext(authContext);
    const [user] = useAuthState(auth)
    
    return user ? (
        <>
        <Header/>
        <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/adminPanel" element={<AdminPanel />} exact />
            <Route path="/allStudents" element={<AllStudents />} exact />
            <Route path="/createStudents" element={<Create />} exact />
            <Route path="*" element={<>asd</>}/>
        </Routes>
        </>
    ): (
    <Routes>
        <Route path="/login" element={<LoginPage />} exact />
        <Route path="/registration" element={<RegistrationPage />} exact />
        <Route path="*" element={<LoginPage />}/>
    </Routes>
    );
};

export default Router;
