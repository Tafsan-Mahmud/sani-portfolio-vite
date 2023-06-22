import React, { useState } from 'react';
import './MyBookingList.css';
import Sidebar from '../Sidebar/Sidebar';
import exmpleBookingData from '../../fakeData';
import DisplyMyBooking from '../DisplyMyBooking/DisplyMyBooking';

const MyBookingList = () => {
    return (
        <div id="myBookingList">
            <Sidebar></Sidebar>
            <div className="myBooking-content-main">
                <h2 id="myBookingList-ttl-h1">My Booking List</h2>
                <div className="card-container">
                    {
                        exmpleBookingData.reverse().map(data => <DisplyMyBooking data={data}></DisplyMyBooking>)
                    }
                </div>
            </div>
        </div>
    );
};

export default MyBookingList;



