import { createUserWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import { auth } from '../../firebase'
import './RegistrationPage.css'
import Swal from 'sweetalert2'
import { Link, useNavigate } from 'react-router-dom';

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
        <div className="checkInPage">
            <div className="checkInPageLogo">
                <img src="./img/image 2.png" alt="" />
            </div>
            <div className="checkInPageInner">
                <div className="checkInTitle">REGISTRATION</div>
                <form onSubmit={signUp}>
                    <div className="checkInInput">
                        <input type="email" placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} />
                        <input type="password" placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="checkInBtn">
                            <button onClick={btn} type='submit'>Зарегистрироваться</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default RegistrationPage;
