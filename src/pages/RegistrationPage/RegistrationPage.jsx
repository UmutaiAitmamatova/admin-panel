import { createUserWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import { auth } from '../../firebase'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';
import logo from "../../assets/image 2.png";
import classes from './RegistrationPage.module.scss';
import { useForm } from "react-hook-form";

const RegistrationPage = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: 'onBlur'
    });

    const handleError = (errors) => { console.log(errors);};
    const registerOptions = {
        email: { 
            required: "Email is required",
            pattern: {
                value: /[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+/,
                message: '"Please enter a valid email address" (you entered the data in the wrong format)'
            }
        },
        password: {
            required: "Password is required",
            minLength: {
                value: 8,
                message: "Password must have at least 8 characters"
            }
        }
    };

    const signUp = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential);
            }).catch((error) => {
                console.log(error);
            })
        Swal.fire(
            'Congratulations',
            'you have successfully registered',
            'success'
        )
        navigate('/')
    }
    const navigate = useNavigate();
    return (
        <div className={classes.checkInPage}>
            <div className={classes.logo}>
                <img src={logo} alt="" />
            </div>
            <div className={classes.inner}>
                <div className={classes.title}>REGISTRATION</div>
                <form onSubmit={handleSubmit(signUp, handleError)}>
                    <div className={classes.input}>
                        <input
                            type="email"
                            placeholder='Enter your email'
                            name='email' {...register('email', registerOptions.email)}
                            value={email} onChange={(e) => setEmail(e.target.value)} />
                        <small className={classes.text_danger}>
                            {errors?.email && errors.email.message}
                        </small>
                        <input
                            type="password" placeholder='Enter your password'
                            name='password' {...register('password', registerOptions.password)}
                            value={password} onChange={(e) => setPassword(e.target.value)} />
                        <small className={classes.text_danger}>
                            {errors?.password && errors.password.message}
                        </small>
                    </div>
                    <div className={classes.btn}>
                        <button type='submit'>Зарегистрироваться</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default RegistrationPage;
