import React from 'react';
import './Login.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';


const Login = () => {
    const [toggleInUpBtn, setToggleInUpBtn] = useState(false)
    // console.log(toggleInUpBtn)
    return (
        <div id='main-login-sec'>
            <div className="home-btn-login-cmpnt">
                <Link to="/home"><button><i class="fas fa-home"></i> Home</button></Link>
            </div>
            <div className={toggleInUpBtn ? "login-cont s-signUp" : "login-cont "} >
                <div className="login-form sign-in-lgn">
                    <form action="">
                        <h2>Sign In</h2>
                        <label htmlFor="">
                            <span>Email Address</span>
                            <input required type="email" name="" id="" />
                        </label>
                        <label htmlFor="">
                            <span>Password</span>
                            <input required type="password" name="" id="" />
                        </label>
                        <button className="login-sign-in-submit" type='submit'> sign in</button>
                        <p className="forgot-pass">Forgot Password ?</p>
                        <div className="login-social-media">
                            <li><img src="https://www.africabaie.com/wp-content/uploads/2020/10/facebook-logo-2019.png" alt="" /></li>
                            <li><img src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png" alt="" /></li>
                            <li><img src="https://seeklogo.com/images/G/github-logo-7880D80B8D-seeklogo.com.png" alt="" /></li>
                        </div>
                    </form>
                </div>
                <div className="login-sub-cont">
                    <div className="image-lgn">
                        <div className="image-text-lgn m-up">
                            <h2>New Here?</h2>
                            <p>Sign Up Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className="image-text-lgn m-in">
                            <h2>One of us?</h2>
                            <p>if you already have an account, just Sign in </p>
                        </div>
                        <div onClick={() => setToggleInUpBtn(!toggleInUpBtn)} className="lgn-img-btn">
                            <span className="m-up">Sign Up</span>
                            <span className="m-in">Sign In</span>
                        </div>
                    </div>
                    <div className="login-form sign-up-lgn">
                        <form action="">
                            <h2>Sign Up</h2>
                            <label htmlFor="">
                                <span>Name</span>
                                <input required type="text" />
                            </label>
                            <label htmlFor="">
                                <span>Email</span>
                                <input required type="email" />
                            </label>
                            <label htmlFor="">
                                <span>Password</span>
                                <input required type="password" />
                            </label>
                            <label htmlFor="">
                                <span>Confirm Password</span>
                                <input required type="password" />
                            </label>
                            <button type='submit' className='login-sign-in-submit'>Sign Up Now</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;