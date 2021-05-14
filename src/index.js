import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';

const Home= React.lazy(()=> import ('./components/body/Home'));
const Gallery= React.lazy(()=> import ('./components/body/gallery'));
const Contact= React.lazy(()=> import ('./components/body/contact'));
const Rooms= React.lazy(()=>import ('./components/body/Rooms'));
const About= React.lazy(()=>import ('./components/body/about'));
const SignIn= React.lazy(()=>import ('./components/body/SignupForm/signin'));
const SignUp= React.lazy(()=>import ('./components/body/SignupForm/signup'));
const Reservation= React.lazy(()=>import ('./components/body/reservation'));
// const Reservation3= React.lazy(()=>import ('./components/body/reservation3'));
const Footer= React.lazy(()=>import ('./components/footer/footer'));
//const Reservation3= React.lazy(()=>import ('./components/body/reservation3'));



ReactDOM.render(
  <BrowserRouter>
    <React.Suspense fallback={<div></div>}>
    <Switch>
    
    <Reservation/>
 
      
    </Switch>
    </React.Suspense>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
