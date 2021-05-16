
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import React, { Component } from 'react';
import Routes from './components/route/router';
import Header from './components/header/header'

class App extends Component {
  render() {
    return (
      <Router>
      <Header>
      </Header>
        <Switch>
          {this.show2(Routes)}
        </Switch>
        </Router>
    );
  }
  show2 = (Routes) => {

    let result;
    result = Routes.map((route, index) => {
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
