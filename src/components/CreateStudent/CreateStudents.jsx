import React from 'react';
// import { writeUserData } from '../../firebase';
import classes from './CreateStudents.module.scss'

const CreateStudents = ({name, setName, surname, setSurname, age, setAge, handleNameChange, handleSurNameChange,handleAgeChange, writeUserData}) => {
    return (
        <div className={classes.createStudents}>
            <div className={classes.inner}>
                <form>
                    <label>Name</label>
                    <input type="text" name="name" value={name} onChange={handleNameChange}/>
                    <label>Username</label>
                    <input type="text" name="username"  value={surname} onChange={handleSurNameChange} />
                    <label>Age</label>
                    <input type="number" name="age"  value={age} onChange={handleAgeChange}/>
                    <button onClick={writeUserData} type='submit'>Add new user</button>
                </form>
            </div>
        </div>
    );
}

export default CreateStudents;
