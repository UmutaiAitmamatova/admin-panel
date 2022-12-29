import React from "react";
import './MainBlock.css'

const MainBlock = ({ name, surName, age, group, classs }) => {
    return (
        <div className="contentBlock">
            <div className="contentImg"></div>
            <div className="contentSurname">
                <span className="contentSpan">surname: </span> {surName}
            </div>
            <div className="contentName">
                <span className="contentSpan">name: </span>{name}
            </div>
            <div className="contentAge">
                <span className="contentSpan">age: </span>{age}
            </div>
            <div className="contentGrouspan">
                <span className="contentSpan">group: </span>{group}
            </div>
            <div className="contentClass">
                <span className="contentSpan">class: </span>{classs}
            </div>
        </div>
    );
};

export default MainBlock;
