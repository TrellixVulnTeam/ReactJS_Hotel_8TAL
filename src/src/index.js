import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter,  Switch, Route } from 'react-router-dom';
import {BrowserRouter as Router } from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
// import App from './components/body/SignupForm/signin'
//  import App from './components/body/SignupForm/signup' //*
// import App from './admin/users';
// import App from './admin/rooms';
//import App from './App';
// import App from './components/body/SignupForm/signup'; // tới trang đăng ký
import App from './admin/booking';

ReactDOM.render(
  <BrowserRouter>
    <React.Suspense fallback={<div>Loading...</div>}>
          <App></App>     
    </React.Suspense>
  </BrowserRouter>,
  document.getElementById('root')
);

// Im here
// quynh
// hello it's me
reportWebVitals();
