import React from "react";
import AdminPanel from "../../components/AdminPanel/AdminPanel";
import Main from "../../components/Main/Main";
import classes from './Home.module.scss'
// import app from "../../firebase";

const Home = () => {
    return (
        <div className={classes.Home}>
            <Main/>
            {/* <AdminPanel title='All students'/> */}
        </div>
    );
};

export default Home;
