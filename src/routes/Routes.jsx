import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/Home/Home";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegistrationPage from "../pages/RegistrationPage/RegistrationPage";

const Router = () => { 
    return (
        <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/login" element={<LoginPage />} exact />
            <Route path="/registration" element={<RegistrationPage />} exact />
        </Routes>
    );
};

export default Router;
