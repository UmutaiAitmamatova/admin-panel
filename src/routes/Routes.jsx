import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from '../components/Header/Header';
import Home from '../components/Home/Home';
import LoginPage from '../pages/LoginPage/LoginPage';
import RegistrationPage from '../pages/RegistrationPage/RegistrationPage';

const Router = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
            <Route path="/" element={<Home/>} exact />
            <Route path="/login" element={<LoginPage />} exact />
            <Route path="/registration" element={<RegistrationPage />} exact />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
