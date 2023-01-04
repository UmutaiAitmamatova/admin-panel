import React, {useState} from "react";
import { Link } from "react-router-dom";
import ModalForm from "../../components/ModalForm/ModalForm";
import classes from "./AdminPanel.module.scss";

const AdminPanel = () => {
    const [modalActive, setModalActive] = useState(false);
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [age, setAge] = useState('');
    const [img, setImg] = useState('');

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
                        imageURL={img}
                        name={name}
                        surname={surname}
                        age={age}
                        handleImageURLChange={handleImageURLChange}
                        handleNameChange={handleNameChange}
                        handleSurNameChange={handleSurNameChange}
                        handleAgeChange={handleAgeChange}/>
                    }
                    {/* <Link to='/createStudents'><button className={classes.btn}>Creata students</button></Link> */}
                </div>
            </div>
        </div>
    );
};

export default AdminPanel;
