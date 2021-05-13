import React, { Component } from 'react';
import './assets/css/animate.css'
import './assets/css/sidebar-menu.css'
import './assets/css/adminstyle.css'
import './assets/css/bootstrap.css'
class addRoom extends Component {
    render() {
        return (
            <div className="bg-theme bg-theme1">

                <div id="wrapper">
                    <div id="sidebar-wrapper" data-simplebar data-simplebar-auto-hide="true" className="active">
                        <div className="brand-logo">
                            <a href="index.php">
                                <img src="images/logo.png" className="logo-icon" alt="logo icon" />
                                <h5 className="logo-text">HKTQueen Hotel</h5>
                            </a>
                        </div>
                        <ul className="sidebar-menu do-nicescrol in">
                            <li>
                                <a href="index.php">
                                    <i className="fa fa-tachometer" aria-hidden="true" /> <span>Dashboard</span>
                                </a>
                            </li>
                            <li>
                                <a href="booking.php">
                                    <i className="fa fa-shopping-cart" aria-hidden="true" /> <span>Booking</span>
                                </a>
                            </li>
                            <li className="active">
                                <a href="rooms.php" className="active">
                                    <i className="fa fa-bed" aria-hidden="true" /> <span>Rooms</span>
                                </a>
                            </li>
                            <li>
                                <a href="users.php">
                                    <i className="fa fa-user" aria-hidden="true" /> <span>Users</span>
                                </a>
                            </li>
                   
                            <li>
                                <a href="./signup-form/login-user.php" target="_blank">
                                    <i className="fa fa-sign-out" aria-hidden="true" /> <span>Log Out</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    {/*End sidebar-wrapper*/}
                    {/*Start topbar header*/}
                    <header className="topbar-nav">
                        <nav className="navbar navbar-expand fixed-top">
                            <ul className="navbar-nav mr-auto align-items-center">
                                <li className="nav-item">
                                    <a className="nav-link toggle-menu" href="javascript:void();">
                                        <i className="menu-icon fa fa-bars" />
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <form className="search-bar">
                                        <input type="text" className="form-control" placeholder="Enter keywords" />
                                        <a href="javascript:void();"><i className="fa fa-search" /></a>
                                    </form>
                                </li>
                            </ul>
                            <ul className="navbar-nav align-items-center right-nav-link">
                                <li className="nav-item">
                                    <a className="nav-link dropdown-toggle dropdown-toggle-nocaret" data-toggle="dropdown" href="#">
                                        <span className="user-profile"><img src="images/user.png" className="img-circle" alt="user avatar" /></span>
                                    </a>
                                    <ul className="dropdown-menu dropdown-menu-right">
                                        <li className="dropdown-item" >
                                            <a href="./signup-form/login-user.php">Logout </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                    </header>
                    {/*End topbar header*/}
                    <div className="clearfix" />
                    <div className="content-wrapper">
                        <div className="container-fluid">
                            <div className="card">
                                <div className="card-body">
                                    <h2>View Rooms</h2>
                                    <a href="addRoom.php" className="btn btn-primary" style={{ float: 'left' }}>Add New Room</a>
                                    <div className="table-responsive table-hover">
                                        No found records                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th>Id</th>
                                                    <th>Roomtype Id</th>
                                                    <th>No Room</th>
                                                    <th>Img</th>
                                                    <th>Status</th>
                                                    <th>Phone</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody />
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*End content-wrapper*/}
                    {/*Start Back To Top Button*/}
                    <a href="javaScript:void();" className="back-to-top"><i className="fa fa-angle-double-up" /> </a>
                    {/*End Back To Top Button*/}
                </div>


            </div>
        );
    }
}

export default addRoom;