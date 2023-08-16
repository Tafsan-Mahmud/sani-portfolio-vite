import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { PageTheme } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';
import './BodyDashboard.css';

const BodyDashboard = () => {


    const [mainTheme, setMainTheme] = useContext(PageTheme);


    const [lightOrDark, setLightOrDark] = useState(null);
    const [counting, setCounting] = useState(0);
    

    const startCount = () => {
        setCounting(counting + 1)
    }
    const endCount = () => {
        if (counting > 5) {
            setCounting(counting - 1)
        }

    }


    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('DLMode'));
        setLightOrDark(data)
    }, [mainTheme]);

    return (
        <div id={lightOrDark ? 'MLight' : 'noNeed'} className='BodyDashboard'>
            <div className="container-fluid">
                <Sidebar></Sidebar>
                <div className="main-dashboard-body">
                    <h1>WELCOME TO DASHBOARD</h1>
                </div>

            </div>
        </div>
    );
};

export default BodyDashboard;