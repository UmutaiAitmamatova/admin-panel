import React from "react";
import classes from "./Main.module.scss";
import Filter from "./Filter/Filter";
import MainBlock from "./MainBlock/MainBlock";
import { getStudents } from "../../firebase";

const Main = ({isMain}) => {
    const [listOfStudents, setListOfStudents] = React.useState([]);
    console.log();
 

    React.useEffect(() => {
        getStudents(setListOfStudents)
    }, [])
    React.useEffect(() => {
        console.log(!listOfStudents);
    }, [listOfStudents])

    return (
        <div className={classes.container}>
            <div className={classes.inner}>
            <Filter setListOfStudents={setListOfStudents}/>

                <div className={classes.items}>
                    {listOfStudents.length > 0 ? listOfStudents.map((student, index) => {
                            return <MainBlock key={index} student={student} />
                        }) : <p className={classes.title}>Students missing</p>}
                </div>
            </div>
        </div>
    );
};

export default Main;
