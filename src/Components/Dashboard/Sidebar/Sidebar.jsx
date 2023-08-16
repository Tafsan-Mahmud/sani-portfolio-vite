import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthUser, PageTheme } from '../../../App';
import DarkLightSEC from '../../DarkLightSEC/DarkLightSEC';
import './Sidebar.css';
import { getAuth, signOut } from 'firebase/auth';
import { app } from '../../firebase/firebase.init';
import { Redirect ,useHistory} from 'react-router-dom/cjs/react-router-dom.min';


const Sidebar = () => {
    const history = useHistory();
    //ContextApiDATA//

    const [authUser, setAuthUser] = useContext(AuthUser);
    const [mainTheme, setMainTheme] = useContext(PageTheme);

    //ContextApiDATA//

    //auth 

    const auth = getAuth(app);

    //auth



    //signOut
    const handleSignOut = () => {
        swal({
            title: "Are you sure?",
            text: "You want to logOut?",
            icon: "warning",
            buttons: [true, "LogOut"],
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    // window.location.replace('/home');
                    history.push("/home");
                    signOut(auth)
                        .then(result => {
                        })
                        .then(err => {
                            console.log(err.message)
                        })
                    setAuthUser([]);
                    window.localStorage.removeItem('diersu');
                }
            });
    }
    //signOut



    const exampleImg = `https://www.focusedu.org/wp-content/uploads/2018/12/circled-user-male-skin-type-1-2.png`;

    // const removeNameEnd = usersName.split(' ').slice(0, 2).join(' ');


    const [showOrLess, setShowOrLess] = useState(false);
    const [halfOrFullName, setHalfOrFullName] = useState(false);

    const [themeInside, setThemeInside] = useState(null);

    // console.log(themeInside)

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('diersu'));
        setAuthUser(user);
        const data = JSON.parse(localStorage.getItem('DLMode'));
        // setThemeInside(data)

        if (window.innerWidth < 690) {
            setHalfOrFullName(true)
        }
    }, [mainTheme]);
    const toggleSidebar = () => {
        setShowOrLess(!showOrLess)
    }








    return (
        <div id="Sidebar" className={showOrLess ? 'main-Sidebar sidebar-active' : 'main-Sidebar'}>
            <div className="top-nav-sidebar">
                <span onClick={toggleSidebar}><i class="fas fa-bars"></i></span>
                <div className="user-sgn-reg-img">
                    <div className="dash_user_actv_img">
                        {authUser.sbiulr ? <img src={authUser.sbiulr} alt="" />
                            :
                            <img src={exampleImg} alt="" />
                        }
                    </div>
                    <h4>{halfOrFullName ? authUser.displayName.split(' ').slice(0, 2).join(' ') : authUser.nixer}</h4>
                    <div id='user_active_green'></div>
                </div>
            </div>
            <div id="hide-sidebar-ext" className={themeInside ? 'all-link-sec2 activw-bg-sd-br' : 'all-link-sec2'}>
                <div className="src-lnk-cls-btn">
                    <h2 id="cstm-sdbr-h3-dsg"><i class="fab fa-phoenix-framework"></i> The Sani</h2>
                    <div className="main-lnk ">
                        <Link to='/home' Class="cstm-lnk-dsg-sidebar nav-link"><h4><span><i class="fas fa-home"></i></span> Back To Home</h4></Link>
                        <Link to='/make-Admin' Class="cstm-lnk-dsg-sidebar nav-link"><h4><span><i class="fas fa-user-cog"></i></span> Make Admin</h4></Link>
                        <Link to='/manage-service' Class="cstm-lnk-dsg-sidebar nav-link"><h4><span><i class="fab fa-accusoft"></i></span> Manage Service</h4></Link>
                        <Link to='/add-service' Class="cstm-lnk-dsg-sidebar nav-link"><h4><span><i class="far fa-calendar-plus"></i></span> Add Service</h4></Link>
                        <Link to='/total-order-list' Class="cstm-lnk-dsg-sidebar nav-link"><h4><span><i class="fas fa-sort-amount-down-alt"></i></span> Total Order List</h4></Link>
                        <Link to='/my-booking' Class="cstm-lnk-dsg-sidebar nav-link"><h4><span><i class="fas fa-list-ul"></i></span> My Booking List</h4></Link>
                        <Link to='/My-Blog-And-Project' Class="cstm-lnk-dsg-sidebar nav-link"><h4><span><i class="fas fa-clipboard-list"></i></span> Blogs & Project</h4></Link>
                        <Link to='/review' Class="cstm-lnk-dsg-sidebar nav-link"><h4><span><i class="fas fa-star-half-alt"></i></span> Review</h4></Link>
                        <div onClick={handleSignOut}><Link Class="cstm-lnk-dsg-sidebar nav-link"><h4><span><i class="fas fa-sign-out-alt"></i></span> Logout</h4></Link></div>
                    </div>
                    <div className="dsh-brd-D-L-btn">
                        <DarkLightSEC></DarkLightSEC>
                    </div>
                </div>
            </div>
            <div className='all-link-sec'>
                <div className="src-lnk-cls-btn">
                    <h3 onClick={toggleSidebar} className="close-btn-sidebar"><i class="far fa-times-circle"></i></h3>
                    <div className="main-lnk">
                        <Link to='/home' Class="cstm-lnk-dsg-sidebar nav-link"><h4><span><i class="fas fa-home"></i></span> Back To Home</h4></Link>
                        <Link to='/make-Admin' Class="cstm-lnk-dsg-sidebar nav-link"><h4><span><i class="fas fa-user-cog"></i></span> Make Admin</h4></Link>
                        <Link to='/manage-service' Class="cstm-lnk-dsg-sidebar nav-link"><h4><span><i class="fab fa-accusoft"></i></span> Manage Service</h4></Link>
                        <Link to='/add-service' Class="cstm-lnk-dsg-sidebar nav-link"><h4><span><i class="far fa-calendar-plus"></i></span> Add Service</h4></Link>
                        <Link to='/total-order-list' Class="cstm-lnk-dsg-sidebar nav-link"><h4><span><i class="fas fa-sort-amount-down-alt"></i></span> Total Order List</h4></Link>
                        <Link to='/my-booking' Class="cstm-lnk-dsg-sidebar nav-link"><h4><span><i class="fas fa-list-ul"></i></span> My Booking List</h4></Link>
                        <Link to='/My-Blog-And-Project' Class="cstm-lnk-dsg-sidebar nav-link"><h4><span><i class="fas fa-clipboard-list"></i></span> Blogs & Project</h4></Link>
                        <Link to='/review' Class="cstm-lnk-dsg-sidebar nav-link"><h4><span><i class="fas fa-star-half-alt"></i></span> Review</h4></Link>
                        <div onClick={handleSignOut}><Link Class="cstm-lnk-dsg-sidebar nav-link"><h4><span><i class="fas fa-sign-out-alt"></i></span> Logout</h4></Link></div>
                    </div>
                    <div className="dsh-brd-D-L-btn">
                        <DarkLightSEC></DarkLightSEC>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;