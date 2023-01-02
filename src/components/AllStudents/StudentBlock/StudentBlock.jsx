import React from "react";
import Swal from "sweetalert2";
import  {deletes}  from "../../../firebase";
import classes from './StudentBlock.module.scss'

const StudentBlock = ({student}) => {
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
                <button>Edit</button>
            </div>
        </div>
    );
};

export default StudentBlock;
