import React from 'react';
import './DisplyMyBooking.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const DisplyMyBooking = (props) => {
    const { _id, status, serviceName, serviceImage,Discription, lisOfServices } = props.data;

    return (
        <div id="disply-my-booking-list">
            <div className="myBookingCarrd">
                <div className="wrp-m-bkng">
                    <div className="img-tttl-myBkng mb-2">
                        <div className="mbookingspecific">
                            <img src={serviceImage} alt="" />
                        </div>
                        <button id={status}>{status}</button>
                    </div>
                    <h4 id="m-bkng-h1">{serviceName}</h4>
                    <p id="m-bkng-p1">{Discription.substring(0, 115) + "..."}</p>
                    <div className="wrp-bkng-topic">
                        {
                            lisOfServices.map(data => <p style={{ color: '#afafaf' }}><FontAwesomeIcon style={{ color: '#00df00' }} icon={faCheck} /> {data.Service}</p>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DisplyMyBooking;
