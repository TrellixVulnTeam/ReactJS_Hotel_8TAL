import logo from './logo.svg';
import './App.css';
import Test from './API/test'
import Contact from './components/body/contact'
import Gallery from './components/body/gallery'
import Signin from './components/body/SignupForm/signin'
import Signup from './components/body/SignupForm/signup'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
     < Signup />
    );
  }
  show2 = (routes) => {

    let result;
    result = routes.map((route, index) => {
      console.log(route)
            return (
                     <Route
                        path={route.path}
                        exact={route.exact}
                        component={route.main}/> 
                    );
                                      }
                       )

    return result;


  }



}




export default App;
