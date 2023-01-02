import React from "react";
import StudentBlock from "../../components/AllStudents/StudentBlock/StudentBlock";
import { getStudents } from "../../firebase";

import classes from './AllStudents.module.scss';

const AllStudents = () => {
    const [listOfStudents, setListOfStudents] = React.useState([]);

    React.useEffect(() => {
        getStudents(setListOfStudents)
    }, [])
    React.useEffect(() => {
        console.log(!listOfStudents);
    }, [listOfStudents])

    return (
        <div className={classes.allStudents}>
            <div className={classes.container}>
                <div className={classes.inner}>
                    <h2 className={classes.title}>All students</h2>

                    <div className={classes.items}>
                        {listOfStudents.length > 0 ? listOfStudents.map((student, index) => {
                            console.log(student, index);
                            return <StudentBlock key={index} student={student} />
                        }) : <p className={classes.title}>Студенты отсутствуют</p>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllStudents;
