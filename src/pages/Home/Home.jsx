import React from "react";
import Main from "../../components/Main/Main";
import classes from './Home.module.scss'
// import app from "../../firebase";

const Home = () => {
    return (
        <div className={classes.Home}>
            <Main isMain/>
        </div>
    );
};

export default Home;
