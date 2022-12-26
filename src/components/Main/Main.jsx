import React from "react";
import "./assets/Main.css";
import Filter from "./Filter/Filter";
import MainBlock from "./MainBlock/MainBlock";

const Main = () => {
    return (
        <div class="contentPage">
            <div class="container">
                <div class="contentInner">
                    <Filter />

                    <div class="contentItems">
                        <MainBlock 
                        name='Umutai'
                        surName='Aitmamatova'
                        age='19'
                        group='A'
                        classs='11'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
