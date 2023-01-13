import React, {useState} from "react";
import { Link } from "react-router-dom";
import ModalForm from "../../components/Modals/ModalForm/ModalForm";
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

    const handleChangeStudObj = (key, value) => {
        setStudentObj(old => ({
            ...old,
            [key]: value
        }))
    };
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
                            handleChangeStudObj={handleChangeStudObj}
                            studentObj={studentObj}
                        />
                    }
                </div>
            </div>
        </div>
    );
};

export default AdminPanel;
