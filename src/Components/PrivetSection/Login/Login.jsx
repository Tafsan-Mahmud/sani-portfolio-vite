import React, { useContext } from 'react';
import './Login.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { app } from '../../firebase/firebase.init';
import swal from 'sweetalert';
import { AuthUser } from '../../../App';
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom';


const Login = () => {

    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    //ContextAuthDATA//

    const [authUser, setAuthUser] = useContext(AuthUser);
    // console.log(authUser);

    //ContextAuthDATA//

    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const [toggleInUpBtn, setToggleInUpBtn] = useState(false)
    const [err, setErr] = useState('')
    const [regName, setRegName] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('');
    const [regEmail, setRegEmail] = useState('')
    const [regPass, setRegPass] = useState('');
    const [regPassConfirm, setRegPassConfirm] = useState('');
    // const [trigger, setTrigger] = useState(false);
    // console.log(toggleInUpBtn)


    // useEffect(() => {
    //     localStorage.setItem('diersu', JSON.stringify(false));
    //     // setAuthUser(user);
    // }, []);


    const handletoggleSlider = () => {
        setToggleInUpBtn(!toggleInUpBtn);
        setErr('');
        setEmail('');
        setPass('');
        setRegName('');
        setRegEmail('');
        setRegPass('');
        setRegPassConfirm('');
    }

    const handleSignInWithPopup = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                // console.log(user);
                // setTrigger(true);
                handlelocaldata(result.user, true);
            })
            .catch(err => {
                console.log(err.message)
            })

    }
    const handleFacebookSigninPopup = ()=>{
        swal({
            title: "Working Progress",
            text: "this feature coming soon. you can sign in with [GOOGLE]",
            icon: "warning",
            button: true,
        })
    }
    const handleSignupWithEmailandPass = (e) => {
        e.preventDefault();
        if (regPass === regPassConfirm) {
            createUserWithEmailAndPassword(auth, regEmail, regPass)
                .then(result => {
                    updateProfile(auth.currentUser, {
                        displayName: regName,
                    })
                        .then(res => {
                            // setTrigger(true);
                            handlelocaldata(result.user, true);
                        })

                    if (result) {
                        swal({
                            title: "Please Verify Your Email [required]",
                            text: "we already send you a verification email please check! your email that you provide",
                            icon: "warning",
                        });
                        setErr('');
                        setRegName('');
                        setRegEmail('');
                        setRegPass('');
                        setRegPassConfirm('');
                    }
                    sendEmailVerification(auth.currentUser)
                        .then(verify => {

                        })
                })
                .catch(err => {
                    setErr(err.message);
                })
        }
        else {
            setErr('Error: Password does not match');
        }
    }
    const handleSigninWithEmailAndPass = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, pass)
            .then(result => {
                setErr('');
                setEmail('');
                setPass('');
                // setTrigger(true);
                handlelocaldata(result.user, true);
            })
            .catch(err => {
                setErr(err.message);
            })
    }
    const handlelocaldata = (data, redirect) => {
        const ftr = {
            marlin: data.email,
            nixer: data.displayName,
            sbiulr: data.photoURL,
            accessTKN: data.accessToken,
            ismarlinfide: data.emailVerified,
            idu: data.uid,
        }
        setAuthUser(ftr);
        localStorage.setItem('diersu', JSON.stringify(ftr));
        if (redirect) {
            history.replace(from);
        }
    }

    return (
        <div id='main-login-sec'>
            <div className="home-btn-login-cmpnt">
                <Link to="/home"><button><i class="fas fa-home"></i> Home</button></Link>
            </div>
            <div className={toggleInUpBtn ? "login-cont s-signUp" : "login-cont "} >
                <div className="login-form sign-in-lgn">
                    <form action="" onSubmit={handleSigninWithEmailAndPass}>
                        <h2>Sign In</h2>
                        <label htmlFor="">
                            <span>Email Address</span>
                            <input onChange={(e) => setEmail(e.target.value)} value={email} required type="email" name="" id="" />
                        </label>
                        <label htmlFor="">
                            <span>Password</span>
                            <input required onChange={(e) => setPass(e.target.value)} value={pass} type="password" name="" id="" />
                        </label>
                        <p className='text-danger text-center'>{err}</p>
                        <button className="login-sign-in-submit" type='submit'> sign in</button>
                        <p className="forgot-pass">Forgot Password ?</p>
                        <div className="login-social-media">
                            <h5>Sign-in with Social Media</h5>
                            <li onClick={handleFacebookSigninPopup}><img src="https://www.africabaie.com/wp-content/uploads/2020/10/facebook-logo-2019.png" alt="" /></li>
                            <li onClick={handleSignInWithPopup}><img src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png" alt="" /></li>
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
                        <div onClick={handletoggleSlider} className="lgn-img-btn">
                            <span className="m-up">Sign Up</span>
                            <span className="m-in">Sign In</span>
                        </div>
                    </div>
                    <div className="login-form sign-up-lgn">
                        <form action="" onSubmit={handleSignupWithEmailandPass}>
                            <h2>Sign Up</h2>
                            <label htmlFor="">
                                <span>Name</span>
                                <input onChange={(e) => setRegName(e.target.value)} value={regName} required type="text" />
                            </label>
                            <label htmlFor="">
                                <span>Email</span>
                                <input onChange={(e) => setRegEmail(e.target.value)} value={regEmail} required type="email" />
                            </label>
                            <label htmlFor="">
                                <span>Password</span>
                                <input onChange={(e) => setRegPass(e.target.value)} value={regPass} required type="password" />
                            </label>
                            <label htmlFor="">
                                <span>Confirm Password</span>
                                <input onChange={(e) => setRegPassConfirm(e.target.value)} value={regPassConfirm} required type="password" />
                            </label>
                            <p className='text-danger text-center'>{err}</p>
                            <button type='submit' className='login-sign-in-submit'>Sign Up Now</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;