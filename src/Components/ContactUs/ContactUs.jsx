import React, { useContext, useEffect, useState } from 'react';
import './ContactUs.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { PageTheme } from '../../App';


const ContactUs = () => {
    const [mainTheme, setMainTheme] = useContext(PageTheme);
    const [lightOrDark, setLightOrDark] = useState(null);
    const [animationRSP7, setAnimationRSP7] = useState(false);
    useEffect(() => {
        const dlData = JSON.parse(localStorage.getItem('DLMode'));
        setLightOrDark(dlData);
        if (window.innerWidth < 988) {
            setAnimationRSP7(true)
        }
    }, [mainTheme]);
    return (
        <div id={lightOrDark ? 'setLight' : ''}>
            <div id="Contact-us">
                <div className="header-cnt">
                    <h1>CONTACT</h1>
                    <h2 id='get_in_touch'>GET IN TOUCH</h2>
                </div>
                <div className="content_sec-cnt">
                    <div className="info_sec_cnt">
                        <div className="respv-700">
                            <h3>DON'T BE SHY</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit dicta dolores unde earum, iste totam, nobis praesentium velit laborum delectus ipsum, officiis eum. Harum doloribus porro quae sequi dignissimos sunt.</p>
                        </div>
                        <div className="span_sec_cnt">
                            <span className='span_icon_cnt'><i class="fas fa-envelope"></i></span>
                            <span className='span_m-c_cnt'>Mail Me</span>
                            <span className='span_m-c_cnt2'>thesaanii@gmail.com</span>
                            <span className='span_icon_cnt'><i class="fas fa-phone-alt"></i></span>
                            <span className='span_m-c_cnt'>Call Me</span>
                            <span className='span_m-c_cnt2'>+018-6977-540</span>
                        </div>
                    </div>
                    <div className="input_sec_cnt">
                        <form action="">
                            <div className="input_content_cnt">
                                <div className="user_input_filed_cnt">
                                    <input type="text" required placeholder='Enter your name' />
                                    <input type="text" required placeholder='Enter your valid email address' />
                                    <textarea name="" required placeholder='Enter your message' id="" cols="30" rows="6"></textarea>
                                </div>
                                <input type="checkbox" id="checkboxcnt" />
                                <label className='chechboxContact' for='checkboxcnt'>I Accept The Terms Of Service</label>
                            </div>
                            <input type="submit" value="Submit" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;



// data-aos={animationRSP7 ? 'fade-up' : 'fade-left'}