import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter,  Switch, Route } from 'react-router-dom';
// import {BrowserRouter as Router } from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
<<<<<<< refs/remotes/origin/quynh
// import App from './components/body/SignupForm/signin'
//  import App from './components/body/SignupForm/signup' //*
// import App from './admin/users';
import App from './admin/rooms';
//import App from './App';
// import App from './components/body/SignupForm/signup'; // tới trang đăng ký
// import App from './admin/booking';

ReactDOM.render(
  <BrowserRouter>
    <React.Suspense fallback={<div>Loading...</div>}>
          <App></App>     
=======
// import App from './components/body/room/room';
import App from './components/body/detail/Detail'
// import App from './App';
//  import App from './admin/index';
// import App from "./admin/booking";
// import App from './admin/rooms'
// import App from './admin/addRoom'
// import App from './components/body/room/room';
// import App from './components/body/reservation/reservation4'
// import Test from './test'
ReactDOM.render(
  <BrowserRouter>
    <React.Suspense fallback={<div>Loading...</div>}>
     <App></App>
>>>>>>> local
    </React.Suspense>
  </BrowserRouter>,
  document.getElementById('root')
);

// Im here
// quynh
// hello it's me
reportWebVitals();
