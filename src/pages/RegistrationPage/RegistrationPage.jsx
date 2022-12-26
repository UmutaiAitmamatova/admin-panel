import React from 'react';
import './assets/RegistrationPage.css'

const RegistrationPage = () => {
    return (
        <div class="checkInPage">
            <div class="checkInPageLogo">
                <img src="./img/image 2.png" alt="" />
            </div>
            <div class="checkInPageInner">
                <div class="checkInTitle">REGISTRATION</div>
                <div class="checkInInput">
                    <input type="Enter email" placeholder="Enter email" />
                    <input type="Enter password" placeholder="Enter password" />
                </div>
                <div class="checkInBtn">
                    <button>Зарегистрироваться</button>
                </div>
            </div>
        </div>
    );
}

export default RegistrationPage;
