import { signInWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import { auth } from '../../firebase'

const SignIn = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential)=> {
            console.log(userCredential);
        }).catch((error) => {
            console.log(error);
        })
    }
    return (
        <div className='sign-in'>
            <form onSubmit={signIn}>
                <h1>Login In to your Account</h1>
                <input type="email" placeholder='Enter your email' value={email} onChange={(e)=> setEmail(e.target.value)}/>
                <input type="password" placeholder='Enter your password' value={password} onChange={(e)=> setPassword(e.target.value)}/>
                <button type='submit'>Log In</button>
            </form>
        </div>
    );
}

export default SignIn;
