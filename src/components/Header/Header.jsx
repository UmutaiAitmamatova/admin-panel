import React from 'react';
import './assets/Header.css'

const Header = () => {
    return (
    <header>
        <div className="container">
            <div className="headerInner">
                <div className="headerLogo">CRYXXEN</div> 
                <button className="headerAdmin">admin</button>
            </div>
        </div>
    </header>
    );
}

export default Header;
