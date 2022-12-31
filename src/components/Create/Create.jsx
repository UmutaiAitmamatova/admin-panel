import React, {useState} from 'react';
import UseCarts from '../../Hooks/useCarts';
import UseLogin from '../../Hooks/useLogin';
import CreateStudents from '../CreateStudent/CreateStudents';
import classes from './Create.module.scss'

const Create = () => {
    // const { users } = UseLogin();
    const { actions } = UseCarts()
    console.log(actions);


    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [age, setAge] = useState('');
    const handleSubmit = e => {
        e.preventDefault()

        actions.post({
            name,
            surname,
            age,
            isCompleted: false,
        })
    }
    return (
        <div>
            <CreateStudents
                name={name}
                setName={setName}
                surname={surname}
                setSurname={setSurname}
                age={age}
                setAge={setAge}
                onSubmit={handleSubmit}
            />
        </div>
    );
}

export default Create;
