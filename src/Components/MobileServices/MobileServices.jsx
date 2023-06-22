import React, { useContext, useEffect, useState } from 'react';
import './MobileServices.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase, faWifi, faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import MobileServicesImg from './cpy.png';
import { PageTheme } from '../../App';

const MobileServices = () => {
    const [mainTheme, setMainTheme] = useContext(PageTheme);
    const [lightOrDark, setLightOrDark] = useState(null);
    const [animationRSP6, setAnimationRSP6] = useState(false);
    useEffect(()=>{
        const dlData = JSON.parse(localStorage.getItem('DLMode'));
        setLightOrDark(dlData);
        if (window.innerWidth < 988) {
            setAnimationRSP6(true)
        }
    },[mainTheme]);
    return (
        <div id={lightOrDark ? 'lightOn' : ''}>
            <div id="MobileServices">
                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-md-7 mt-5 mb-2">
                            <div data-aos="fade-down" className="text-mobile-service">
                                <h1>Dedicated SEO</h1>
                                <h1>Mobile Services</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, neque <br /> iste sequi blanditiis odit harum maiores eaque voluptatibus <br />Lorem ipsum dolor sit amet.</p>
                            </div>
                            <div className="row">
                                <div data-aos="fade-up" className="col-md-6 ">
                                    <div className="with-btn">
                                        <div className="card-mobile-srvc1">
                                            <h1><FontAwesomeIcon icon={faDatabase} /></h1>
                                            <h3>Optimizations</h3>
                                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam odio temporibus</p>
                                        </div>
                                        <div data-aos="fade-right">
                                            <button className="mobile-btn">Learn More  <FontAwesomeIcon icon={faLongArrowAltRight} /></button>
                                        </div>
                                    </div>
                                </div>
                                <div data-aos="fade-up" className="col-md-6">
                                    <div className="card-mobile-srvc2">
                                        <h1><FontAwesomeIcon icon={faWifi} /></h1>
                                        <h3>Mobile Data Analyze</h3>
                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam odio temporibus</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div data-aos={animationRSP6 ? 'fade-up' : 'fade-left'} className="col-md-5">
                            <div className="mobile-service-img-main mt-3 mb-3">
                                <img className="mbl-svc-img" src={MobileServicesImg} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>      
        </div>
    );
};

export default MobileServices;