import React, { useContext, useEffect, useMemo, useState } from 'react';
import './ServiceDetails.css';
import SingleServiceData from '../fakeData';
import { useParams } from 'react-router-dom'; import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { Button, Modal } from 'react-bootstrap';
import swal from 'sweetalert';
import { PageTheme } from '../../App';
import SimpleNavBar from '../SimplaeNavBar/SimplaeNavBar';



const ServiceDetails = () => {
    const { Sid } = useParams();
    const [navbar, setNavbar] = useState(false);
    const [show, setShow] = useState(false);
    const [allCountry, setAllCountry] = useState([])
    const [singleData, setSingleData] = useState({})
    const [forMapSingleData, setForMapSingleData] = useState([])
    const { id, ServiceName, ServiceImage, ShortDisCription, } = singleData;
    const [clientName, setClientName] = useState('')
    const [clientEmail, setClientEmail] = useState('')
    const [clientWhatsAppNmbr, setClientWhatsAppNmbr] = useState('')
    const [countryName, setCountryName] = useState('')
    const [mainTheme, setMainTheme] = useContext(PageTheme);
    const [lightOrDark, setLightOrDark] = useState(null);
    useEffect(() => {
        const dlData = JSON.parse(localStorage.getItem('DLMode'));
        setLightOrDark(dlData);
    }, [mainTheme]);
    const handleConfirmBooking = (e) => {
        e.preventDefault()
        if (countryName === '') {
            swal({
                title: "Please Select Your Country!",
                icon: "warning",
                button: "ok",
            });
        }
        else {
            const clientData = {
                serviceID: id.toString(),
                serviceName: ServiceName,
                clientName: clientName,
                clientEmail: clientEmail,
                clientWhatsAppNmbr: clientWhatsAppNmbr,
                clientCountry: countryName,
                serviceImage: ServiceImage,
                status: 'Pending'
            }
            fetch('https://portfolio-server-fawn.vercel.app/newClientBoking', {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(clientData)
            })
                .then(res => {
                    if (res) {
                        swal({
                            title: "Booking Confirm Successfully",
                            icon: "success",
                            button: "ok",
                        });
                    }
                })
            setClientName('');
            setClientEmail('')
            setClientWhatsAppNmbr('')
            setCountryName('')
            handleClose();
        }
    }

    useEffect(() => {
        fetch('https://laravel-world.com/api/countries')
            .then(res => res.json())
            .then(country => setAllCountry(country.data))
        const findedData = SingleServiceData.find(data2 => data2.id === parseInt(Sid));
        setSingleData(findedData);
        setForMapSingleData(findedData.allServices)
    }, [])
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div id={lightOrDark ? 'dtl_light' : ''}>
            <div id='main-Service-details-pg' >
                <SimpleNavBar></SimpleNavBar>
                <div className="ServiceDetail-Content">
                    <h1 id='detailServiceName-img'><img className='detail-srvs-img' src={ServiceImage} alt="" /> {ServiceName}</h1>
                    <div className="content-details-services">
                        <div className="all-topic-details-srvs">
                            {
                                forMapSingleData.map(data => <p><FontAwesomeIcon style={{ color: '#cc4831' }} icon={faAngleRight} /> {data.topic}</p>)
                            }
                        </div>
                        <div className="detail-service-description">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique hic, culpa iusto nostrum tempore quam quae doloremque, labore eos cum cumque modi officiis veritatis corrupti, ipsam blanditiis! Inventore provident dignissimos quos totam ut labore odio, mollitia corrupti dolor aperiam dolore non voluptatum libero voluptas odit a itaque ipsa deleniti iusto est voluptate porro? Et explicabo dolor dolorem? Incidunt nisi, id soluta ducimus optio necessitatibus, autem libero quae exercitationem blanditiis tenetur eaque architecto unde sequi culpa magni delectus tempore ipsam voluptatibus hic? Iste amet dolorem unde? Veritatis, facere, voluptates aliquam perferendis magni itaque ratione deleniti sint expedita accusantium temporibus! Velit quod atque quo odit accusantium libero labore soluta quibusdam! Ipsam repellat, cumque beatae dicta architecto itaque at modi ducimus, cum, commodi expedita enim? Tenetur ipsum tempora magni dolorem, possimus in quod ut dolores voluptatibus facere sit necessitatibus quia cum nobis dignissimos consectetur error eius exercitationem corrupti doloribus aliquam adipisci! Corrupti expedita modi fuga ullam hic delectus maiores, sunt sed corporis illo maxime, ipsum optio animi aliquam voluptatibus. Placeat a, minima quae cumque quia velit esse culpa voluptatem vitae vel quidem temporibus nemo sapiente eaque. Aliquam tenetur earum, assumenda doloribus voluptatem provident libero. Voluptatem soluta dolore commodi pariatur beatae, minus dicta eos.</p>
                        </div>
                    </div>
                    <div className="Modal-boking-service">
                        <Modal dialogClassName='xxxxxxxxxxxxxxxxxx'
                            show={show}
                            backdrop="static"
                            keyboard={false}
                            centered >
                            <button className='btn-mng-srvs-modal-edit-close' onClick={handleClose}><i class="fas fa-times"></i></button>
                            <h3 id='bokking-form-dtl-srvc'>Booking form</h3>
                            <div className="dtl-srvc-booking-form-sec">
                                <form onSubmit={handleConfirmBooking} action="" autocomplete="off" style={{ paddingBottom: '20px' }}>
                                    <div className="srvs-dtl-bkng-frm">
                                        <h5>Service Name</h5>
                                        <input type="text" readOnly value={'->' + ServiceName} />
                                    </div>
                                    <div className="dtl-srvc-booking-form-input-data">
                                        <input onChange={(e) => setClientName(e.target.value)} value={clientName} type="text" required name="Name" />
                                        <span>Your Name</span>
                                        <div className="underline-dtl-srvc-booking-form"></div>
                                    </div>
                                    <div className="dtl-srvc-booking-form-input-data">
                                        <input onChange={(e) => setClientEmail(e.target.value)} value={clientEmail} type='email' required name="Email" />
                                        <span>Email</span>
                                        <div className="underline-dtl-srvc-booking-form"></div>
                                    </div>
                                    <div className="dtl-srvc-booking-form-input-data">
                                        <input onChange={(e) => setClientWhatsAppNmbr(e.target.value)} value={clientWhatsAppNmbr} type="number" required name="WhatsAppNumber" id="" />
                                        <span>What's App Number</span>
                                        <div className="underline-dtl-srvc-booking-form"></div>
                                    </div>
                                    <div className="mt-4">
                                        <span className='cntry_scltn_drpdwn'>Your Country</span>
                                        <select id='dtl-srvc-booking-form-country-drpdwn' name='Country' required value={countryName} onChange={(e) => setCountryName(e.target.value)}>
                                            <option>-- select a country --</option>
                                            {
                                                allCountry.map(country => <option id='dtl-srvc-booking-form-country-drpdwn-option-maping'>{country.name}</option>)
                                            }

                                        </select>
                                    </div>
                                    <div className="submit-half">
                                        <div className="typ-submit-srvs-dtl">
                                            <input type="submit" value="Confirm" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </Modal>
                    </div>
                    <div className="booking-Specific-service">
                        <button onClick={handleShow}><i class="fas fa-money-check"></i> Booking</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;