import React from "react";
import StudentBlock from "./AllStudents/StudentBlock";
import './AdminPanel.css'

const AdminPanel = ({ title }) => {
    return (
        <div className="adminPage">
            <div className="container">
                <div className="adminInner">
                    <h2 className="adminTitle">{title}</h2>

                    <div className="adminItems">
                        <StudentBlock
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

export default AdminPanel;
