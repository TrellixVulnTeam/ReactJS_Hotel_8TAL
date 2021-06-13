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
                    <Link to='/view'>
                        <a className="a">
                            <img src="images/logo.png" className="logo-icon" alt="logo icon" />
                            <h5 className="logo-text">Page Partner</h5>

                        </a>
                    </Link>
                </div>
                <ul className="sidebar-menu do-nicescrol in">
                 
                    <li >
                        <Link to='/provider'>  <a className="a" className="active">
                            <i className="fa fa-shopping-cart" aria-hidden="true" /> <span>View</span>


                        </a>  </Link>
                    </li>
                    <li>
                        <Link to='/createRoom'>
                            <a className="a" >
                            <i className="fa fa-bed" aria-hidden="true" /> <span>Create Room</span>


                        </a> 
                        </Link>
                    </li>
                    <li>
                        <Link to='/checkInKey'>
                             <a className="a" >
                            <i className="fa fa-user" aria-hidden="true" /> <span>Check Key</span>
                        </a>
                        </Link>
                    </li>
                    <li>
                        <Link to='/signIn'>
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