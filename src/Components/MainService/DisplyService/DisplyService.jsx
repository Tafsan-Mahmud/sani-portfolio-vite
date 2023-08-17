import React from 'react';
import './DisplyService.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';



const DisplyService = (props) => {
    const { serviceImage, postId, _id, name, ServiceTittle, Discription, body, website, lisOfServices } = props.data;
    const history = useHistory();
    const handlePushSingleService = (sID) => {
        history.push(`/ServiceDetail/${sID}`)
    }
    return (
        <div data-aos="fade-up" className="col-md-4 mb-5 pb-5">
            <div className="service-crd-dsgn">
                <div className="srvc-box">
                    <div className="srvc-img-nme d-flex align-items-center justify-content-center mb-3">
                        <div className="srvs_img_cstm_box">
                            <img className="pb-2" src={serviceImage} alt="" />
                        </div>
                        <h4 className="pb-2">{ServiceTittle}</h4>
                    </div>
                    {/* <p className="text-center mb-2">{ShortDisCription}</p> */}
                    {
                        lisOfServices.map(allFD => <h6><FontAwesomeIcon style={{ color: '#00c000' }} icon={faCheck} /> {allFD.Service}</h6>)
                    }
                    <div className="d-flex align-items-center justify-content-center mt-4">
                        <div className="cstm-glow-btn">
                            <button onClick={() => handlePushSingleService(_id)} className="srvc-deal-btn">Booking Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DisplyService;