import React, { useState } from 'react';
import './LoginPage.css';
import bgImage from '../assets/images/BG.png';
import loginImage from '../assets/images/login.png';
import logoImage from '../assets/images/radiant_1.png';
import { NavLink } from 'react-router-dom';

const LoginPage = () => {
    // Function to generate captcha
    const generateCaptcha = () => {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let code = '';
        for (let i = 0; i < 7; i++) {
            code += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return code;
    };

    const [captcha, setCaptcha] = useState(generateCaptcha());

    const refreshCaptcha = () => {
        setCaptcha(generateCaptcha());
    };

    // useEffect(() => {
    //     refreshCaptcha();
    //     const intervalId = setInterval(refreshCaptcha, 300000);
    //     return () => clearInterval(intervalId);
    // }, []);

    return (
        <div
            className="body"
            style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed',
                backgroundPosition: 'center',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh'
            }}
        >
            <div className="container">
                <div className="left-side">
                    <img src={loginImage} alt="Login Illustration" />
                </div>
                <div className="right-side">
                    <img src={logoImage} alt="Radiant Logo" className="logo" />
                    <h1>RADIANT</h1>
                    <h3>CLIENT VIEW APPLICATION</h3>
                    <form>
                        <div className="form-group">
                            {/* <label htmlFor="username" /> */}
                            <input type="text" id="username" placeholder="Username" />
                        </div>
                        <div className="form-group">
                            {/* <label htmlFor="password" /> */}
                            <input type="password" id="password" placeholder="Password" />
                        </div>
                        <div className="form-group">
                            {/* <label htmlFor="security-code">Security Code</label> */}
                            <div className="captcha-input-wrapper">
                                <input type="text" id="security-code" placeholder="Security Image" />
                                <span
                                    className="captcha"
                                    onClick={refreshCaptcha}
                                    title="Click to refresh captcha"
                                    style={{ cursor: 'pointer' }}
                                >
                                    {captcha}
                                </span>
                            </div>
                        </div>
                        <div style={{ textAlign: "center" }}>
                            <button
                                type="button"
                                className="login-btn"
                                onClick={() => {
                                    const usernameInput = document.getElementById("username");
                                    const passwordInput = document.getElementById("password");
                                    const codeInput = document.getElementById("security-code");

                                    const username = usernameInput.value.trim();
                                    const password = passwordInput.value.trim();
                                    const code = codeInput.value.trim();

                                    // Refresh captcha on every login attempt
                                    refreshCaptcha();

                                    if (!username) {
                                        alert("Please fill the Username field.");
                                    } else if (!password) {
                                        alert("Please fill the Password field.");
                                    } else if (!code) {
                                        alert("Please fill the Security Code field.");
                                    } else if (code !== captcha) {
                                        alert("Incorrect captcha. Please try again.");
                                        // Clear all inputs on incorrect captcha
                                        usernameInput.value = "";
                                        passwordInput.value = "";
                                        codeInput.value = "";
                                    } else {
                                        document.querySelector(".login-btn-navlink").click();
                                    }
                                }}
                            >
                                LOGIN
                            </button>


                            {/* Hidden NavLink to simulate navigation after validation */}
                            <NavLink to="/CaptchaPages" className="login-btn-navlink" style={{ display: "none" }} />
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
