import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { createContext, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import FullPage from './Components/FullPage/FullPage';
import SamplePage from './Components/SamplePage/SamplePage';
import BodyDashboard from './Components/Dashboard/BodyDashboard/BodyDashboard';
import Aos from 'aos';
import { useState } from 'react';
import MakeAdmin from './Components/Dashboard/MakeAdmin/MakeAdmin';
import ManageService from './Components/Dashboard/ManageService/ManageService';
import Review from './Components/Dashboard/Review/Review';
import MyBookingList from './Components/Dashboard/MyBookingList/MyBookingList';
import TotalOrderList from './Components/Dashboard/TotalOrderList/TotalOrderList';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddService from './Components/Dashboard/AddService/AddService';
import Login from './Components/PrivetSection/Login/Login';
import ServiceDetails from './Components/ServiceDetails/ServiceDetails';
import 'aos/dist/aos.css';
import MyBlogAndProject from './Components/MyBlogAndProject/MyBlogAndProject';
import PrivetRoute from './Components/PrivetSection/PrivetRoute';

export const PageTheme = createContext();
export const AuthUser = createContext();

function App() {
  const [mainTheme, setMainTheme] = useState(false);
  const [authUser, setAuthUser] = useState([]);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <AuthUser.Provider value={[authUser, setAuthUser]}>
      <PageTheme.Provider value={[mainTheme, setMainTheme]}>
        <Router>
          <Switch>
            <Route exact path="/">
              <FullPage></FullPage>
            </Route>
            <Route path="/home">
              <FullPage></FullPage>
            </Route>
            <Route path="/My-Blog-And-Project">
              <MyBlogAndProject></MyBlogAndProject>
            </Route>

            // PrivetSection //

            <PrivetRoute path="/Dashboard">
              <BodyDashboard></BodyDashboard>
            </PrivetRoute>

            <PrivetRoute path="/make-Admin">
              <MakeAdmin></MakeAdmin>
            </PrivetRoute>

            <PrivetRoute path="/manage-service">
              <ManageService></ManageService>
            </PrivetRoute>

            <PrivetRoute path="/review">
              <Review></Review>
            </PrivetRoute>

            <PrivetRoute path="/total-order-list">
              <TotalOrderList></TotalOrderList>
            </PrivetRoute>

            <PrivetRoute path="/my-booking">
              <MyBookingList></MyBookingList>
            </PrivetRoute>

            <PrivetRoute path="/ServiceDetail/:Sid">
              <ServiceDetails></ServiceDetails>
            </PrivetRoute>

            <PrivetRoute path="/add-service">
              <AddService></AddService>
            </PrivetRoute>

            // END PrivetSection //

            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/smplePage">
              <SamplePage></SamplePage>
            </Route>
            <Route path="*">
              <SamplePage></SamplePage>
            </Route>
          </Switch>
        </Router>
      </PageTheme.Provider>
    </AuthUser.Provider>
  );
}

export default App;
