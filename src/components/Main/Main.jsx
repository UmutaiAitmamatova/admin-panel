import React from "react";
import classes from "./Main.module.scss";
import Filter from "./Filter/Filter";
import MainBlock from "./MainBlock/MainBlock";

const Main = () => {
    return (
                <div className={classes.inner}>
                    <Filter />

                    <div className={classes.items}>
                        <MainBlock 
                        name='  Umutai'
                        surName='  Aitmamatova'
                        age='  19'
                        group='  A'
                        classs='  11'
                        />
                    </div>
                </div>
    );
};

export default Main;
