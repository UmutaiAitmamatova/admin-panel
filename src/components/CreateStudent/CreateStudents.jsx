import React from 'react';
// import { writeUserData } from '../../firebase';
import classes from './CreateStudents.module.scss'
import { writeUserData } from '../../firebase';

const CreateStudents = ({ name, imageURL, surname, age, handleNameChange, handleSurNameChange, handleAgeChange, handleImageURLChange }) => {
    return (
        <div className={classes.createStudents}>
            <div className={classes.inner}>
                <form>
                    <label>Age</label>
                    <input type="number" name="age" value={age} onChange={handleAgeChange} />
                    <label>Img</label>
                    <input type="text" name="img" value={imageURL} onChange={handleImageURLChange} />
                    <label>Name</label>
                    <input type="text" name="name" value={name} onChange={handleNameChange} />
                    <label>Username</label>
                    <input type="text" name="username" value={surname} onChange={handleSurNameChange} />
                    <button onClick={(event) => {
                        event.preventDefault()
                        writeUserData(imageURL, name, surname, age)
                    }} type='submit'>Add new students</button>
                </form>
            </div>
        </div>
    );
}

export default CreateStudents;
