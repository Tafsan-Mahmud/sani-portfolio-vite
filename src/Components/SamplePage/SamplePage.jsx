import React, { useEffect, useState } from 'react';
import SimpleNavBar from '../SimplaeNavBar/SimplaeNavBar';
import './SamplePage.css';


const SamplePage = () => {
    return (
        <div className='error_page'>
            <SimpleNavBar></SimpleNavBar>
            <h1>404! [page not found]</h1>
            <h2>blank page not found please try again</h2>
            <h2>blank page not found please try again</h2>
            <h2>blank page not found please try again</h2>
            <h2>blank page not found please try again</h2>
            <h2>blank page not found please try again</h2>
        </div>
    );
};

export default SamplePage;