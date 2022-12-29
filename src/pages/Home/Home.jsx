import React from "react";
import AdminPanel from "../../components/AdminPanel/AdminPanel";
import Main from "../../components/Main/Main";
import './Home.css'
// import app from "../../firebase";

const Home = () => {
    return (
        <div className="Home">
            <Main/>
            {/* <AdminPanel title='All students'/> */}
        </div>
    );
};

export default Home;
