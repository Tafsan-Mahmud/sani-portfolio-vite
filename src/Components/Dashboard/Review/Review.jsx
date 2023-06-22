import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
// import StarsRating from 'stars-rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt, faCloud, faSpinner} from '@fortawesome/free-solid-svg-icons';
import { Rating } from 'react-simple-star-rating';
import './Review.css';
import swal from 'sweetalert';
import axios from 'axios';

const Review = () => {
    const rvwPKComing = false;
    const [disable, setDisable] = useState(false);
    const [preview, setPreview] = useState(null);
    const [forupload, setForupload] = useState(null);
    const [reviewerImage, setReviewerImage] = useState(null);
    const [reviewerName, setReviewerName] = useState('');
    const [reviewerTittle, setReviewerTittle] = useState('');
    const [reviewerDESP, setReviewerDESP] = useState('');
    const [allCountry, setAllCountry] = useState([]);
    const [countryName, setCountryName] = useState('');
    const [starCount, setStarCount] = useState(null);

    const handleReviewImage = (e)=>{
        setPreview(URL.createObjectURL(e.target.files[0]));
        setForupload(e.target.files[0]);
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
        const imageData = new FormData();
        imageData.set('key', '0b33e9eff72081f866dd3d957f2512db')
        imageData.append('image',forupload)
        axios.post('https://api.imgbb.com/1/upload',imageData)
        .then(res =>{
            swal({
                title: "image upload successfully",
                icon: "success",
                button: "ok",
              });
              setReviewerImage(res.data.data.display_url)
              setForupload(null);
        })
    }

    
    const handleSubmitReview = (x)=>{
        x.preventDefault()
        if(!forupload && disable === false){
            swal({
                title: "warning!",
                text: "Please upload a image it's mandetory!",
                icon: "warning",
                button: "ok",
              });
        }
        else{
            if(disable && !reviewerImage){
                swal({
                    title: "warning!",
                    text: "image uploading to the server, wait a few second!",
                    icon: "warning",
                    button: "ok",
                  });
            }
            else{
                if(!starCount){
                    swal({
                        title: "warning!",
                        text: "before submiting please give us a start [ Rateing ]",
                        icon: "warning",
                        button: "ok",
                      });
                }
                else{
                    if(countryName === ''){
                        swal({
                            title: "warning!",
                            text: "before submiting please select Your Country",
                            icon: "warning",
                            button: "ok",
                          });
                    }
                    else{
                        if(forupload && !disable ){
                            swal({
                                title: "warning!",
                                text: "before submiting please confirm the image that you choose, it's mandatory!",
                                icon: "warning",
                                button: "ok",
                              });
                        }
                        else{
                            const alldata = {
                                reviewerImage: reviewerImage,
                                starRate: starCount,
                                countryName:countryName,
                                reviewerName:reviewerName,
                                reviewerTittle:reviewerTittle,
                                reviewerDESP:reviewerDESP
                            }
                            fetch('http://localhost:4000/addNewReview',{
                                method:'POST',
                                headers:{ 'Content-Type': 'application/json' },
                                body:JSON.stringify(alldata)
                            })
                            .then(res =>{
                                swal({
                                    title: "Review added Successfully",
                                    icon: "success",
                                    button: "ok",
                                  });
                                  setReviewerImage(null);
                                  setStarCount(null);
                                  setCountryName('');
                                  setReviewerName('');
                                  setReviewerTittle('');
                                  setReviewerDESP('');
                                  setPreview(null);
                    
                            });
                        } 
                    }
                }
            }
        }
        
    }



    useEffect(()=>{
        fetch('https://laravel-world.com/api/countries')
        .then(res=> res.json())
        .then(country =>setAllCountry(country.data))

    },[])

    const ratingChanged = (value) => {
        setStarCount(value)
    }
    return (
        <div id="main-review">
            <div className="wrap-pg-revw">
                <Sidebar></Sidebar>
                <div className="review-all-input">
                    <h1 id="review-ttl-h">Add a Review</h1>
                    <div className="main-user-inp-rvw">
                        <form className="rvw-wrp-frm-all-data w-100 wrap-rvw" onSubmit={handleSubmitReview} autoComplete="off">
                            <div className="rvw-HW-Sizing">
                                {
                                    preview ? <img id='rvw-incoming-img' src={preview} alt="" />: <img id='rvw-incoming-img' src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png' alt="" />
                                }
                                
                            </div>
                            <div className="upload-rvw-img-star-rate">
                                <div className="rvw-up-img">
                                    <p>Upload Your Image</p>
                                    <input type="file" onChange={(e)=>handleReviewImage(e)} name="image_URL" id="upload-rvw-img" accept="image/*" />
                                    {
                                        disable && !reviewerImage ? <label><FontAwesomeIcon icon={faSpinner} /> image Processing...</label> : <div>
                                            {
                                                reviewerImage ? <label><FontAwesomeIcon icon={faCloud} /> Photo uploded</label> :
                                                <label htmlFor="upload-rvw-img"><FontAwesomeIcon icon={faCloudUploadAlt} /> Choose a Photo</label>
                                            }
                                        </div>
                                    }
                                </div>
                                {
                                  forupload &&  <div className="confirm_btn_sec_review">
                                        <h4>Confim this Image!</h4>
                                        {
                                            disable ? <li type="button" disabled>
                                            <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                            <span > Loading...</span>
                                          </li> : <li onClick={handleUploadImageToServer}>Confirm?</li>
                                        }

                                    </div>
                                }
                              
                                <div className="star-sec">
                                    <p>Give Me Rate</p>
                                    <Rating
                                        onClick={ratingChanged}
                                        ratingValue={starCount}
                                        fillColor='#ffd700'
                                        size={40}
                                    />
                                </div>
                            </div>
                            <div className="country_dropdown_input">
                                <span>Your Country</span>
                                <select className='dropdown-main-review' name="Country" value={countryName} onChange={(e)=>setCountryName(e.target.value)} id="">
                                <option>-- select a country --</option>
                                {
                                    allCountry.map(data =><option id='dynamic_country_drpdwn_opn_clr'>{data.name}</option>)
                                }
                                </select>
                            </div>
                            <div className="rvw-all-input">
                                <div className="rvw-input-data">
                                    <input onChange={(e)=>setReviewerName(e.target.value)} value={reviewerName} type="text" required name="Name" />
                                    <span>Your Name</span>
                                    <div className="underline-rvw"></div>
                                </div>
                                <div className="rvw-input-data">
                                    <input onChange={(e)=>setReviewerTittle(e.target.value)} value={reviewerTittle} type="text" required name="Title" />
                                    <span>Your Title</span>
                                    <div className="underline-rvw"></div>
                                </div>
                                <div className="rvw-input-data">
                                    <textarea onChange={(e)=>setReviewerDESP(e.target.value)} value={reviewerDESP} required name="description" rows="3"></textarea>
                                    <span>Your Comment</span>
                                    <div className="underline-rvw2"></div>
                                </div>
                            </div>
                            <div className="rvw-wrp-submit-btn">
                                <div className="typ-submit-Review">
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

export default Review;






// dfg/////////////////////////////////////////

// const handleSubmitReview = (x)=>{
//     x.preventDefault()
//     const alldata = {
//         reviewerImage: reviewerImage,
//         starRate: starCount,
//         countryName:countryName,
//         reviewerName:reviewerName,
//         reviewerTittle:reviewerTittle,
//         reviewerDESP:reviewerDESP
//     }
//     fetch('http://localhost:4000/addNewReview',{
//         method:'POST',
//         headers:{ 'Content-Type': 'application/json' },
//         body:JSON.stringify(alldata)
//     })
//     .then(res =>{
//         swal({
//             title: "Review added Successfully",
//             icon: "success",
//             button: "ok",
//           });
//           setReviewerImage(null);
//           setStarCount(null);
//           setCountryName('');
//           setReviewerName('');
//           setReviewerTittle('');
//           setReviewerDESP('');
//           setPreview(null);

//     })
// }


