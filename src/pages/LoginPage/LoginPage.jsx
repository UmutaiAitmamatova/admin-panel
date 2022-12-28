import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, getAuth} from 'firebase/auth';
import React from 'react';
import { auth } from '../../firebase'
import "./assets/LoginPage.css";

const LoginPage = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential);
            }).catch((error) => {
                console.log(error);
            })
    }

    const auth = getAuth();

    const loginWithGoogle = async () => {
        const provider =  new GoogleAuthProvider();
        const { user } = await signInWithPopup(auth, provider);
        console.log(user);
    };

    return (
        <div className="loginPage">
            <div className="loginPageLogo">
                <img src="./img/image 2.png" alt="" />
            </div>
            <div className="LoginPageInner">
                <div className="innerTitle">AUTHORIZATION</div>
                <form onSubmit={signIn}>
                    <div className="innerInput">
                        <input type="email" placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} />
                        <input type="password" placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="innerBtn">
                        <button type='submit'>Enter</button>
                    </div>
                </form>

                <div className="innerSubTitile">Don't have an account yet?</div>
            </div>
            <button onClick={()=>loginWithGoogle()} className="LoginPageButton">Sign in with Google</button>
        </div>
    );
};

export default LoginPage;
