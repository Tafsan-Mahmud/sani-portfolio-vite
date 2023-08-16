import React, { useEffect } from 'react';
import { useState } from 'react';
import swal from 'sweetalert';
import { Button, Modal } from 'react-bootstrap';
import './DisplyManageService.css';
import srvcPkCmng2 from './768px-Circle-icons-profile.svg.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt, faTrash, faCloud, faPencilAlt} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';




const DisplyManageService = (props) => {
    const [show, setShow] = useState(false);
    const [disable, setDisable] = useState(false);
    const [preview, setPreview] = useState(null);
    const [forUpload, setForUpload] = useState(null);
    const [servicImage, setServicImage] = useState(null);
    const [addInput, setAddInput] = useState('')
    const [todoArraydata, setTodoArraydata] = useState([])
    const [serviceName, setServiceName] = useState('');
    const [description, setDescripton] = useState('');
    const { _id, serviceImage, ServiceTittle, Discription, lisOfServices } = props.ManageData;
    const handleCollectImg = (val) =>{
        setPreview(URL.createObjectURL(val.target.files[0]))
        setForUpload(val.target.files[0]);
    }
   
    
    const handleImageToServer = () =>{
        swal({
            title: "Please Wait",
            text: "image uploading to the server, wait a few second!",
            icon: "warning",
        }).then(res =>{
                setDisable(true);   
        })
        const imageData = new FormData();
        imageData.set('key' ,'0b33e9eff72081f866dd3d957f2512db')
        imageData.append('image', forUpload)
        axios.post('https://api.imgbb.com/1/upload',imageData)
        .then(res =>{
            swal({
                title: "image upload successfully",
                icon: "success",
                button: "ok",
              });
              setDisable(true); 
              setServicImage(res.data.data.display_url)
              setForUpload(null);
              console.log(res.data.data.display_url)
        })
    }

    const handleUpadteService = (x) =>{
        x.preventDefault()
        fetch(`https://portfolio-server-fawn.vercel.app/updateService/${_id}`,{
            method:'PUT',
            headers:{ 'Content-Type': 'application/json' },
            body:JSON.stringify({
                serviceImage:servicImage,
                lisOfServices:todoArraydata,
                ServiceTittle:serviceName,
                Discription:description,
            })
        })
        .then(res =>{
            toast.success('Service Successfully updated', {
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
            setShow(false);
            setDisable(false)
            setPreview(null)
            setDescripton('');
            setServiceName('')
            setForUpload(null)
            setServicImage(null);
            setTodoArraydata([]);
        })
    }
    const modalon = () => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    fetch(`https://portfolio-server-fawn.vercel.app/deleteService/${_id}`,{
                        method:'DELETE'
                    })
                    .then(res =>{
                       
                    })
                    swal("Poof! Your imaginary file has been deleted!", {
                        icon: "success",
                    });
                } else {
                    swal("Your imaginary file is safe!");
                }
            });
    }

    const handleTodoData = () => {
        if (addInput === '') {
            alert('Please Write Something')
        }
        else {
            setTodoArraydata([...todoArraydata, { id: Math.floor(Math.random() * 10000), Service: addInput }])
            setAddInput('')
        }
    }
    const handleDeleteTodo = (id) => {
        const filteredData = [...todoArraydata].filter(data => data.id !== id);
        setTodoArraydata(filteredData);
    }
    const todoModalon = () => {
        setAddInput('')
        swal({
            title: "Warning",
            text: "Sorry You can not add More Service List !!",
            icon: "warning",
            dangerMode: true,
        });
    }
    const handleClose = () => setShow(false);
    const handleShow = () =>{
        setServicImage(serviceImage);
        setServiceName(ServiceTittle)
        setDescripton(Discription);
        setTodoArraydata(lisOfServices);
        setShow(true);
    }
    const handleSureConfirmBtn = (val)=>{
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
        <div className="srvc-mng-crd">
            <div className="mng-img-ttl">
                <div className="onlyimgsize">
                    <img src={serviceImage} alt="" />
                </div>
                <h4>{ServiceTittle}</h4>
            </div>
            <p id="mng-srvc-id"><span id="mng-srvc-id-span">Service ID :</span> {_id}</p>
            <div className="wrap-mng-srvc-tpc">
                {
                    lisOfServices.map(data => <p key={data.id} id="mng-srvc-topic">{data.Service}</p>)
                }
            </div>
            <p id="nrml-dsrpt">{Discription.slice(0, 150)}....</p>

            <div className="edit-or-delete-btn">
                <button onClick={handleShow} id="edit-mng-btn"><FontAwesomeIcon icon={faPencilAlt} /> Edit</button>
                <button onClick={modalon} id="delete-mng-btn"><FontAwesomeIcon icon={faTrash} /> Delete</button>
            </div>
        
            <div className="modal-set-mddl-rspnsv-pdng">
                <Modal show={show} backdrop="static" keyboard={false} centered >
                    <div className="Manage-Service-Editing-sec">
                        <button className='btn-mng-srvs-modal-edit-close' onClick={handleClose}><i class="fas fa-times"></i></button>
                        <form onSubmit={handleUpadteService} id='manage-main-form-edit' action="" autoComplete='off'>
                            <div className="d-flex mng_srvs_edt_responsiv justify-content-between">
                                <div className="manage-up-section">
                                    <h4>Choose service image</h4>
                                    <input onChange={(e)=>handleCollectImg(e)} type="file" name="" id="service-image" />
                                    <div className='manage-up-fack-image'>
                                        {
                                            !disable ? <label htmlFor="service-image"><FontAwesomeIcon icon={faCloudUploadAlt} /> Upload New Photo</label> :
                                            <label ><FontAwesomeIcon icon={faCloud} /> {!forUpload ? 'image Uploaded' : 'image Processing'}</label>
                                        }
                                        
                                        <div className="manage-service-image-edit">
                                            {
                                                preview ? <img src={preview} alt="" /> : <img src={serviceImage} alt="" />
                                            }
                                        </div>
                                    </div>

                                </div>
                                <div>
                                {
                                        forUpload && <div className="confirm_image_idnty">
                                        <h5 id='confirm-idnty-img-ttl'>Confim this Image!</h5>
                                        {
                                            disable ? <li type="button" disabled>
                                            <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                            <span > Loading...</span>
                                            </li>:
                                            <li onClick={handleImageToServer}>Confirm?</li>
                                        }
                                    </div>
                                    }
                                </div>
                            </div>
                          
                            <div className="manage-srvs-all-inputs">
                                <div className="manage-srvc-name-input-data">
                                    <input onChange={(e)=>setServiceName(e.target.value)} type="text" defaultValue={ServiceTittle} required name="Name" />
                                    <span>Service Name</span>
                                    <div className="underline-manage-srvc-edit-name"></div>
                                </div>
                                <div className="manage-srvc-todo-add-sec">
                                    <span>Add Services ({6 - todoArraydata.length})</span>
                                    <div className='manage-srvc-todo-add-not-add-btn'>
                                        <input id='srvs-todo' placeholder='Write Todo Services' value={addInput} onChange={(e) => setAddInput(e.target.value)} type="text"  />
                                        {
                                            todoArraydata.length === 6 && <button onClick={todoModalon} type="button" className='manage-srvs-add-btn-disable' ><i class="fas fa-exclamation"></i> Add</button>
                                        }
                                        {
                                            todoArraydata.length < 6 && < button onClick={handleTodoData} className='manage-srvs-add-btn-active' type="button" ><i class="fas fa-plus"></i> Add</button>
                                        }
                                    </div>

                                    <div className="manage-srvs-todo-listed">
                                        {
                                            todoArraydata.concat().reverse().map(data => <li key={data.id} className='manage-srvs-todos-dsgn'>{data.Service} <i onClick={() => handleDeleteTodo(data.id)} id='manage-srvs-todo-delet-btn' class="far fa-trash-alt"></i></li>
                                            )
                                        }
                                    </div>
                                </div>
                                <div className="manage-srvs-tex-discription">
                                    <span>Discription</span>
                                    <textarea onChange={(e)=>setDescripton(e.target.value)} required defaultValue={Discription} name="description" rows="3"></textarea>
                                </div>
                            </div>
                            <div className="manage-srvs-sbmt-sec">
                                <div className="manage-srvs-sbmt-btn-sec">
                                    {
                                        forUpload && !disable ? <input className='local-sbmt-btn' onClick={()=>handleSureConfirmBtn(1)} type="button" value="Submit" /> : <div>{!forUpload ? <input className='local-sbmt-btn' type="submit" value="Submit" /> : <input className='local-sbmt-btn' onClick={()=>handleSureConfirmBtn(2)} type="button" value="Submit" />}</div> 
                                    }
                                    
                                </div>
                            </div>
                        </form>
                    </div>
                </Modal>
            </div>
        </div>
    );
};

export default DisplyManageService;

