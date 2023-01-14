import React, { useEffect } from "react";
import Swal from "sweetalert2";
import { deleteStudent } from "../../core/configs/firebase";
import classes from "./StudentBlock.module.scss";
import ModalForm from "../Modals/ModalForm";

const StudentBlock = ({ student }) => {
  const [modalActive, setModalActive] = React.useState(false);
  const [studentObj, setStudentObj] = React.useState({
    name: "",
    surname: "",
    age: "",
    imageURL: "",
    group: "",
    classs: "",
  });
  const handleChangeStudObj = (key, value) => {
    setStudentObj(old => ({
      ...old,
      [key]: value
    }))
  };

  useEffect(() => {
    setStudentObj(student);
  }, [student]);


  const deleteStudents = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You cannot return data!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#8300cc",
      cancelButtonColor: "d8d8d8",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteStudent(student.userID);
        Swal.fire("Removed", "", "success");
      }
    });
  };

  const updateStudents = () => {
    setModalActive(true);
  };
  return (
    <div className={classes.adminBlock}>
      <div>
        <img height={150} width={180} src={student.imageURL} alt="imageURL" />
      </div>
      <div className={classes.surname}>
        <span>Name: </span> {student.name}
      </div>
      <div className={classes.name}>
        <span>Surname: </span>
        {student.surname}
      </div>
      <div className={classes.age}>
        <span>Age: </span>
        {student.age}
      </div>
      <div className={classes.group}>
        <span>Group: </span>
        {student.group}
      </div>
      <div className={classes.class}>
        <span>Class: </span>
        {student.classs}
      </div>

      <div className={classes.btn}>
        <button onClick={deleteStudents}>Delete</button>
        <button onClick={updateStudents}>Edit</button>
        {modalActive && (
          <ModalForm
            userID={student.userID}
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
          />
        )}
      </div>
    </div>
  );
};

export default StudentBlock;
