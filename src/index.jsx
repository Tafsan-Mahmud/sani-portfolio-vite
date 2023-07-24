import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ScrollToTopBTN from './Components/ScrollToTopBTN/ScrollToTopBTN';
import MessengerCustomerChat from 'react-messenger-customer-chat';

ReactDOM.render(
  <React.StrictMode>
    <ScrollToTopBTN></ScrollToTopBTN>
    <MessengerCustomerChat pageId="102776305148106" appId="169750802785290" />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
