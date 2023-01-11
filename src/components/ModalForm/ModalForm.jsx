import React from 'react';
import classes from './ModalForm.module.scss'
import { changeUserDate, writeUserData } from '../../firebase';
import Swal from 'sweetalert2';

const ModalForm = ({ userID, active, setActive, name, group, classs, imageURL, surname, age, handleNameChange, handleSurNameChange, handleAgeChange, handleImageURLChange, handleGroupChange, handleClassChange }) => {

    const handleModaleChange = (event) => {
        event.preventDefault()
        if (userID) {
            const data = {
                name: name,
                surname: surname,
                age: age,
                imageURL: imageURL,
                group: group,
                classs: classs
            }
            changeUserDate(data, userID)
            Swal.fire(
                'Successfully updated student!',
                '',
                'success'
            )
            setActive(false)
        }
        else {
            writeUserData(imageURL, name, surname, age, group, classs)
            Swal.fire(
                'Successfully added new student!',
                '',
                'success'
            )
        }
    }
    return (
        <div className={classes.createStudents}>
            <div className={classes.inner} onClick={e => e.stopPropagation()}>
                <button onClick={() => setActive(false)} className={classes.closeBtn}>X</button>
                <form>
                    <label>Name</label> <br />
                    <input type="text" name="name" value={name} onChange={handleNameChange} /> <br />
                    <label>Username</label> <br />
                    <input type="text" name="username" value={surname} onChange={handleSurNameChange} /> <br />
                    <label>Age</label> <br />
                    <input type="number" name="age" value={age} onChange={handleAgeChange} /> <br />
                    <label>Students image</label> <br />
                    <input type="text" name="img" value={imageURL} onChange={handleImageURLChange} /> <br />
                    <label>Group</label> <br />
                    <input type="text" name="group" value={group} onChange={handleGroupChange} /> <br />
                    <label>Class</label> <br />
                    <input type="number" name="class" value={classs} onChange={handleClassChange} /> <br />
                    <button className={classes.btn} onClick={handleModaleChange} type='submit'>Submit</button>
                </form>
            </div>
        </div>
    );
}

export default ModalForm;
