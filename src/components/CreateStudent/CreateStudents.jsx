import React from 'react';
import classes from './CreateStudents.module.scss'

const CreateStudents = ({name, setName, surname, setSurname, age, setAge, onSubmit}) => {
    return (
        <div className={classes.createStudents}>
            <div className={classes.inner}>
                <form onSubmit={onSubmit}>
                    <label>Name</label>
                    <input type="text" name="name" value={name} onChange={(event) =>{ setName(event.target.value)}}/>
                    <label>Username</label>
                    <input type="text" name="username"  value={surname} onChange={e => setSurname(e.target.value)} />
                    <label>Age</label>
                    <input type="number" name="age"  value={age} onChange={e => setAge(e.target.value)}/>
                    <button type='submit'>Add new user</button>
                </form>
            </div>
        </div>
    );
}

export default CreateStudents;
