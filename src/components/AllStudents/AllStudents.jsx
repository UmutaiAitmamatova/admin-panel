import React from "react";
import StudentBlock from "../../components/AllStudents/StudentBlock/StudentBlock";

import classes from './AllStudents.module.scss';

const AllStudents = () => {

    return (
        <div className={classes.allStudents}>
            <div className={classes.container}>
                <div className={classes.inner}>
                    <h2 className={classes.title}>All students</h2>

                    <div className={classes.items}>
                        <StudentBlock/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllStudents;
