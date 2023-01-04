import React from 'react';
import classes from './ModalForm.module.scss'
import { writeUserData } from '../../firebase';
import Swal from 'sweetalert2';

const ModalForm = ({ active, setActive, name, group, classs, imageURL, surname, age, handleNameChange, handleSurNameChange, handleAgeChange, handleImageURLChange, handleGroupChange, handleClassChange }) => {
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
                    <button className={classes.btn} onClick={(event) => {
                        event.preventDefault()
                        writeUserData(imageURL, name, surname, age)
                        Swal.fire(
                            'Successfully added new student!',
                            '',
                            'success'
                        )
                    }} type='submit'>Submit</button>
                </form>
            </div>
        </div>
    );
}

export default ModalForm;