import React, { useState } from "react";
import classes from "./Main.module.scss";
import Filter from "./Filter/Filter";
import MainBlock from "./MainBlock/MainBlock";
import { getStudents } from "../../firebase";
import ModalForm from "../ModalForm/ModalForm";

const Main = () => {
    const [listOfStudents, setListOfStudents] = React.useState([]);
    const [search, setSearch] = useState({ name: '', age: 0, group: 'all', classs: 'all', });
    const [modalActive, setModalActive] = useState(false);
    const [studentObj, setStudentObj] = React.useState({
        name: '',
        surname: '',
        age: '',
        imageURL: '',
        group: '',
        classs: ''
    });
    const handleNameChange = (e) => {
        setStudentObj({ ...studentObj, name: e.target.value })
    }
    const handleSurNameChange = (e) => {
        setStudentObj({ ...studentObj, surname: e.target.value })
    }
    const handleAgeChange = (e) => {
        setStudentObj({ ...studentObj, age: e.target.value })
    }
    const handleImageURLChange = (e) => {
        setStudentObj({ ...studentObj, imageURL: e.target.value })
    }
    const handleGroupChange = (e) => {
        setStudentObj({ ...studentObj, group: e.target.value })
    }
    const handleClassChange = (e) => {
        setStudentObj({ ...studentObj, classs: e.target.value })
    }


    React.useEffect(() => {
        getStudents(setListOfStudents)
    }, [])
    React.useEffect(() => {
        console.log(!listOfStudents);
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
    const getSelectedClassValue = (value) => {
        setSearch(search => {
            return {
                ...search, classs: value
            }
        })
    }
    return (
        <div className={classes.container}>
            <div className={classes.inner}>
                <Filter student={listOfStudents} setListOfStudents={setListOfStudents} getSelectedRadioValue={getSelectedRadioValue} getSelectedClassValue={getSelectedClassValue} setSearch={setSearch} />
                <div className={classes.items}>
                    {listOfStudents?.filter((item) => {
                        console.log('item', item)
                        return search?.name === '' && search?.age === 0 && search?.group === 'all' && search?.classs === 'all'
                            ? item
                            : item.name?.toLowerCase().includes(search?.name.toLowerCase())
                            && item.age?.includes(search?.age)
                            || item.group?.includes(search?.group)
                            || item.classs?.includes(search?.classs)
                    }).map((student, index) => {
                        return <MainBlock key={index} student={student} />
                    })
                    }
                </div>
                {listOfStudents.length === 0 &&
                        <>
                            <p className={classes.title}>Students are absent</p>
                            <button className={classes.btn} onClick={() => setModalActive(true)}>Creata students</button>
                            {modalActive &&
                                <ModalForm
                                    active={modalActive}
                                    setActive={setModalActive}
                                    imageURL={studentObj.imageURL}
                                    name={studentObj.name}
                                    surname={studentObj.surname}
                                    age={studentObj.age}
                                    group={studentObj.group}
                                    classs={studentObj.classs}
                                    handleImageURLChange={handleImageURLChange}
                                    handleNameChange={handleNameChange}
                                    handleSurNameChange={handleSurNameChange}
                                    handleAgeChange={handleAgeChange}
                                    handleGroupChange={handleGroupChange}
                                    handleClassChange={handleClassChange}
                                />}
                        </>
                    }

            </div>
        </div>
    );
};

export default Main;