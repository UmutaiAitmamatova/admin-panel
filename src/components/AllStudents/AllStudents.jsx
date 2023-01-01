import React from "react";
import StudentBlock from "../../components/AllStudents/StudentBlock/StudentBlock";
import { getStudents } from "../../firebase";

import classes from './AllStudents.module.scss';

const AllStudents = () => {
    const [listOfStudents, setListOfStudents] = React.useState();
    const handleSetOfStudents = (students) => {
        setListOfStudents([...students])
        console.log(listOfStudents);
    }
    React.useEffect(() => {
        console.log(getStudents(handleSetOfStudents));
    }, [handleSetOfStudents])

    
    return (
        <div className={classes.allStudents}>
            <div className={classes.container}>
                <div className={classes.inner}>
                    <h2 className={classes.title}>All students</h2>

                    <div className={classes.items}>
                        {/* <button onClick={() => getStudents()}>uu</button> */}
                        {/* <StudentBlock/> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllStudents;
