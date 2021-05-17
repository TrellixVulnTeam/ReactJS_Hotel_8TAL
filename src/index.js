import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter,  Switch, Route } from 'react-router-dom';
import {BrowserRouter as Router } from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
<<<<<<< HEAD

const Home= React.lazy(()=> import ('./components/body/Home'));
const Gallery= React.lazy(()=> import ('./components/body/gallery'));
const Contact= React.lazy(()=> import ('./components/body/contact'));
const Rooms= React.lazy(()=>import ('./components/body/Rooms'));
const About= React.lazy(()=>import ('./components/body/about'));
const SignIn= React.lazy(()=>import ('./components/body/SignupForm/signin'));
const SignUp= React.lazy(()=>import ('./components/body/SignupForm/signup'));

const Footer= React.lazy(()=>import ('./components/footer/footer'));
const Spa= React.lazy(()=>import ('./components/body/services/spa'));
const Pool= React.lazy(()=>import ('./components/body/services/pool'));
const Restaurant= React.lazy(()=>import ('./components/body/services/restaurant'));
const Reservation1= React.lazy(()=>import ('./components/body/reservation/reservation1'));
const Reservation2= React.lazy(()=>import ('./components/body/reservation/reservation2'));
const Reservation3= React.lazy(()=>import ('./components/body/reservation/reservation3'));
const Reservation4= React.lazy(()=>import ('./components/body/reservation/reservation4'));

ReactDOM.render(
  <BrowserRouter>
    <React.Suspense fallback={<div></div>}>
    <Switch>   
    <Reservation4/>
    </Switch>
=======
import App from './App'
ReactDOM.render(
  <BrowserRouter>
    <React.Suspense fallback={<div>Loading...</div>}>
      <App></App>
     
>>>>>>> 1fa1202d31dddc98feae044c3cdd7224868e64a1
    </React.Suspense>
  </BrowserRouter>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
