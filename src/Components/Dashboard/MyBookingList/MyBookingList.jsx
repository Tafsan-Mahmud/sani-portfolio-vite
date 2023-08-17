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
                        specificData.length >= 1 ?
                        specificData.reverse().map(data => <DisplyMyBooking data={data}></DisplyMyBooking>) :
                        <div>
                            <h2 style={{color:'whitesmoke'}}>You dont have any booking-[empty]!</h2>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default MyBookingList;



