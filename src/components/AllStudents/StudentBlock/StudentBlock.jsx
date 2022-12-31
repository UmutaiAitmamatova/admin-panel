import React from "react";
import './StudentBlock.css'

const StudentBlock = ({data}) => {
    return (
        <div className="adminBlock">
            <div className="adminImg"></div>
            <div className="adminSurname">
                <span>surname: </span> {data.name}
            </div>
            <div className="adminName">
                <span>name: </span>{data.surname}
            </div>
            <div className="adminAge">
                <span>age: </span>{data.age}
            </div>
            <div className="adminGrouspan">
                <span>group: </span>{data.group}
            </div>
            <div className="adminclass">
                <span>class: </span>{data.classs}
            </div>

            <div className="btn">
                <button className="adminDelete">Delete</button>
                <button className="adminEdit">Edit</button>
            </div>
        </div>
    );
};

export default StudentBlock;
