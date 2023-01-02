import React from "react";
import classes from "./Main.module.scss";
import Filter from "./Filter/Filter";
import MainBlock from "./MainBlock/MainBlock";
import { getStudents } from "../../firebase";

const Main = () => {
    const [listOfStudents, setListOfStudents] = React.useState([]);

    React.useEffect(() => {
        getStudents(setListOfStudents)
    }, [])
    React.useEffect(() => {
        console.log(!listOfStudents);
    }, [listOfStudents])

    return (
        <div className={classes.container}>
            <div className={classes.inner}>
                <Filter />

                <div className={classes.items}>
                    {listOfStudents.length > 0 ? listOfStudents.map((student, index) => {
                            console.log(student, index);
                            return <MainBlock key={index} student={student} />
                        }) : <p className={classes.title}>Студенты отсутствуют</p>}
                </div>
            </div>
        </div>
    );
};

export default Main;
