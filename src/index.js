import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import { BrowserRouter,  Switch, Route } from 'react-router-dom';
import {BrowserRouter as Router } from 'react-router-dom'
=======
// import { BrowserRouter, Router, Route, Switch } from 'react-router-dom';
>>>>>>> 898b695520388d8afce46bda060207e42b49a756
import reportWebVitals from './reportWebVitals';
import Footer from './components/footer/footer';
import 'bootstrap/dist/css/bootstrap.css';
<<<<<<< HEAD
import App from './App'
ReactDOM.render(
  <BrowserRouter>
    <React.Suspense fallback={<div>Loading...</div>}>
      <App></App>
     
=======
import { render } from 'react-dom';
import { BrowserRouter as BrowserRouter,Router, Switch } from "react-router-dom";
import {Link,Route} from 'react-router-dom';
import Show from '../src/components/router/Show/Show'
import Header from './components/header/header';

const Home = React.lazy(() => import('./components/body/Home'));
const Gallery = React.lazy(() => import('./components/body/gallery'));
const Contact = React.lazy(() => import('./components/body/contact'));
const Room = React.lazy(() => import('./components/body/Rooms'));
const About = React.lazy(() => import('./components/body/about'));
const SignIn = React.lazy(() => import('./components/body/SignupForm/signin'));
const SignUp = React.lazy(() => import('./components/body/SignupForm/signup'));
const Reservation = React.lazy(() => import('./components/body/reservation'));
const Reservation2 = React.lazy(() => import('./components/body/reservation2'));





ReactDOM.render(
  <BrowserRouter>
    <React.Suspense fallback={<div></div>}>
      <Switch>
        <Show />
      </Switch>
>>>>>>> 898b695520388d8afce46bda060207e42b49a756
    </React.Suspense>
  </BrowserRouter>,
  document.getElementById('rot')
);
// ReactDOM.render(
//   <BrowserRouter>
//     <React.Suspense fallback={<div></div>}>
//       <Switch>
//         <Home />
//       </Switch>
//     </React.Suspense>
//   </BrowserRouter>,
//   document.getElementById('root')
// );


<<<<<<< HEAD

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
=======
>>>>>>> 898b695520388d8afce46bda060207e42b49a756
reportWebVitals();
