import React from "react";
import './assets/MainBlock.css'

const MainBlock = ({ name, surName, age, group, classs }) => {
    return (
        <div class="contentBlock">
            <div class="contentImg"></div>
            <div class="contentSurname">
                <span className="contentSpan">surname: </span> {surName}
            </div>
            <div class="contentName">
                <span className="contentSpan">name: </span>{name}
            </div>
            <div class="contentAge">
                <span className="contentSpan">age: </span>{age}
            </div>
            <div class="contentGrouspan">
                <span className="contentSpan">group: </span>{group}
            </div>
            <div class="contentClass">
                <span className="contentSpan">class: </span>{classs}
            </div>
        </div>
    );
};

export default MainBlock;
