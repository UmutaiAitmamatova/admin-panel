import React, { useState, useEffect } from "react";
import classes from "./Main.module.scss";
import Filter from "./Filter";
import MainBlock from "./MainBlock";
import { getStudents } from "../../core/configs/firebase";
import ModalForm from "../Modals/ModalForm";

const Main = () => {
    const [listOfStudents, setListOfStudents] = useState([]);
    const [search, setSearch] = useState({ name: '', age: 0, group: 'all', classs: 'all', });
    const [modalActive, setModalActive] = useState(false);
    const [studentObj, setStudentObj] = useState({
        name: '',
        surname: '',
        age: '',
        imageURL: '',
        group: '',
        classs: ''
    });
    const handleChangeStudObj = (key, value) => {
        setStudentObj(old => ({
            ...old,
            [key]: value
        }))
    };

    useEffect(() => {
        getStudents(setListOfStudents)
    }, []);

    useEffect(() => {
        console.log(!listOfStudents);
    }, [listOfStudents]);

    useEffect(() => {
        console.log(search, 'search');
    }, [search]);

    const getSelectedRadioValue = (value) => {
        console.log('value in parent', value)
        setSearch(search => {
            return {
                ...search, group: value
            }
        })
    };

    const getSelectedClassValue = (value) => {
        setSearch(search => {
            return {
                ...search, classs: value
            }
        })
    };

    return (
        <div className={classes.container}>
            <div className={classes.inner}>
                <Filter
                    student={listOfStudents}
                    setListOfStudents={setListOfStudents}
                    getSelectedRadioValue={getSelectedRadioValue}
                    getSelectedClassValue={getSelectedClassValue}
                    setSearch={setSearch} 
                    />
                <div className={classes.items}>
                    {listOfStudents?.filter((item) => {
                        return search?.name === '' && search?.age === 0 && search?.group === 'all' && search?.classs === 'all'
                            ? item
                            :
                            item.name?.toLowerCase().includes(search?.name.toLowerCase())
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
                                handleChangeStudObj={handleChangeStudObj}
                                studentObj={studentObj}
                            />}
                    </>
                }

            </div>
        </div>
    );
};

export default Main;