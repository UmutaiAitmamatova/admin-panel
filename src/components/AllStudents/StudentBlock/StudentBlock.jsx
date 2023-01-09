import React, { useEffect } from "react";
import Swal from "sweetalert2";
import { deletes } from "../../../firebase";
import classes from './StudentBlock.module.scss'
import { changeUserDate } from "../../../firebase";
import ModalForm from "../../ModalForm/ModalForm";

const StudentBlock = ({ student, key }) => {
    const [isModal, setIsModal] = React.useState(false);
    const [modalActive, setModalActive] = React.useState(false);
    const [studentObj, setStudentObj] = React.useState({
        name: '',
        surname: '',
        age: '',
        imageURL: '',
        group: '',
        classs: '',
    });

    useEffect(() => {
        setStudentObj(student)
    }, [student])


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


    const deleteStudents = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You cannot return data!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#8300cc',
            cancelButtonColor: 'd8d8d8',
            confirmButtonText: 'Yes'
        }).then((result) => {
            if (result.isConfirmed) {
                deletes(student.userID)
                Swal.fire(
                    'Removed',
                    '',
                    'success'
                )
            }
        })
    }

    const updateStudents = () => {
        setIsModal(true)
        setModalActive(true)
    }
    return (
        <div className={classes.adminBlock}>
            <div>
                <img height={150} width={180} src={student.imageURL} alt="imageURL" />
            </div>
            <div className={classes.surname}>
                <span>Name: </span> {student.name}
            </div>
            <div className={classes.name}>
                <span>Surname: </span>{student.surname}
            </div>
            <div className={classes.age}>
                <span>Age: </span>{student.age}
            </div>
            <div className={classes.group}>
                <span>Group: </span>{student.group}
            </div>
            <div className={classes.class}>
                <span>Class: </span>{student.classs}
            </div>

            <div className={classes.btn}>
                <button onClick={deleteStudents}>Delete</button>
                <button onClick={updateStudents}>Edit</button>
                {modalActive &&
                    <ModalForm
                        userID={studentObj.userID}
                        active={modalActive}
                        setActive={setModalActive}
                        name={studentObj.name}
                        imageURL={studentObj.imageURL}
                        surname={studentObj.surname}
                        age={studentObj.age}
                        group={studentObj.group}
                        classs={studentObj.classs}
                        handleNameChange={handleNameChange}
                        handleSurNameChange={handleSurNameChange}
                        handleAgeChange={handleAgeChange}
                        handleImageURLChange={handleImageURLChange}
                        handleClassChange={handleAgeChange}
                        handleGroupChange={handleGroupChange}
                    />
                }
            </div>
        </div>
    );
};

export default StudentBlock;
