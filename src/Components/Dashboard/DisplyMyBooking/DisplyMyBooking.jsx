import React from 'react';
import './DisplyMyBooking.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const DisplyMyBooking = (props) => {
    const { ServiceImage, id, status, ServiceName, ShortDisCription, allServices } = props.data;

    return (
        <div id="disply-my-booking-list">
            <div className="myBookingCarrd">
                <div className="wrp-m-bkng">
                    <div className="img-tttl-myBkng mb-2">
                        <img src={ServiceImage} alt="" />
                        <button id={status}>{status}</button>
                    </div>
                    <h4 id="m-bkng-h1">{ServiceName}</h4>
                    <p id="m-bkng-p1">{ShortDisCription}</p>
                    <div className="wrp-bkng-topic">
                        {
                            allServices.map(data => <p style={{ color: '#afafaf' }}><FontAwesomeIcon style={{ color: '#00df00' }} icon={faCheck} /> {data.topic}</p>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DisplyMyBooking;
