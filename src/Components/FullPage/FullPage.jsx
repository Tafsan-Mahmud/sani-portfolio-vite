import React from 'react';
import AboutMESkills from '../AboutMESkills/AboutMESkills';
import ContactUs from '../ContactUs/ContactUs';
import CustomerReview from '../CustomerReview/CustomerReview';
import Footer from '../Footer/Footer';
import Home from '../Home/Home';
import MainService from '../MainService/MainService';
import MapForContact from '../MapForContact/MapForContact';
import MobileServices from '../MobileServices/MobileServices';
import NavBar from '../NavBar/NavBar';
import SatisfiedCustomers from '../SatisfiedCustomers/SatisfiedCustomers';
import SeoExpertExperiencs from '../SeoExpertExperiencs/SeoExpertExperiencs';
import WhyChooseMe from '../WhyChooseMe/WhyChooseMe';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import './FullPage.css';




const FullPage = () => {

    return (
        <div className="all-sec-pg-dngr">
            <NavBar></NavBar>
            <Home></Home>
            <MessengerCustomerChat pageId="102776305148106" appId="611792551020341" htmlRef="<REF_STRING>" />
            <SeoExpertExperiencs></SeoExpertExperiencs>
            <MainService></MainService>
            <AboutMESkills></AboutMESkills>
            <WhyChooseMe></WhyChooseMe>
            <MobileServices></MobileServices>
            <CustomerReview></CustomerReview>
            <SatisfiedCustomers></SatisfiedCustomers>
            <ContactUs></ContactUs>
            <MapForContact></MapForContact>
            <Footer></Footer>
        </div>
    );
};

export default FullPage;

