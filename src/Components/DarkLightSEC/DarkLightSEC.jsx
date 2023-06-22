
import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { PageTheme } from '../../App';
import './DarkLightSEC.css';

const DarkLightSEC = () => {
   const [mainTheme, setMainTheme] = useContext(PageTheme);
    const modeData = () => {
        return JSON.parse(localStorage.getItem('DLMode')) || false ;
    }
    const [lightOrDark, setLightOrDark] = useState(modeData());
    const changeModeDL = () => {
        setLightOrDark(!lightOrDark);
        setMainTheme(!mainTheme)
    }

    useEffect(() => {
        localStorage.setItem("DLMode", JSON.stringify(lightOrDark))
    }, [lightOrDark]);

    return (
        <div onClick={changeModeDL} id="D-L-btn" className={lightOrDark ? 'TGL-Theme' : 'mainDv-D-L'}>
            <div className="wrp-D-L">
                <div className="mode-txt-D-L">
                    <p className='txt-D-L-1'>Daylight</p>
                    <p className='txt-D-L-2'>Night</p>
                </div>

                <div className="moon-sun-D-L">
                    {
                        lightOrDark ? <i class="fas fa-sun"></i> : <i class="fas fa-moon"></i>
                    }
                </div>
            </div>
        </div>
    );
};

export default DarkLightSEC;