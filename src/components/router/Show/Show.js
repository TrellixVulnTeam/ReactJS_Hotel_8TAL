import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Routes from '../Router/Router';
import './Show.css';
class Show extends Component {
  render() {
    return (
      <div>
        <ul>
          <li className="menu"><Link to="/"> HOME </Link></li>
          <li className="menu"><Link to="/room"> ROOMS  </Link></li>

          <li className="menu1">
            <li className="--dropdown">
              <Link to="/services"> SERVICES </Link>
              <i className="fa fa-caret-down" />
              <div className="--dropdown-content">
                <a> <Link to="/restaurant">RESTAURANT </Link> </a>
                <a> <Link to="/spa">SPA</Link> </a>
                <a> <Link to="/pool">POOL</Link> </a>
              </div>
            </li>
          </li>
          <li className="menu"><Link to="/reservation"> RESERVATION  </Link></li>
          <li className="menu"><Link to="/gallery"> GALLARY </Link></li>
          <li className="menu"><Link to="/contact"> CONTACT  </Link></li>
          <li className="menu"><Link to="/about"> ABOUT US   </Link></li>
          <li className="menu"><Link to="/signIn"> SIGN IN  </Link></li>
          <li className="menu"><Link to="/signUp"> SIGN UP   </Link></li>
        </ul>
        <switch>
          {this.showContentMenu(Routes)}
        </switch>
      </div>
    );

  }
  showContentMenu = (Routes) => {
    var result = null;
    if (Routes.length > 0) {
      result = Routes.map((route, index) => {
        return (
          <Route key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        );
      });
    }
    return result;
  }

}

export default Show;


