import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './SimplaeNavBar.css';
import DarkLightSEC from '../DarkLightSEC/DarkLightSEC';
import { PageTheme } from '../../App';



const SimpleNavBar = () => {
    
    const [mainTheme, setMainTheme] = useContext(PageTheme);
    const [lightOrDark, setLightOrDark] = useState(null);
    const [navbar, setNavbar] = useState(false)
    useEffect(() => {
        const dlData = JSON.parse(localStorage.getItem('DLMode'));
        setLightOrDark(dlData);
    }, [mainTheme]);
    const handleNavbar = () => {
        setNavbar(!navbar)
    }
    return (
        <div id={lightOrDark ? 'smpl_nav_Light' : ''}>
            <div className={navbar && "blog-navbar-tgl-active"}>
                <div className="sample-nav-bar-prjct-blg">
                        <h2 className="the-sani-main-logoblg-prjct"><i class="fab fa-phoenix-framework"></i> The Sani</h2>
                        <div className="DLmode-BackHome-blg-prjct">
                            <Link style={{ textDecoration: 'none' }} to='/home'><li>Home</li></Link>
                            <Link style={{ textDecoration: 'none' }} to='/Dashboard'><li>Dashboard</li></Link>
                            <span></span>
                            <DarkLightSEC></DarkLightSEC>
                        </div>
                        <div onClick={handleNavbar} className="responsive-togle-btn-blog">
                            {
                                navbar ? <i style={{fontSize:'33px'}} class="fas fa-times"></i> : <i class="fas fa-bars"></i>
                            }
                        </div>
                        <div className="blg-prjct-navlink-responsive">
                            <Link style={{ textDecoration: 'none' }} to='/home'><li>Home</li></Link>
                            <Link style={{ textDecoration: 'none' }} to='/Dashboard'><li>Dashboard</li></Link>
                            <DarkLightSEC></DarkLightSEC>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default SimpleNavBar;
