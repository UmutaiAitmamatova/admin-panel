import React from "react";
import { Link } from "react-router-dom";
import classes from "./AdminPanel.module.scss";

const AdminPanel = () => {
    return (
        <div className={classes.AdminPanel}>
            <div className={classes.container}>
                <div className={classes.inner}>
                    <Link to='/allStudents'><button className={classes.btn}>All students</button></Link>
                    <Link to='/createStudents'><button className={classes.btn}>Creata students</button></Link>
                </div>
            </div>
        </div>
    );
};

export default AdminPanel;
