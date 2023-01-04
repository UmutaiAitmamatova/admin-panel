import React from "react";
import Swal from "sweetalert2";
import  {deletes}  from "../../../firebase";
import classes from './StudentBlock.module.scss'
import { changeUserDate } from "../../../firebase";
import ModalForm from "../../ModalForm/ModalForm";

const StudentBlock = ({student, key}) => {
    const [isModal, setIsModal] = React.useState(false);
    const [modalActive, setModalActive] = React.useState(false);
    const [name, setName] = React.useState('');
    const [surname, setSurname] = React.useState('');
    const [age, setAge] = React.useState('');
    const [img, setImg] = React.useState('');

    const handleNameChange = (e) => {
        setName(e.target.value)
    }
    const handleSurNameChange = (e) => {
        setSurname(e.target.value)
    }
    const handleAgeChange = (e) => {
        setAge(e.target.value)
    }
    const handleImageURLChange = (e) => {
        setImg(e.target.value)
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
        console.log(student.userID);
        setIsModal(true)
        setModalActive(true)
        changeUserDate(student.userID)

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
                        active={modalActive}
                        setActive={setModalActive}/>
                    }
            </div>
        </div>
    );
};

export default StudentBlock;
