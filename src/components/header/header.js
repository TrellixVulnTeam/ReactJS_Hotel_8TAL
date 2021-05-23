

import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import './header.scoped.css'
class Header extends Component {
  render() {
    return (
      <div>
       

          {/* <ul> */}
          {/* <li className="menu"></li>
          <li className="menu"><Link to="/room"> ROOMS  </Link></li>
          <li className="menu"><Link to="/services"> SERVICES </Link> </li> */}
          {/* <Dropdown>
            <DropdownToggle caret color="primary">
              Material dropdown
                      </DropdownToggle>
            <DropdownMenu>
              <NavLink to="/link_to_somewhere">
                <DropdownItem>Link</DropdownItem>
              </NavLink>
            </DropdownMenu>
          </Dropdown> */}



          <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#363636', color: '#fff' }}>
            <a className="navbar-brand" >
              <Link to="/home"> </Link>
              <img src="images/logo-icon.png" alt="HKT Queen" className="logo" />
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" ></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <a className="nav-link" >
                    <Link to="/"> HOME </Link>
                  </a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link" ><Link to="/room"> ROOMS  </Link></a>
                </li>
                <li className="nav-item active">
                  <div className="--dropdown">
                    <button className="--dropbtn"><Link to="/restaurant"> SERVICES </Link>
                      <i className="fa fa-caret-down" />
                    </button>
                    <div className="--dropdown-content">
                      <a > <Link to="/restaurant"> RESTAURANT  </Link></a>
                      <a ><Link to="/spa"> SPA  </Link></a>
                      <a ><Link to="/pool"> Pool  </Link></a>
                    </div>
                  </div>
                </li>
                <li className="nav-item active">
                  <a className="nav-link" ><Link to="/reservation1"> RESERVATION  </Link></a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link" ><Link to="/gallery"> GALLERY  </Link></a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link"><Link to="/contact"> CONTACT  </Link></a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link" ><Link to="/about"> ABOUT US  </Link></a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link"><Link to="/signIn"> SIGN IN  </Link></a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link" ><Link to="/signUp"> SIGN UP  </Link></a>
                </li>
                {/* <li className="nav-item active">
                  <div className="social" style={{}}>
                    <button className="register signIn" id="signin" data-toggle="modal" data-target="#login">
                      <a ><Link to="/signIn"> SIGN IN  </Link></a>
                    </button>
                    <button className="register signUp" id="signup" data-toggle="modal" data-target="#register">
                      <a ><Link to="/signUp"> SIGN UP  </Link></a>
                    </button>
                  </div>
                </li> */}
                {/* <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle user-management" style={{}} id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" ><i className="fa fa-user fa-fw user" >
                  </i>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
                    <a className="dropdown-item" href="history-booking.php">Booking History</a>
                    <a className="dropdown-item" href="logout-user.php">Logout</a>
                  </div>
                </li> */}
              </ul>
            </div>
          </nav>

          {/* //   <li className="menu"><Link to="/reservation"> RESERVATION  </Link></li>
        //   <li className="menu"><Link to="/gallery"> GALLARY </Link></li>
        //   <li className="menu"><Link to="/contact"> CONTACT  </Link></li>
        //   <li className="menu"><Link to="/about"> ABOUT US   </Link></li>
        //   <li className="menu"><Link to="/signIn"> SIGN IN  </Link></li>
        //   <li className="menu"><Link to="/signUp"> SIGN UP   </Link></li>
        // </ul>
         */}
          
      </div>
    );

  }
  

}

export default Header;