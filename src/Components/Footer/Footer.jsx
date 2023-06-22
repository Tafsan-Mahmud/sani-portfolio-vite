import React, { useEffect, useState } from 'react';
import './Footer.css';
import developerImg from './84035146_821517271696128_6218772504672993280_n.jpg'
import { Link } from 'react-router-dom';

const Footer = () => {
    const [animationRSP8, setAnimationRSP8] = useState(false);
    useEffect(()=>{
        if (window.innerWidth < 988) {
            setAnimationRSP8(true)
        }
    },[animationRSP8]);
    return (
        <div id="Footer" className="pt-5">
            <div className="container">
                <div className="row">
                    <div data-aos='fade-right' className="col-md-4 mb-4">
                        <h2 className="ftr-ttl-tx-dsg">About Me</h2>
                        <p className="ftr-abt-p-tx-cl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia quasi odio et fuga. Laboriosam sint quasi itaque, excepturi, earum aperiam eius similique dolorum repellendus voluptatum inventore quis qui nesciunt illum?</p>
                        <div className="ftr-scl-mda-icn-dsg pt-1">
                            <h5>Social Media</h5>
                            <ul>
                                <li><a className="sci-dsg-fb" href="https://www.facebook.com/sani1288" target="_bold"><i class="fab fa-facebook-f"></i></a></li>
                                <li><a className="sci-dsg-tw" href="https://www.facebook.com/sani1288" target="_bold"><i class="fab fa-twitter"></i></a></li>
                                <li><a className="sci-dsg-ig" href="https://www.facebook.com/sani1288" target="_bold"><i class="fab fa-instagram"></i></a></li>
                                <li><a className="sci-dsg-pt" href="https://www.facebook.com/sani1288" target="_bold"><i class="fab fa-pinterest-p"></i></a></li>
                                <li><a className="sci-dsg-ytb" href="https://www.facebook.com/sani1288" target="_bold"><i class="fab fa-youtube"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div data-aos={animationRSP8 ? 'fade-up' : 'fade-left'} className="col-md-2 mb-4">
                        <h2 className="ftr-ttl-tx-dsg">Useful Links</h2>
                        <ul className="useful-links">
                            <li><Link className="nav-link cstm-usefil-lnk" to='/home'>HOME</Link></li>
                            <li><Link className="nav-link cstm-usefil-lnk" to='/home'>SERVICES</Link></li>
                            <li><Link className="nav-link cstm-usefil-lnk" to='/home'>ABOUT ME</Link></li>
                            <li><Link className="nav-link cstm-usefil-lnk" to='/home'>CONTACT</Link></li>
                            <li><Link className="nav-link cstm-usefil-lnk" to='/home'>BLOG</Link></li>
                            <li className="lgn-spcl-dsg "><Link className="nav-link cstm-usefil-lnk" to='/home'>LOGIN</Link></li>
                        </ul>
                    </div>
                    <div data-aos={animationRSP8 ? 'fade-up' : 'fade-right'} className="col-md-3 mb-4">
                        <h2 className="ftr-ttl-tx-dsg">Contact Me</h2>
                        <div className="lctn-nmbr-mail">
                            <div className="icon">
                                <i class="fas fa-map-marker-alt"></i>
                            </div>
                            <p>834 Manda street <br /> New Yourk,FQ 27102 <br /> USA</p>
                        </div>
                        <div className="lctn-nmbr-mail">
                            <div className="icon">
                                <i class="fas fa-phone-alt"></i>
                            </div>
                            <p>+8801876511805 <br />+8801876511805</p>
                        </div>
                        <div className="lctn-nmbr-mail">
                            <div className="icon">
                                <i class="fas fa-envelope"></i>
                            </div>
                            <p className="lctn-nmbr-mail ml-btm-xtra"> mdsanihossain@gmail.com</p>
                        </div>
                    </div>

                    {/* developer Information */}

                    <div data-aos={animationRSP8 ? 'fade-up' : 'fade-left'} className="col-md-3">
                        <h2 className="ftr-ttl-tx-dsg-only-developer">Developed By</h2>
                        <div className="dev_icon_main">
                            <div className="dev_icon">
                                <i class="fas fa-code"></i>
                            </div>
                            <p>Design and Developed by.</p>
                        </div>
                        
                        <div className="developer_info_main">
                            <div className="developer_img_name_tittl">
                                <div className="dev_img_only">
                                    <img src={developerImg} alt="" />
                                </div>
                                <div className="dev_nam_ttl">
                                    <h5>Abu Hasnat Nobin</h5>
                                    <span>@Software Developer.</span>
                                </div>
                            </div>
                            <div className="dev_contact_main">
                                    {/* <h6 id='dev_contact'>Contact</h6> */}
                                <div className="dev_social ftr-scl-mda-icn-dsg">
                                    <ul>
                                        <li><a className="sci-dsg-brws" href="https://tafsan-mahmud.web.app" target="_bold"><i class="fab fa-firefox"></i></a></li>
                                        <li><a className="sci-dsg-in" href="https://www.linkedin.com/in/abuhasnatnobin" target="_bold"><i class="fab fa-linkedin-in"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="dev_icon_main2">
                            <div className="dev_icon">
                                 <i class="fas fa-envelope"></i>
                            </div>
                                <p>tafsanmahmudnobin090@gmail.com</p>
                        </div>
                    </div>

                     {/* developer Information */}

                    <p className="copyright-p">
                        Copyright @ {(new Date().getFullYear())} | MD.Sani Hossain All Rights Reserved.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;