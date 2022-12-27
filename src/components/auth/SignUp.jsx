import { createUserWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import { auth } from '../../firebase'

const SignUp = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const signUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential)=> {
            console.log(userCredential);
        }).catch((error) => {
            console.log(error);
        })
    }
    return (
        <div className='sign-in'>
            <form onSubmit={signUp}>
                <h1>Create Account</h1>
                <input type="email" placeholder='Enter your email' value={email} onChange={(e)=> setEmail(e.target.value)}/>
                <input type="password" placeholder='Enter your password' value={password} onChange={(e)=> setPassword(e.target.value)}/>
                <button type='submit'>Sign Up</button>
            </form>
        </div>
    );
}

export default SignUp;
