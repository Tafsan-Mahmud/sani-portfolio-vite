import React, { useContext } from 'react';
import './CustomerReview.css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { Autoplay, EffectCoverflow, Pagination, Navigation } from "swiper";
import DisplyReview from '../DisplyReview/DisplyReview';
import { useState } from 'react';
import { PageTheme } from '../../App';
import { useEffect } from 'react';
import { Spinner } from 'react-bootstrap';

SwiperCore.use([EffectCoverflow, Pagination, Autoplay, Navigation]);


const CustomerReview = () => {

    const [maintheme, setMaintheme] = useContext(PageTheme);
    const [lightOrDark, setLightOrDark] = useState(null);
    const [reviewdata, setReviewData] = useState([]);

    useEffect(() => {
        fetch('https://portfolio-server-fawn.vercel.app/getAllReviewData')
            .then(res => res.json())
            .then(data => {
                setReviewData(data);
            })
        const dlData = JSON.parse(localStorage.getItem('DLMode'));
        setLightOrDark(dlData);
    }, [maintheme])



    return (
        <div id={lightOrDark ? 'itsLightmode' : ''}>
            <div id="customer-review">
                <div data-aos="fade-down" className="top-text-rvw pt-5 pb-4 text-center">
                    <h1>What Customers Say</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo inventore optio assumenda dolor <br /> magnam laboriosam officiis ullam  earum quos suscipit? Laudantium explicabo <br />non cupiditate enim, quam eos voluptas ea temporibus!</p>
                </div>
                {
                    reviewdata.length > 0 &&
                    <Swiper data-aos='fade-up' className="mySwiper swiper-container"
                        modules={[Autoplay, Pagination, Navigation]}
                        effect={"coverflow"}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={"auto"}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        coverflowEffect={{
                            rotate: 10,
                            stretch: 0,
                            depth: 300,
                            modifier: 1,
                            slideShadows: true
                        }}
                        // pagination={true}
                        loop={true}
                    // onSlideChange={() => console.log('slide entry')}
                    // onSwiper={(swiper) => console.log(swiper)}
                    >
                        {
                            reviewdata.map(sliderData => {
                                return (
                                    <div>
                                        <SwiperSlide className="swiper-slide"><DisplyReview sliderData={sliderData} ></DisplyReview></SwiperSlide>
                                    </div>
                                )
                            })

                        }
                    </Swiper>
                }
                { reviewdata.length < 1 && 
                    <div className="spinnar_review">
                        <Spinner size='lg' animation="border" variant="info" />
                        <span style={{ color: 'red', marginLeft: '10px' }}>Loading...</span>
                    </div>
                }
            </div>
        </div>
    );
};

export default CustomerReview;
