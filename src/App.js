
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
import 'bootstrap/dist/css/bootstrap.css';
class App extends Component {
  render() {
    return (  
      <div> 
       
      <Router>
        
        <Switch>
          {this.show2(Routes)}
        </Switch>
        </Router>
         </div>
    );
  }
  show2 = (Routes) => {
    let result;
    result = Routes.map((route, index) => {
      console.log(route)
      return (
        <Route
        key={index}
          path={route.path}
          exact={route.exact}
          component={route.main} >
          </Route>
      ); 
    }
    )
    return result;
  }
}




export default App;
