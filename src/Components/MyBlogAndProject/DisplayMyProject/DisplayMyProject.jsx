import React, { useContext, useEffect, useState } from 'react';
import '../DisplayMyBlog/DisplayMyBlog.css';
import { PageTheme } from '../../../App';


const DisplayMyProject = (props) => {
    const {blogImage, tittle, shortDisCription, } = props.data
    // const {ServiceImage, ServiceName, ShortDisCription, } = props.data
    const [readMore, setReadMore] = useState(false);
    const [mainTheme, setMainTheme] = useContext(PageTheme);
    const [lighOrDark, setLightOrDark] = useState();
    useEffect(()=>{
        const dlData = JSON.parse(localStorage.getItem('DLMode'));
        setLightOrDark(dlData);
    },[mainTheme])
    const handleReadMore = () =>{
        setReadMore(!readMore);
    }
    return (
        <div id={lighOrDark ? 'mbp_light' : ''} className='col-4 w-100 mt-5'>
            <div className="image_card_mbp">
                <img src={blogImage} alt="" />
            </div>
            <div id={readMore ? 'read_active' : ''} className="blg_prjct_card_style">
                <h3>{tittle}</h3>
                    <div className="only_for_desp">
                        <p>{shortDisCription}</p>
                    </div>
                <button onClick={handleReadMore}>{readMore ? 'Read Less' : 'Read More...'}</button>
            </div>
        </div>
    );
};

export default DisplayMyProject;