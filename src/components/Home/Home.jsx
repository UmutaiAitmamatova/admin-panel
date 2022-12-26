import React from "react";
import AdminPanel from "../AdminPanel/AdminPanel";
import Main from "../Main/Main";
import './assets/Home.css'
// import app from "../../firebase";

const Home = () => {
    return (
        <div className="Home">
            <Main/>
            <AdminPanel title='All students'/>
        </div>
    );
};

export default Home;
