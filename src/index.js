import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter, Router, Route, Switch } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Footer from './components/footer/footer';
import 'bootstrap/dist/css/bootstrap.css';
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


reportWebVitals();
