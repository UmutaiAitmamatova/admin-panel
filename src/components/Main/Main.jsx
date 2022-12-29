import React from "react";
import "./Main.css";
import Filter from "./Filter/Filter";
import MainBlock from "./MainBlock/MainBlock";

const Main = () => {
    return (
        <div className="contentPage">
            <div className="container">
                <div className="contentInner">
                    <Filter />

                    <div className="contentItems">
                        <MainBlock 
                        name='  Umutai'
                        surName='  Aitmamatova'
                        age='  19'
                        group='  A'
                        classs='  11'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
