import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import classes from "./LoginPage.module.scss";
import logo from "../../assets/image 2.png";
import Swal from 'sweetalert2';
import { useForm } from "react-hook-form";

const LoginPage = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: 'onBlur'
    });

    const handleError = (errors) => {console.log(errors);};
    const registerOptions = {
        email: { 
            required: "Email is required",
            pattern: {
                value: /[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+/,
                message: 'Please enter a valid email address'
            }
        },
        password: {
            required: "Password is required",
            minLength: {
                value: 8,
                message: "password is not correct"
            }
        }
    };

    const signIn = (e) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential);
            }).catch((error) => {
                console.log(error);
            })
        navigate('/')
    }
    const navigate = useNavigate();
    const auth = getAuth();
    const loginWithGoogle = async () => {
        const provider = new GoogleAuthProvider();
        const { user } = await signInWithPopup(auth, provider);
        navigate('/')
        Swal.fire(
            'Congratulations, you have successfully logged in with Google accounts!',
            '',
            'success'
        )
    };

    return (
        <div className={classes.loginPage}>
            <div className={classes.logo}>
                <img src={logo} alt="" />
            </div>
            <div className={classes.inner}>
                <div className={classes.title}>AUTHORIZATION</div>
                <form onSubmit={handleSubmit(signIn, handleError)}>
                    <div className={classes.input}>
                        <input type="email" placeholder='Enter your email' name='email' {...register('email', registerOptions.email)} value={email} onChange={(e) => setEmail(e.target.value)} />
                        <small  className={classes.text_danger}>
                            {errors?.email && errors.email.message}
                        </small>
                        <input type="password" placeholder='Enter your password' name='password' {...register('password', registerOptions.password)} value={password} onChange={(e) => setPassword(e.target.value)} />
                        <small className={classes.text_danger}>
                            {errors?.password && errors.password.message}
                        </small>
                    </div>
                    <div className={classes.btn}>
                        <button type='submit'>Enter</button>
                    </div>
                </form>

                <Link to='/registration'>
                    <div className={classes.subTitle}>Create new account</div>
                </Link>
            </div>
            <button onClick={loginWithGoogle} className={classes.button}>Sign in with Google</button>
        </div>
    );
};

export default LoginPage;
