import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../../firebase';
import classes from './Header.module.scss'

const Header = () => {
    const { auth } = useContext(authContext);

    return (
        <header className={classes.header}>
            <div className={classes.container}>
                <div className={classes.inner}>
                    <Link to='/'><div className={classes.logo}>CRYXXEN</div></Link>
                    <div className={classes.btns}>
                        <p className={classes.name}>U</p>
                        <Link to='/adminPanel'><button className={classes.admin}>admin</button></Link>
                        <button className={classes.logout} onClick={() => auth.signOut()}>Log Out</button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
