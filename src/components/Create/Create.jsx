import React, {useState} from 'react';
import ModalCreate from './CreateStudent/ModalCreate';

const Create = () => {
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
        <div>
            <ModalCreate
                imageURL={img}
                name={name}
                surname={surname}
                age={age}
                handleImageURLChange={handleImageURLChange}
                handleNameChange={handleNameChange}
                handleSurNameChange={handleSurNameChange}
                handleAgeChange={handleAgeChange}
            />
        </div>
    );
}

export default Create;
