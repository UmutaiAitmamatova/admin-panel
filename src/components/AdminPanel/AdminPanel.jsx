import React from "react";
import StudentBlock from "./AllStudents/StudentBlock";
import classes from './AdminPanel.module.scss'

const AdminPanel = ({ title }) => {
    return (
                <div className={classes.inner}>
                    <h2 className={classes.title}>{title}</h2>

                    <div className={classes.items}>
                        <StudentBlock
                        name='Umutai'
                        surName='Aitmamatova'
                        age='19'
                        group='A'
                        classs='11'
                        />
                    </div>
                </div>
    );
};

export default AdminPanel;
