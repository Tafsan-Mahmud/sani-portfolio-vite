import React, { useEffect, useState } from 'react';
import './MyBookingList.css';
import Sidebar from '../Sidebar/Sidebar';
import exmpleBookingData from '../../fakeData';
import DisplyMyBooking from '../DisplyMyBooking/DisplyMyBooking';

const MyBookingList = () => {
    const [specificData, setSpecificData] = useState([]);


    useEffect(()=>{
        const user = JSON.parse(localStorage.getItem('diersu'));
        fetch(`https://portfolio-server-fawn.vercel.app/specificBooking/${user.marlin}`)
        .then(res => res.json())
        .then(data =>{
            setSpecificData(data);
            console.log(data);
        });
    },[])
    return (
        <div id="myBookingList">
            <Sidebar></Sidebar>
            <div className="myBooking-content-main">
                <h2 id="myBookingList-ttl-h1">My Booking List</h2>
                <div className="card-container">
                    {
                        specificData.reverse().map(data => <DisplyMyBooking data={data}></DisplyMyBooking>)
                    }
                </div>
            </div>
        </div>
    );
};

export default MyBookingList;



