import React, { useState } from "react";
import classes from "./Main.module.scss";
import Filter from "./Filter/Filter";
import MainBlock from "./MainBlock/MainBlock";
import { getStudents } from "../../firebase";

const Main = () => {
    const [listOfStudents, setListOfStudents] = React.useState([]);
    const [search, setSearch] = useState({ name: '', age: 0, classs: null, group: 'all' })


    React.useEffect(() => {
        getStudents(setListOfStudents)
    }, [])
    React.useEffect(() => {
        // console.log(!listOfStudents);
    }, [listOfStudents])

    React.useEffect(() => {
        console.log(search, 'search');
    }, [search])
    const getSelectedRadioValue = (value) => {
        console.log('value in parent', value)
        setSearch(search => {
            return {
                ...search, group: value
            }
        })
    }
    return (
        <div className={classes.container}>
            <div className={classes.inner}>
                <Filter student={listOfStudents} setListOfStudents={setListOfStudents} getSelectedRadioValue={getSelectedRadioValue} setSearch={setSearch} />
                <div className={classes.items}>
                    {listOfStudents.length > 0 ? listOfStudents?.filter((item) => {
                        console.log('item', item)
                        return search?.name === '' &&  search?.age === 0 && search.group === 'all'
                            ? item
                            : item.name?.toLowerCase().includes(search?.name.toLowerCase())
                             &&  item.age?.includes(search?.age)
                             ||  item.group?.includes(search?.group)
                    }).map((student, index) => {
                        return <MainBlock key={index} student={student} />
                    })  : <p className={classes.title}>Students are absent</p>}
                </div>
            </div>
        </div>
    );
};

export default Main;