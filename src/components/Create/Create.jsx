import React, {useState} from 'react';
import CreateStudents from '../CreateStudent/CreateStudents';
import classes from './Create.module.scss'
import { db } from '../../firebase';
import { writeUserData } from '../../firebase';

import { child, getDatabase, onValue, push, ref, remove, set, update } from "firebase/database";

const Create = () => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [age, setAge] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value)
    }
    const handleSurNameChange = (e) => {
        setSurname(e.target.value)
    }
    const handleAgeChange = (e) => {
        setAge(e.target.value)
    }

    return (
        <div>
            <CreateStudents
                name={name}
                // setName={setName}
                surname={surname}
                // setSurname={setSurname}
                age={age}
                // setAge={setAge}
                handleNameChange={handleNameChange}
                handleSurNameChange={handleSurNameChange}
                handleAgeChange={handleAgeChange}
                // writeUserData={writeUserData}
            />
        </div>
    );
}

export default Create;
