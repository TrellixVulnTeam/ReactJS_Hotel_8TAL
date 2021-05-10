import logo from './logo.svg';
import './App.css';
import routes from './routes'
import Gallery from './components/body/gallery'
import Test from './API/test'

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
      <Test> HELoo</Test>
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
