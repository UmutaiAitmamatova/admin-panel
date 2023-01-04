import React, { useState } from "react";
import classes from "./Main.module.scss";
import Filter from "./Filter/Filter";
import MainBlock from "./MainBlock/MainBlock";
import { getStudents } from "../../firebase";

const Main = () => {
    const [listOfStudents, setListOfStudents] = React.useState([]);
    const [search, setSearch] = useState({ name: '', age: null, classs: null, group: '' })


    React.useEffect(() => {
        getStudents(setListOfStudents)
    }, [])
    React.useEffect(() => {
        console.log(!listOfStudents);
    }, [listOfStudents])

    React.useEffect(() => {
        console.log(search, 'search');
    }, [search])
    return (
        <div className={classes.container}>
            <div className={classes.inner}>
                <Filter student={listOfStudents} setListOfStudents={setListOfStudents} setSearch={setSearch} />
                <div className={classes.items}>
                    {listOfStudents?.filter((item) => {
                        return search?.name === ''
                            ? item
                            : item.name?.toLowerCase().includes(search?.name.toLowerCase());
                    }).map((student, index) => {
                        console.log(student, index);
                        return <MainBlock key={index} student={student} />
                    })}
                </div>
            </div>
        </div>
    );
};

export default Main;