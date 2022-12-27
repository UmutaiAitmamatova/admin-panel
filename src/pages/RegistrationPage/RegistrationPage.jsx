import { createUserWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import { auth } from '../../firebase'
import './assets/RegistrationPage.css'

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
                        <button type='submit'>Зарегистрироваться</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default RegistrationPage;
