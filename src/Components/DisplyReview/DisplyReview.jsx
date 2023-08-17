import React, { useState } from 'react';
import './DisplyReview.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'



const DisplyReview = (props) => {
    const { reviewerImage, starRate, reviewerTittle, reviewerDESP, countryName, reviewerName } = props.sliderData;
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
                    <div className="review_img_box">
                        <img src={reviewerImage} alt="" />
                    </div>
                    <div className="nm-ttl">
                        <h5>{reviewerName}</h5>
                        <span>{reviewerTittle}.</span>
                        {/* <span>@{reviewerDESP.slice(0, 15)}</span> */}
                        <span id='reviwerCountry'>From, <span>"{countryName}"</span></span>
                    </div>
                </div>
                <div onClick={againChange} className="Star-Rate d-flex justify-content-start align-items-center">
                    <h4>
                        {starRate === 1 && <div>
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon className="star-disable" icon={faStar} />
                            <FontAwesomeIcon className="star-disable" icon={faStar} />
                            <FontAwesomeIcon className="star-disable" icon={faStar} />
                            <FontAwesomeIcon className="star-disable" icon={faStar} /></div>}
                        {starRate === 2 && <div>
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon className="star-disable" icon={faStar} />
                            <FontAwesomeIcon className="star-disable" icon={faStar} />
                            <FontAwesomeIcon className="star-disable" icon={faStar} /></div>}
                        {starRate === 3 && <div>
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon className="star-disable" icon={faStar} />
                            <FontAwesomeIcon className="star-disable" icon={faStar} /></div>}
                        {starRate === 4 && <div>
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon className="star-disable" icon={faStar} /></div>}
                        {starRate === 5 && <div>
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} /></div>}
                    </h4>
                </div>
                <div onClick={againChange} className="user-comment">
                    <p>{reviewerDESP} </p>
                </div>
                <a onClick={readMoreOrLess} className="see-more-rvw"></a>
            </div>
        </div>
    );
};

export default DisplyReview;