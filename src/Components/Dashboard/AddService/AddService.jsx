import React, { useEffect } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './AddService.css';
import swal from 'sweetalert';
import Modal from 'react-modal';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import axios, { all } from 'axios';


const AddService = () => {

    const [addInput, setAddInput] = useState('');
    const [disable, setDisable] = useState(false);
    const [preview, setPreview] = useState(null);
    const [forUpload, setForUpload] = useState(null);
    const [todoFkDta, setTodoFkDta] = useState([]);
    const [serviceImage, setServiceImage] = useState(null);
    const [serviceNameInput, setServiceNameInput] = useState('');
    const [srvsDiscription, setSrvsDiscription] = useState('');
    


    const handleTodoSet = () => {
        if (!addInput) {
            alert('Please Write Something')
        } else {
            setTodoFkDta([...todoFkDta, { id: Math.floor(Math.random() * 10000), Service: addInput }]);
            setAddInput('');
        }

    }
    const handleDeleteItem = (id) => {
        const updateData = [...todoFkDta].filter(data => data.id !== id);
        setTodoFkDta(updateData);
    }
    const handleServiceImage = (value)=>{
        // console.log(value);
        console.log(value.target.files[0]);
        setPreview(URL.createObjectURL(value.target.files[0]))
        setForUpload(value.target.files[0])
    }
    const handleUploadImageToServer = ()=>{
        swal({
            title: "Please Wait",
            text: "image uploading to the server, wait a few second!",
            icon: "warning",
        }).then(res =>{
            if(res){
                setDisable(true);   
            }
        })
        const imgData = new FormData();
                imgData.set('key', '0b33e9eff72081f866dd3d957f2512db')
                imgData.append('image', forUpload)
                axios.post('https://api.imgbb.com/1/upload',imgData)
                .then((res)=>{
                    swal({
                        title: "image upload successfully",
                        icon: "success",
                        button: "ok",
                      });
                    setServiceImage(res.data.data.display_url)
                    setForUpload(null);
                })
    }
    
    const handleStoreAllData = (x) => {
        x.preventDefault()
    const allData  = {
        ServiceTittle: serviceNameInput,
        serviceImage: serviceImage,
        lisOfServices: todoFkDta,
        Discription: srvsDiscription
    } 
        
        fetch('http://localhost:4000/addNewService',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(allData)
        }).then(res =>{
            console.log(allData);
            swal({
                title: "Service added Successfully",
                icon: "success",
                button: "ok",
              });
                setServiceImage(null)
                setServiceNameInput('')
                setTodoFkDta([])
                setSrvsDiscription('')
                setPreview(null)
        })
        .catch(err=>{
            console.log(err);
        })
    }

    const modalon = () => {
        setAddInput('')
        swal({
            title: "Warning",
            text: "Sorry You can not add More Service in this List!!",
            icon: "warning",
            // buttons: true,
            dangerMode: true,
        });
    }
    const handleSureImgIsTrue = (val) =>{
        if(val === 1){
            swal({
                title: "Warning",
                text: "before updating please confirm the new image that you choose, it's mandatory!",
                icon: "warning",
                dangerMode: true,
            });
        }
        else if(val === 2){
            swal({
                title: "Warning",
                text: "please wait for a few seconds because the image is processing!",
                icon: "warning",
                dangerMode: true,
            });
        }
    }
    return (
        <div id="addService">
            <div className="main-add-service-sec">
                <Sidebar></Sidebar>
                <div className="addservice-content-sec">
                    <h1 id="addService-ttl-m">Add Service</h1>
                    <div className="add-srvc-content">
                        <div className="service-coming-img-sec">
                            {
                                preview && <img id='srvs-incoming-img' src={preview} alt="" />
                            }
                            {
                                preview === null && <img id='srvs-incoming-img' src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png" alt="" />
                            }

                        </div>
                       
                        <form id='srvs-main-form' onSubmit={handleStoreAllData} className="w-100" action='' autoComplete='off'>
                            <div className="up-section">
                                {
                                    !serviceImage && <div>
                                    <h4>Choose service image</h4>
                                    <input onChange={(e)=>handleServiceImage(e)} type="file" name="serviceImage" id="service-image" />
                                    <label htmlFor="service-image"><FontAwesomeIcon icon={faCloudUploadAlt} /> Upload Photo</label>
                                </div>
                                }
                                
                                {
                                    forUpload && <div className="confirm_btn_sec_add"> 
                                    <h4>Confim this Image!</h4>
                                    {
                                        disable ? <li type="button" disabled>
                                        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                        <span > Loading...</span>
                                      </li>:
                                         <li onClick={handleUploadImageToServer}>Confirm?</li>
                                    }
                                    </div>
                                }
                               
                            </div>
                            <div className="add-srvc-all-input">
                                <div className="srvc-input-data">
                                    <input type="text" value={serviceNameInput} onChange={(e) => setServiceNameInput(e.target.value)} required name="Name" />
                                    <span>Service Name</span>
                                    <div className="underline-add-srvc"></div>
                                </div>
                                <div className="srvs-todo-add-sec">
                                    <span>Add Services ({6 - todoFkDta.length})</span>
                                    <div className='srvc-todo-add-OR-not-add-btn'>

                                        <input id='srvs-todo' placeholder='Write Todo Services' value={addInput} onChange={(e) => setAddInput(e.target.value)} type="text" />
                                        {
                                            todoFkDta.length === 6 && <button onClick={modalon} type="button" className='srvs-add-btn-disable' ><i class="fas fa-exclamation"></i> Add</button>
                                        }
                                        {
                                            todoFkDta.length < 6 && < button className='srvs-add-btn-active' type="button" onClick={handleTodoSet}><i class="fas fa-plus"></i> Add</button>
                                        }
                                    </div>
                                </div>
                                <div className="srvs-todo-listed-sec">
                                    {
                                        todoFkDta.concat().reverse().map(data => <li key={data.id} className='srvs-todos-dsgn'>{data.Service} <i onClick={() => handleDeleteItem(data.id)} id='srvs-todo-delet-btn' class="far fa-trash-alt"></i></li>
                                        )
                                    }
                                </div>
                                <div className="srvs-tex-discription">
                                    <span>Discription</span>
                                    <textarea value={srvsDiscription} onChange={(e) => setSrvsDiscription(e.target.value)} required name="description" rows="3"></textarea>
                                </div>
                            </div>
                            <div className="srvs-sbmt-sec">
                                <div className="srvs-sbmt-btn-sec">
                                    {
                                        forUpload && !disable ? <input onClick={()=>handleSureImgIsTrue(1)} className='sure-img-confirm-add' type="button" value="Submit" /> : <div>
                                            {
                                                !forUpload ? <input className='sure-img-confirm-add' type="submit" value="Submit" /> : <input onClick={()=>handleSureImgIsTrue(2)} className='sure-img-confirm-add' type="button" value="Submit" />
                                            }
                                        </div>
                                    }
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default AddService;