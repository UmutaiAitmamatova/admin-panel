import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { authContext } from "../core/configs/firebase";
import { useAuthState } from 'react-firebase-hooks/auth'
import Header from "../layouts/Header/Header";
import NoPage from "../components/NoPage";

const Home = React.lazy(() => import("../pages/Home"));
const AllStudents = React.lazy(() => import("../pages/AllStudents"));
const AdminPanel = React.lazy(() => import("../pages/AdminPanel"));
const LoginPage = React.lazy(() => import("../pages/LoginPage"));
const RegistrationPage = React.lazy(() => import("../pages/RegistrationPage"));

const Router = () => {

    const { auth } = React.useContext(authContext);
    const [user] = useAuthState(auth);

    return user ? (
        <>
            <Header />
            <Routes>
                <Route path="/" element={
                    <React.Suspense fallback={<>Loading...</>}>
                        <Home />
                    </React.Suspense>
                }exact/>
                <Route path="/adminPanel" element={
                    <React.Suspense fallback={<>Loading...</>}>
                        <AdminPanel />
                    </React.Suspense>
                } exact />
                <Route path="/allStudents" element={
                    <React.Suspense fallback={<>Loading...</>}>
                        <AllStudents />
                    </React.Suspense>
                } exact />
                <Route path="*" element={<NoPage/>} />
            </Routes>
        </>
    ) : (
        <Routes>
            <Route path="/login" element={
                <React.Suspense fallback={<>Loading...</>}>
                    <LoginPage />
                </React.Suspense>

            } exact />
            <Route path="/registration" element={
                <React.Suspense fallback={<>Loading...</>}>
                    <RegistrationPage />
                </React.Suspense>

            } exact />
            <Route path="*" element={<LoginPage />} />
        </Routes>
    );
};

export default Router;
