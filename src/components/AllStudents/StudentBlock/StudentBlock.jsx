import React from "react";
import './StudentBlock.css'

const StudentBlock = ({student}) => {
    return (
        <div className="adminBlock">
            <div className="adminImg"></div>
            <div className="adminSurname">
                <span>surname: </span> {student.name}
            </div>
            <div className="adminName">
                <span>name: </span>{student.surname}
            </div>
            <div className="adminAge">
                <span>age: </span>{student.age}
            </div>
            <div className="adminGrouspan">
                <span>group: </span>{student.group}
            </div>
            <div className="adminclass">
                <span>class: </span>{student.classs}
            </div>

            <div className="btn">
                <button className="adminDelete">Delete</button>
                <button className="adminEdit">Edit</button>
            </div>
        </div>
    );
};

export default StudentBlock;
