import React from 'react';
import classes from './ModalForm.module.scss'
import { changeUserDate, writeUserData } from '../../firebase';
import Swal from 'sweetalert2';
import { useForm } from "react-hook-form";

const ModalForm = ({ userID, active, setActive, name, group, classs, imageURL, surname, age, handleNameChange, handleSurNameChange, handleAgeChange, handleImageURLChange, handleGroupChange, handleClassChange }) => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: 'onBlur'
    });

    const groups = ['A', 'B', 'C', 'D']
    const handleError = (errors) => { console.log(errors); };
    const registerOptions = {
        name: {
            required: "Name is required",
            minLength: {
                value: 2,
                message: 'must be more than 2 characters'
            },
        },
        surname: {
            required: "Surname is required",
            minLength: {
                value: 2,
                message: 'must be more than 2 characters'
            }
        },
        age: {
            required: "Age student is required",
            minLength: {
                value: 1,
                message: 'must be more than 1 characters'
            },
        },
        img: {
            required: "Image student is required",
            pattern: {
                value: /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/,
                message: 'Invalid Url student'
            }
        },
        group: {
            required: "Group student is required",
        },
        class: {
            required: "Class student is required",
            minLength: {
                value: 1,
                message: 'must be more than  characters'
            },
        }
    };

    const handleModaleChange = () => {
        // event.preventDefault()
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
                <form onSubmit={handleSubmit(handleModaleChange, handleError)}>

                    <label>Name</label> <br />
                    <input
                        placeholder='Ivan'
                        type="text"
                        name="name"
                        {...register('name', registerOptions.name)}
                        value={name}
                        onChange={handleNameChange} /><br />
                    <small className={classes.text_danger}>
                        {errors?.name && errors.name.message}
                    </small> <br />

                    <label>Surname</label> <br />
                    <input
                        placeholder='Ivanovich'
                        type="text"
                        name="surname"
                        {...register('surname', registerOptions.surname)}
                        value={surname}
                        onChange={handleSurNameChange} /> <br />
                    <small className={classes.text_danger}>
                        {errors?.surname && errors.surname.message}
                    </small> <br />


                    <label>Age</label> <br />
                    <input
                        placeholder='21'
                        type="number"
                        name="age"
                        {...register('age', registerOptions.age)}
                        value={age}
                        onChange={handleAgeChange} /> <br />
                    <small className={classes.text_danger}>
                        {errors?.age && errors.age.message}
                    </small>  <br />

                    <label>Students image</label> <br />
                    <input
                        placeholder='https://media.licdn.com/dms/image/C560BAQHMnA03XDdf3w/company-logo_200_200/0/1519855918965?e=2147483647&v=beta&t=J3kUMZwIphc90TFKH5oOO9Sa9K59fimgJf-s_okU3zs'
                        type="text"
                        name="img"
                        {...register('img', registerOptions.img)}
                        value={imageURL}
                        onChange={handleImageURLChange} /> <br />
                    <small className={classes.text_danger}>
                        {errors?.img && errors.img.message}
                    </small> <br />

                    <label>Group A / B / C / D</label> <br />
                    <input
                        placeholder='A / B / C / D'
                        type="text"
                        name="group"
                        {...register('group', registerOptions.group)}
                        value={group}
                        onChange={handleGroupChange} /> <br />
                    <small className={classes.text_danger}>
                        {errors?.group && errors.group.message}
                    </small> <br />

                    <label>Class 1 / 11</label> <br />
                    <input
                        placeholder='1 / 11'
                        type="number"
                        name="class"
                        {...register('class', registerOptions.class)}
                        value={classs}
                        onChange={handleClassChange} /> <br />
                    <small className={classes.text_danger}>
                        {errors?.class && errors.class.message}
                    </small> <br />

                    <button className={classes.btn} type='submit'>Submit</button>
                </form>
            </div>
        </div>
    );
}

export default ModalForm;
