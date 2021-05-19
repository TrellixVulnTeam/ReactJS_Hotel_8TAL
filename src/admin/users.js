import React, { Component } from 'react';
import './assets/css/animate.scoped.css'
import './assets/css/sidebar-menu.scoped.css'
import './assets/css/adminstyle.scoped.css'
import './assets/css/bootstrap.scoped.css'
class users extends Component {
    render() {
        return (
            <div className="bg-theme bg-theme1">
        
{/* Start wrapper*/}
<div id="wrapper">
  {/*Start sidebar-wrapper*/}
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
      <li>
        <a href="rooms.php">
          <i className="fa fa-bed" aria-hidden="true" /> <span>Rooms</span>
        </a>
      </li>
      <li className="active">
        <a href="users.php" className="active">
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
      <div className="row">
        <div className="col-12 col-lg-12">
          <div className="card">
            <h2>View Users</h2>
            <div className="table-responsive">
              <table className="table align-items-center table-flush table-borderless table-hover">
                <thead>
                  <tr>
                    <th>User ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Code</th>
                    <th>Status</th>
                    <th>Role</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/*start overlay*/}
      <div className="overlay toggle-menu" />
      {/*end overlay*/}
    </div>
    {/* End container-fluid*/}
  </div>
  {/*End content-wrapper*/}
  {/*Start Back To Top Button*/}
  <a href="javaScript:void();" className="back-to-top"><i className="fa fa-angle-double-up" /> </a>
  {/*End Back To Top Button*/}
</div>
{/*End wrapper*/}
{/* Bootstrap core JavaScript*/}
{/* sidebar-menu js */}
{/* Custom scripts */}

            </div>
        );
    }
}

export default users;