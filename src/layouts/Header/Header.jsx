import React, { useContext } from 'react';
import { Link, NavLink} from 'react-router-dom';
import Swal from 'sweetalert2';
import { authContext, getUserName } from '../../core/configs/firebase';
import classes from './Header.module.scss'

const Header = () => {
    const { auth } = useContext(authContext);
    return (
        <header className={classes.header}>
            <div className={classes.container}>
                <div className={classes.inner}>
                    <Link to='/'><div className={classes.logo}>CRYXXEN</div></Link>
                    <div className={classes.btns}>
                        <Link to='/adminPanel'><button>admin</button></Link>
                        <button onClick={() => {
                            Swal.fire({
                                title: 'Are you sure you want to log out of your account?',
                                icon: 'warning',
                                showCancelButton: true,
                                confirmButtonColor: '#8300cc',
                                cancelButtonColor: 'd8d8d8',
                                confirmButtonText: 'Yes'
                            }).then((result) => {
                                if (result.isConfirmed) {
                                    auth.signOut()
                                    Swal.fire(
                                        'You are logged out!',
                                        '',
                                        'success'
                                    )
                                }
                            })
                            }}>Log Out</button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
