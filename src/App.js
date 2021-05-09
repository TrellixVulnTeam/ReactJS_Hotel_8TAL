import logo from './logo.svg';
import './App.css';
import routes from './routes'


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
      <Router>
        <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>


          <Switch>
            {
              this.show2(routes)
            }

          </Switch>
        </div>
      </Router>
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
