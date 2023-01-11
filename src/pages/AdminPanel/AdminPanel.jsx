import React, {useState} from "react";
import { Link } from "react-router-dom";
import ModalForm from "../../components/ModalForm/ModalForm";
import classes from "./AdminPanel.module.scss";

const AdminPanel = () => {
    const [modalActive, setModalActive] = useState(false);

    const [studentObj, setStudentObj] = React.useState({
        name: '',
        surname: '',
        age: '',
        imageURL: '',
        group: '',
        classs: ''
    });
    // const [name, setName] = useState('');
    // const [surname, setSurname] = useState('');
    // const [age, setAge] = useState('');
    // const [img, setImg] = useState('');

    // const handleNameChange = (e) => {
    //     setName(e.target.value)
    // }
    // const handleSurNameChange = (e) => {
    //     setSurname(e.target.value)
    // }
    // const handleAgeChange = (e) => {
    //     setAge(e.target.value)
    // }
    // const handleImageURLChange = (e) => {
    //     setImg(e.target.value)
    // }

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
    return (
        <div className={classes.AdminPanel}>
            <div className={classes.container}>
                <div className={classes.inner}>
                    <Link to='/allStudents'><button className={classes.btn}>All students</button></Link>
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
                        />
                    }
                </div>
            </div>
        </div>
    );
};

export default AdminPanel;
