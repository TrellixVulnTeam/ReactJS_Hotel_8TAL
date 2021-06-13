import React, { Component } from 'react';
import './assets/css/animate.scoped.css'
import './assets/css/sidebar-menu.scoped.css'
import './assets/css/adminstyle.scoped.css';
import {  Link } from 'react-router-dom';

class header extends Component {
    render() {
        return (
            <header className="topbar-nav">
            <nav className="navbar navbar-expand fixed-top">
                <ul className="navbar-nav mr-auto align-items-center">
                    <li className="nav-item">
                        <a className="a" className="nav-link toggle-menu" href="javascript:void();">
                            <i className="menu-icon fa fa-bars" />
                        </a>
                    </li>
                    <li className="nav-item">
                        <form className="search-bar">
                            <input type="text" className="form-control" placeholder="Enter keywords" />
                            <a className="a" href="javascript:void();"><i className="fa fa-search" /></a>
                        </form>
                    </li>
                </ul>
                <ul className="navbar-nav align-items-center right-nav-link">
                    <li className="nav-item">
                        <a className="a" className="nav-link dropdown-toggle dropdown-toggle-nocaret" data-toggle="dropdown" href="#">
                            <span className="user-profile"><img src="images/user.png" className="img-circle" alt="user avatar" /></span>
                        </a>
                        <ul className="dropdown-menu dropdown-menu-right">
                            <li className="dropdown-item" >
                                <a className="a">Logout    <Link to='/logoutAdmin'> </Link>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </header>
        );
    }
}

export default header;