import React, { useState } from 'react';
import './DisplyReview.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'



const DisplyReview = (props) => {
    const { ServiceImage, Star, ServiceName, ShortDisCription, country, ReviewerTittle } = props.sliderData;
    const [readM, setReadM] = useState(false);
    const readMoreOrLess = () => {
        setReadM(!readM)
    }
    const againChange = () => {
        // setReadM(false)
    }
    return (
        <div>
            <div className={readM ? 'main-card-rvw active-height' : 'main-card-rvw'}>
                <div onClick={againChange} className="img-name-tittle mb-3 d-flex justify-content-start align-items-center">
                    <img src={ServiceImage} alt="" />
                    <div className="nm-ttl">
                        <h5>{ServiceName}</h5>
                        <span>{ReviewerTittle}.</span>
                        {/* <span>@{ShortDisCription.slice(0, 15)}</span> */}
                        <span id='reviwerCountry'>From, <span>"{country}"</span></span>
                    </div>
                </div>
                <div onClick={againChange} className="Star-Rate d-flex justify-content-start align-items-center">
                    <h4>
                        {Star === 1 && <div>
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon className="star-disable" icon={faStar} />
                            <FontAwesomeIcon className="star-disable" icon={faStar} />
                            <FontAwesomeIcon className="star-disable" icon={faStar} />
                            <FontAwesomeIcon className="star-disable" icon={faStar} /></div>}
                        {Star === 2 && <div>
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon className="star-disable" icon={faStar} />
                            <FontAwesomeIcon className="star-disable" icon={faStar} />
                            <FontAwesomeIcon className="star-disable" icon={faStar} /></div>}
                        {Star === 3 && <div>
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon className="star-disable" icon={faStar} />
                            <FontAwesomeIcon className="star-disable" icon={faStar} /></div>}
                        {Star === 4 && <div>
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon className="star-disable" icon={faStar} /></div>}
                        {Star === 5 && <div>
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} /></div>}
                    </h4>
                </div>
                <div onClick={againChange} className="user-comment">
                    <p>{ShortDisCription + ShortDisCription + ShortDisCription + ShortDisCription + ShortDisCription + ShortDisCription + ShortDisCription + ShortDisCription} </p>
                </div>
                <a onClick={readMoreOrLess} className="see-more-rvw"></a>
            </div>
        </div>
    );
};

export default DisplyReview;