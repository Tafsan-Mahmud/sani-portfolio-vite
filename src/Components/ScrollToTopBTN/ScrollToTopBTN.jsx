import React from 'react';
import './ScrollToTopBTN.css';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { useEffect } from 'react';

const ScrollToTopBTN = () => {
    const [scroll, setScroll] = useState(false);
    const handleScrolly = () => window.scrollTo({top:0, behavior:'smooth'});
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                setScroll(true)
            }
            else {
                setScroll(false)
            }
        })
    }, [scroll])
    return (
        <div onClick={handleScrolly} className={scroll ? "back-to-top-btn-sec" : 'scroll-btn-none'}>
            <FontAwesomeIcon id='back-to-top-btn' icon={faAngleUp} />
        </div>
    );
};

export default ScrollToTopBTN;