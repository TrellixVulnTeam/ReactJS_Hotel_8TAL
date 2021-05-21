import React, { Component } from 'react';
import './assets/css/animate.scoped.css'
import './assets/css/sidebar-menu.scoped.css'
import './assets/css/adminstyle.scoped.css'
import './assets/css/bootstrap.scoped.css';
import {Link} from 'react-router-dom';
import axios from 'axios';
class edit extends Component {

    render() {
        return (
            <div id="wrapper">
            {/*Start sidebar-wrapper*/}
            <div id="sidebar-wrapper" d ata-simplebar data-simplebar-auto-hide="true">
              <div className="brand-logo">
                <a href="index.php">
                  <img src="assets/images/logo.png" className="logo-icon" alt="logo icon" />
                  <h5 className="logo-text">HKTQueen Hotel</h5>
                </a>
              </div>
              <ul className="sidebar-menu do-nicescrol">
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
                <li>
                  <a href="rooms.php">
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
                      <span className="user-profile"><img src="assets/images/user.png" className="img-circle" alt="user avatar" /></span>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-right">
                      <li className="dropdown-item" >
                        <Link to="./signup-form/login-user.php">Logout </Link>
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
                    <h2>Edit Room</h2>
                    <div className="container">
                      <form action method="POST" encType="multipart/form-data">
                        {/* <div class="form-group">
                        <label for="roomtype_id">Roomtype ID :</label>
                        <input type="text" class="form-control" name="roomtype_id" value="<?php echo $room['roomtype_id']; ?>" required="">
                      </div> */}
                        <div className="form-group">
                          <label htmlFor="roomtype_id">Roomtype ID :</label>
                          {/* <input type="text" class="form-control" name="roomtype_id" placeholder="Enter roomtype_id " required=""> */}
                          <select name="roomtype_id" className="form-control" id required>
                            {/*?php $result = $roomObj-*/}con-&gt;query("select roomtype_id,roomtype  from roomtypes");
                            while ($row = $result-&gt;fetch_assoc()) {'{'}
                            ?&gt;
                            <option value="<?php echo $row['roomtype_id'] ?>">{/*?php echo $row['roomtype'] ?*/}</option>
                            {/*?php }?*/}
                          </select>
                        </div>
                        <div className="form-group">
                          <label htmlFor="noroom">No room:</label>
                          <input type="noroom" className="form-control" name="noroom" defaultValue="<?php echo $room['noroom']; ?>" required />
                        </div>
                        <div className="form-group">
                          <label htmlFor="img">Img:</label>
                          <input type="file" className="form-control" name="img" defaultValue="<?php echo $room['img']; ?> " />
                        </div>
                        <div className="form-group">
                          <label htmlFor="status">Status:</label>
                          <select name="status" className="form-control" id required>
                            <option value="available">Available</option>
                            <option value="unavailable">Unavailable</option>
                          </select>
                        </div>
                        <div className="form-group">
                          <label htmlFor="phone">Phone:</label>
                          <input type="phone" className="form-control" name="phone" defaultValue="<?php echo $room['phone']; ?>" required />
                        </div>
                        <input type="submit" name="update" className="btn btn-primary" style={{float: 'right'}} defaultValue="Submit" />
                      </form>
                    </div>
                  </div>
                </div>
                {/*End content-wrapper*/}
                {/*Start Back To Top Button*/}
                <a href="javaScript:void();" className="back-to-top"><i className="fa fa-angle-double-up" /> </a>
                {/*End Back To Top Button*/}
              </div>
            </div></div>
        );
    }
}

export default edit;