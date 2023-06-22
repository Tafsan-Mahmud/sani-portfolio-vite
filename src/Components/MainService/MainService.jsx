import React from 'react';
import { useState, useEffect, useContext } from 'react';
import DisplyService from './DisplyService/DisplyService';
import './MainService.css';
import fakedata from '../fakeData';
import { PageTheme } from '../../App';


const MainService = () => {
    const [mainTheme, setMainTheme]=useContext(PageTheme);
    const [lightOrDark, setLightOrDark]= useState(null);
    const [allServiceData, setAllServiceData] = useState([]);
    const suffleData =  fakedata.sort(()=>Math.random() - 0.5 )
    useEffect(() => {
        fetch(fakedata)
            .then(res => res.json())
            .then(data => setAllServiceData(data));
    const dlData = JSON.parse(localStorage.getItem('DLMode'));
    setLightOrDark(dlData);
    }, [mainTheme]);
    return (
        <div id={lightOrDark? 'itsLight': ''} >
            <div  className="full-service-page" >
                <div className="container">
                    <div className="row">
                        <div data-aos="fade-right" className="srvc-top-text-padding">
                            <h1>Our Services...</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br />dignissimos eum, autem nulla, beatae dicta reprehenderit ex, distinctio <br />  magnam culpa iste. Placeat.</p>
                        </div>
                        {
                            suffleData.map(data => <DisplyService data={data}></DisplyService>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainService;