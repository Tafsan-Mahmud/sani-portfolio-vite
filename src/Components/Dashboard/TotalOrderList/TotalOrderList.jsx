import React, { useEffect, useState } from 'react';
import './TotalOrderList.css';
import Sidebar from '../Sidebar/Sidebar';
import swal from 'sweetalert';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Spinner from 'react-bootstrap/Spinner';

const TotalOrderList = () => {



    const [allOrderList, setAllOrderList] = useState([])
    useEffect(() => {
        fetch('https://portfolio-server-fawn.vercel.app/getAllBookingData')
            .then(res => res.json())
            .then(data => {
                setAllOrderList(data);
            })
    }, [allOrderList]);


    const handleStatusChange = (status, id) => {
        fetch(`https://portfolio-server-fawn.vercel.app/changeStatus/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ status: status })
        })
            .then(res => {
                if (res) {
                    console.log(res);
                    toast.success("Status Change Successfully")
                }
            })
    }

    const SWALmodalon = (id) => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    fetch(`https://portfolio-server-fawn.vercel.app/deleteSingleBooking/${id}`, {
                        method: 'DELETE',
                    })
                        .then(res => {
                            if (res) {
                                toast.success('Booking Deleted Successfully', {
                                    position:"top-center",
                                    autoClose: 4000,
                                    hideProgressBar: false,
                                    closeOnClick: true,
                                    pauseOnHover: true,
                                    draggable: true,
                                    progress: undefined,
                                    theme: "light",
                                    });
                            }
                        })
                } else {
                    swal("Your imaginary file is safe!");
                }
            });
    }

    return (
        <div id="total-order-list">

            <Sidebar></Sidebar>
            <div className="WRP-total-order-list">

                <div className="middle-h1-ttl-ord-lst">
                    <ToastContainer
                        position="top-right"
                        autoClose={3000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="light"
                    />
                    <h1 id='total-odr-list-h1'>Total Order List</h1>
                </div>
                <div className="main-content-ttl-list">
                    <div className="spinar-style">
                        {
                            allOrderList.length < 1 && <Spinner size='lg' animation="border" variant="info" />
                        }
                    </div>
                    <table className="table cstm-dsgn-tbl-ttl-ord-lst">
                        <thead>
                            <tr>
                                <th className="text-color-p" scope="col">Sr No</th>
                                <th className="text-color-p" scope="col">Name</th>
                                <th className="text-color-p" scope="col">Email</th>
                                <th className="text-color-p" scope="col">Service Name</th>
                                <th className="text-color-p" scope="col">WhatsApp Number</th>
                                <th className="text-color-p" scope="col">Country</th>
                                <th className="text-color-p" scope="col">Change Status</th>
                                <th className="text-color-p" scope="col">Action</th>
                            </tr>
                        </thead>

                        <tbody className="style-something">

                            {
                                allOrderList.map((data, index) => {
                                    return <tr key={data._id}>
                                        <td className="text-color-p">{index + 1}</td>
                                        <td className="text-color-p">{data.clientName}</td>
                                        <td className="text-color-p">{data.clientEmail}</td>
                                        <td className="text-color-p">
                                            <div className="d-flex">
                                                <div className="ttlordlstimg">
                                                    <img src={data.serviceImage} alt="" />
                                                </div>{data.serviceName}
                                            </div>
                                        </td>
                                        <td className="text-color-p">{data.clientWhatsAppNmbr}</td>
                                        <td className="text-color-p">{data.clientCountry}</td>
                                        <td className="text-color-p">
                                            <div id={data.status} class="dropdown">
                                                <button className="CSTM-dprdwn-btn-ttlord-lst dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                    {data.status}
                                                </button>
                                                <ul className="dropdown-menu bg-drpdwn-ttl-ord-lst" aria-labelledby="dropdownMenuButton1">
                                                    <li class="dropdown-item dropdown-item-cstm-p" onClick={() => handleStatusChange('Pending', data._id)}>Pending</li>
                                                    <li class="dropdown-item dropdown-item-cstm-p" onClick={() => handleStatusChange('On-Going', data._id)}>On going</li>
                                                    <li class="dropdown-item dropdown-item-cstm-p" onClick={() => handleStatusChange('Done', data._id)}>Done</li>
                                                </ul>
                                            </div>

                                        </td>
                                        <td>
                                            <button onClick={() => SWALmodalon(data._id)} class="Action-btn-ttl-ord-lst">Delete</button>
                                        </td>
                                    </tr>


                                })
                            }

                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
};

export default TotalOrderList;

