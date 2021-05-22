import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './assets/css/animate.scoped.css'
import './assets/css/sidebar-menu.scoped.css'
import './assets/css/adminstyle.scoped.css'
class menubar extends Component {
    render() {
        return (
            <div id="sidebar-wrapper" data-simplebar data-simplebar-auto-hide="true" className="active">
                <div className="brand-logo">
                    <Link to='/admin'>
                        <a className="a">
                            <img src="images/logo.png" className="logo-icon" alt="logo icon" />
                            <h5 className="logo-text">HKTQueen Hotel</h5>

                        </a>
                    </Link>
                </div>
                <ul className="sidebar-menu do-nicescrol in">
                    <li>
                        <Link to='/admin'> <a className="a" >
                            <i className="fa fa-tachometer" aria-hidden="true" /> <span>Dashboard</span>


                        </a>
                        </Link>
                    </li>
                    <li >
                        <Link to='/bookingAdmin'>  <a className="a" className="active">
                            <i className="fa fa-shopping-cart" aria-hidden="true" /> <span>Booking</span>


                        </a>  </Link>
                    </li>
                    <li>
                        <Link to='/roomsAdmin'>
                            <a className="a" >
                            <i className="fa fa-bed" aria-hidden="true" /> <span>Rooms</span>


                        </a> 
                        </Link>
                    </li>
                    <li>
                        <Link to='/usersAdmin'>
                             <a className="a" >
                            <i className="fa fa-user" aria-hidden="true" /> <span>Users</span>


                        </a>
                        </Link>
                    </li>
                    <li>
                        <Link to='/loginAdmin'>
                            <a className="a" target="_blank">
                                <i className="fa fa-sign-out" aria-hidden="true" /> <span>Log Out</span>
                            </a>
                        </Link>
                    </li>

                </ul>
            </div>

        );
    }
}

export default menubar;