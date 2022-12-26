import React from "react";
import './assets/MainBlock.css'

const MainBlock = ({ name, surName, age, group, classs }) => {
    return (
        <div class="contentBlock">
            <div class="contentImg"></div>
            <div class="contentSurname">
                <span>surname: </span> {surName}
            </div>
            <div class="contentName">
                <span>name: </span>{name}
            </div>
            <div class="contentAge">
                <span>age: </span>{age}
            </div>
            <div class="contentGrouspan">
                <span>group: </span>{group}
            </div>
            <div class="contentClass">
                <span>class: </span>{classs}
            </div>
        </div>
    );
};

export default MainBlock;
