import React from 'react';
import { useEffect, useState, useContext} from 'react';
import { Link } from 'react-router-dom';
import { PageTheme } from '../../App';
import DarkLightSEC from '../DarkLightSEC/DarkLightSEC';
import './NavBar.css';

const NavBar = () => {
    const [mainTheme, setMainTheme] = useContext(PageTheme);
    const [lightOrDark, setLightOrDark] = useState(null)
    useEffect(()=>{
        const dldata = JSON.parse(localStorage.getItem('DLMode'));
        setLightOrDark(dldata);
    }, [mainTheme])
    return (
        <div id={lightOrDark ? 'navModeLight' : ''} className="fixed-top">
            <nav  id="nav-bg-clr-cstm" class="navbar navbar-expand-lg navbar-dark">
                <div class="container-fluid">
                    <Link class="navbar-brand rspnv-sbrnd" id="brand-name-nav" to='/home'><span><i class="fab fa-phoenix-framework"></i></span> The Sani</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item">
                                <Link onClick={() => window.scrollTo(500, 0)} class="nav-link nav-link-cstm" to="/home" >HOME</Link>
                            </li>
                            <li class="nav-item">
                                <Link onClick={() => window.scrollTo(0, 1390)} class="nav-link nav-link-cstm" to="#Service" >SERVICES</Link>
                            </li>
                            <li class="nav-item">
                                <Link onClick={() => window.scrollTo(0, 3350)} class="nav-link nav-link-cstm" to="#aboutMe">ABOUT ME</Link>
                            </li>
                            <li class="nav-item">
                                <Link onClick={() => window.scrollTo(0, 7070)} class="nav-link nav-link-cstm" href="#Contact-us">CONTACT</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link nav-link-cstm" to="/My-Blog-And-Project">BLOG & PROJECT</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link nav-link-cstm" to="/Dashboard">DASHBOARD</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link nav-link-cstm" to="/login">LOGIN</Link>
                            </li>
                            <li class="nav-item d-flex justify-content-cente align-items-center">
                                <DarkLightSEC></DarkLightSEC>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;