import React, { useState } from "react";
import classes from "./Main.module.scss";
import Filter from "./Filter/Filter";
import MainBlock from "./MainBlock/MainBlock";
import { getStudents } from "../../core/configs/firebase";
import ModalForm from "../Modals/ModalForm/ModalForm";

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

    const handleChangeStudObj = (key, value) => {
        setStudentObj(old => ({
            ...old,
            [key]: value
        }))
    };

    React.useEffect(() => {
        getStudents(setListOfStudents)
    }, []);

    React.useEffect(() => {
        console.log(!listOfStudents);
    }, [listOfStudents]);

    React.useEffect(() => {
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

    // TODO 
    // Изменить везде Input //! done
    // Удалить ненужные функции  //! done
    // Добавить LAzy Loading для всех страниц //! done
    // Создать config для всех компонентов и перенеси туда конфигурации компонента //! done
    // Filter refactoring
    // Попробуй создать компонент Button 


    return (
        <div className={classes.container}>
            <div className={classes.inner}>
                <Filter student={listOfStudents} setListOfStudents={setListOfStudents} getSelectedRadioValue={getSelectedRadioValue} getSelectedClassValue={getSelectedClassValue} setSearch={setSearch} />
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