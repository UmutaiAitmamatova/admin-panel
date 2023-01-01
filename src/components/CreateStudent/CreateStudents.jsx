import React from 'react';
// import { writeUserData } from '../../firebase';
import classes from './CreateStudents.module.scss'
import { writeUserData } from '../../firebase';

const CreateStudents = ({name, setName, surname, setSurname, age, setAge, handleNameChange, handleSurNameChange,handleAgeChange}) => {
    // const clickHandler = (e, name, surname, age) => {
    //     writeUserData( name, surname, age)
    //     e.preventDefault()
    // }
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
                    <button onClick={(event) => {
                        event.preventDefault()
                        writeUserData(name, surname, age)}} type='submit'>Add new user</button>
                </form>
            </div>
        </div>
    );
}

export default CreateStudents;
