import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, getAuth} from 'firebase/auth';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase'
import "./LoginPage.css";

const LoginPage = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const navigate = useNavigate();

    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential);
            }).catch((error) => {
                console.log(error);
            })
        navigate('/')
    }

    const auth = getAuth();

    const loginWithGoogle = async () => {
        const provider =  new GoogleAuthProvider();
        const { user } = await signInWithPopup(auth, provider);
        
        navigate('/')
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

                <Link to='/registration'>
                <div className="innerSubTitile">Create new account</div>
                </Link>
            </div>
            <button onClick={loginWithGoogle} className="LoginPageButton">Sign in with Google</button>
        </div>
    );
};

export default LoginPage;
