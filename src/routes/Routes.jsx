import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
// import Home from "../pages/Home/Home";
import { authContext } from "../core/configs/firebase";
// import LoginPage from "../pages/LoginPage/LoginPage";
// import RegistrationPage from "../pages/RegistrationPage/RegistrationPage";
import { useAuthState } from 'react-firebase-hooks/auth'
// import AdminPanel from "../pages/AdminPanel/AdminPanel";
// import AllStudents from "../pages/AllStudents/AllStudents";
import Header from "../layouts/Header/Header";
import NoPage from "../components/NoPage/NoPage";

const Home = React.lazy(() => import("../pages/Home"));
const AllStudents = React.lazy(() => import("../pages/AllStudents/AllStudents"));
const AdminPanel = React.lazy(() => import("../pages/AdminPanel/AdminPanel"));
const LoginPage = React.lazy(() => import("../pages/LoginPage/LoginPage"));
const RegistrationPage = React.lazy(() => import("../pages/RegistrationPage/RegistrationPage"));

const Router = () => {

    const { auth } = React.useContext(authContext);
    const [user] = useAuthState(auth)

    return user ? (
        <>
            <Header />
            <Routes>
                <Route path="/" element={
                    <React.Suspense fallback={<>Loading...</>}>
                        <Home />
                    </React.Suspense>
                }
                    exact
                />
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
            <Route path="*" element={<NoPage/>} />
        </Routes>
    );
};

export default Router;
