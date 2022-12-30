import { createUserWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import { auth } from '../../firebase'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';
import logo from "../../assets/image 2.png";
import classes from './RegistrationPage.module.scss'        

const RegistrationPage = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const signUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential);
            }).catch((error) => {
                console.log(error);
            })
    }
    const navigate = useNavigate();
    const btn = () => {
        Swal.fire(
            'Congratulations',
            'you have successfully registered',
            'success'
        )
        navigate('/')
    }
    return (
        <div className={classes.checkInPage}>
            <div className={classes.logo}>
                <img src={logo} alt="" />
            </div>
            <div className={classes.inner}>
                <div className={classes.title}>REGISTRATION</div>
                <form onSubmit={signUp}>
                    <div className={classes.input}>
                        <input type="email" placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} />
                        <input type="password" placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className={classes.btn}>
                            <button onClick={btn} type='submit'>Зарегистрироваться</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default RegistrationPage;
