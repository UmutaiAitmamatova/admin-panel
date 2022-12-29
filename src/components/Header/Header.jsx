import React, { useContext } from 'react';
import { authContext } from '../../firebase';
import './Header.css'

const Header = () => {
    const { auth } = useContext(authContext);

    return (
        <header>
            <div className="container">
                <div className="headerInner">
                    <div className="headerLogo">CRYXXEN</div>
                    <div className="headerBtns">
                        <p className='headerName'>U</p>
                        <button className="headerAdmin">admin</button>
                        <button className="headerAdmin" onClick={() => auth.signOut()}>Log Out</button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
