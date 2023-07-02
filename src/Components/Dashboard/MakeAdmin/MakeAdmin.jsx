import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './MakeAdmin.css';
import { useState } from 'react';
import { useEffect } from 'react';
import swal from 'sweetalert';

const MakeAdmin = () => {

    const [eamilData, setEmailData] = useState('');
    // const [isAdmin, setIsAdmin] = useState(null);

    const handleAdminStore = (e) =>{
      e.preventDefault();
        fetch('http://localhost:4000/makeAdmin',{
            method:'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify({adminEmail: eamilData})
        })
        .then(res =>{
            if(res.status === 404){
                swal({
                    title: "This email already exist",
                    icon: "warning",
                    dangerMode: true,
                });
            }
            else if(res.status === 200){
                swal({
                    title: "New [Admin] added Successfully",
                    icon: "success",
                    button: "ok",
                  });
           }
        })
        setEmailData('');

    }
    return (
        <div id="makeAdmin">
            <div className="main-admin-sec">
                <Sidebar></Sidebar>
                <div className="add-admin-sec">
                    <h1>Make an Admin</h1>
                    <div className="add-content">
                        <form onSubmit={handleAdminStore} autoComplete="off">
                            <div className="input-data-admin">
                                <input onChange={(e)=>setEmailData(e.target.value)} required type="email" name="AdminEmail" value={eamilData} />
                                <div className="underline-admin"></div>
                                <span>Email</span>
                            </div>
                            <div className="xmpl-admin">
                                <div className="typ-submit-admin">
                                    <input type="submit" value="Submit" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;