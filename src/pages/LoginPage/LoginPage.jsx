import React from "react";
import "./assets/LoginPage.css";

const LoginPage = () => {
    return (
        <div class="loginPage">
            <div class="loginPageLogo">
                <img src="./img/image 2.png" alt="" />
            </div>
            <div class="LoginPageInner">
                <div class="innerTitle">AUTHORIZATION</div>
                <div class="innerInput">
                    <input type="Enter email" placeholder="Enter email" />
                    <input type="Enter password" placeholder="Enter password" />
                </div>
                <div class="innerBtn">
                    <button>Enter</button>
                </div>

                <div class="innerSubTitile">Don't have an account yet?</div>
            </div>
            <button class="LoginPageButton">Sign in with Google</button>
        </div>
    );
};

export default LoginPage;
