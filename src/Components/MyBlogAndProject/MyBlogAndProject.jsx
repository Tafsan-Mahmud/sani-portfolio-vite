import React, { useContext, useEffect, useState } from 'react';
import './MyBlogAndProject.css';
import SimpleNavBar from '../SimplaeNavBar/SimplaeNavBar';
import { PageTheme } from '../../App';
import fakeData from '../fakeData2';
import fakeData2 from '../fakeData';
import DisplayMyBlog from './DisplayMyBlog/DisplayMyBlog';
import DisplayMyProject from './DisplayMyProject/DisplayMyProject';


const MyBlogAndProject = () => {
    const [tabsVal, setTabsVal]= useState(1)
    const [mainTheme, setMainTheme] = useContext(PageTheme);
    const [lighOrDark, setLightOrDark] = useState();
    useEffect(()=>{
        const dlData = JSON.parse(localStorage.getItem('DLMode'));
        setLightOrDark(dlData);
    },[mainTheme])
    const toggleTabs = (e) =>{
        setTabsVal(e);
    }
    console.log(tabsVal)
    return (
        <div id={lighOrDark ? 'blgPrjct_light' : ''} className='my_blg_prjct'>
            <SimpleNavBar></SimpleNavBar>
            <div className="blg_prjct_ttl_style">
                <h1 id='my_blg_prjct_ttl'>My Blogs & Projects</h1>
            </div>
            <div id={tabsVal === 2 ? 'tab_active' : ''} className="container mt-3 container-top-margin">
                <div className="tabs_style">
                    <button onClick={()=>toggleTabs(1)}>Blogs</button>
                    <button onClick={()=>toggleTabs(2)}>Projects</button>
                </div>
                {
                    tabsVal === 1 && <div className="wrp-all-card ">
                    {
                        fakeData.map(data => <DisplayMyBlog key={data.id} data={data}></DisplayMyBlog>)
                    }
                    </div>
                }
                {
                    tabsVal === 2 && <div className="wrp-all-card ">
                    {
                        fakeData.map(data => <DisplayMyProject key={data.id} data={data}></DisplayMyProject>)
                    }
                </div>
                }
            </div>
        </div>
    );
};

export default MyBlogAndProject;













