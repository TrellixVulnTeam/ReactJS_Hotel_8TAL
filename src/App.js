import logo from './logo.svg';
import Test from './API/test'

import Index from './components/body/Home'

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
      < Index />
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
          component={route.main} />
      );
    }
    )

    return result;


  }



}




export default App;
