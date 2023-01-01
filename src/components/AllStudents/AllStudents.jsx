import React from "react";
import StudentBlock from "../../components/AllStudents/StudentBlock/StudentBlock";
import { getStudents } from "../../firebase";

import classes from './AllStudents.module.scss';

const AllStudents = () => {
    const [listOfStudents, setListOfStudents] = React.useState();
    React.useEffect(() => {
        getStudents(setListOfStudents)
    return () => null
    }, [])
    React.useEffect(() => {
        console.log(listOfStudents);
    },[listOfStudents])
    
    return (
        <div className={classes.allStudents}>
            <div className={classes.container}>
                <div className={classes.inner}>
                    <h2 className={classes.title}>All students</h2>

                    <div className={classes.items}>
                        {/* <button onClick={() => getStudents()}>uu</button> */}
                        {listOfStudents?.map(student => <StudentBlock key={student.id} student={student}/>)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllStudents;
