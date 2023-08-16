import React from 'react';
import './ManageService.css';
import 'react-toastify/dist/ReactToastify.css';
import Sidebar from '../Sidebar/Sidebar';
import fakeService from '../../fakeData';
import Spinner from 'react-bootstrap/Spinner';
import DisplyManageService from '../DisplyManageService/DisplyManageService';
import { Bounce, toast, ToastContainer } from 'react-toastify';
import { useEffect } from 'react';
import { useState } from 'react';

const ManageService = () => {
    const [allService, setAllService] = useState([]);
    const id = "6425e44e00abd366a2233899"
    useEffect(()=>{
        fetch(`https://portfolio-server-fawn.vercel.app/getAllService`)
        .then(res => res.json())
        .then(data =>{
            setAllService(data.reverse());
        })
    },[allService])
    return (
        <div id="manage-service">
            <Sidebar></Sidebar>
            <div className="manage-all-service-sec">
                <h1>Manage Your Services</h1>
                <div className="mng-all-sc">
                    {
                        allService.map((mngSdata) => <DisplyManageService Key={mngSdata._id} ManageData={mngSdata}></DisplyManageService>)
                    }
                </div>
                <div className="spinar-style">
                    {
                        allService.length < 1 && <Spinner size='lg' animation="border" variant="info" />
                    }
                </div>
            </div>
            <ToastContainer
            position="top-center"
            autoClose="2000"
            transition={Bounce}
            theme='light' />
        </div>
    );
};

export default ManageService;