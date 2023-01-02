import React from "react";
import './StudentBlock.css'

const StudentBlock = ({student}) => {
    return (
        <div className="adminBlock">
            <div>
                <img height={150} width={180} src={student.imageURL} alt="imageURL" />
            </div>
            <div className="adminSurname">
                <span>name: </span> {student.name}
            </div>
            <div className="adminName">
                <span>surname: </span>{student.surname}
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
