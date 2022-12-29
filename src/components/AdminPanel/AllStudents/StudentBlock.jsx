import React from "react";
import './StudentBlock.css'

const StudentBlock = ({name, surName, age, group, classs}) => {
    return (
        <div className="adminBlock">
            <div className="adminImg"></div>
            <div className="adminSurname">
                <span>surname: </span> {surName}
            </div>
            <div className="adminName">
                <span>name: </span>{name}
            </div>
            <div className="adminAge">
                <span>age: </span>{age}
            </div>
            <div className="adminGrouspan">
                <span>group: </span>{group}
            </div>
            <div className="adminclass">
                <span>class: </span>{classs}
            </div>

            <div className="btn">
                <button className="adminDelete">Delete</button>
                <button className="adminEdit">Edit</button>
            </div>
        </div>
    );
};

export default StudentBlock;
