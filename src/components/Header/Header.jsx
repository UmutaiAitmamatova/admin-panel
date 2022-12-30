import React, { useContext } from 'react';
import { authContext } from '../../firebase';
import classes from './Header.module.scss'

const Header = () => {
    const { auth } = useContext(authContext);

    return (
        <header className={classes.header}>
            <div className={classes.container}>
                <div className={classes.inner}>
                    <div className={classes.logo}>CRYXXEN</div>
                    <div className={classes.btns}>
                        <p className={classes.name}>U</p>
                        <button className={classes.admin}>admin</button>
                        <button className={classes.logout} onClick={() => auth.signOut()}>Log Out</button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
