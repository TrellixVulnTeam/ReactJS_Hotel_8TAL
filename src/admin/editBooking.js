import React, { Component } from 'react';
import './assets/css/animate.scoped.css'
import './assets/css/sidebar-menu.scoped.css'
import './assets/css/adminstyle.scoped.css'
import './assets/css/bootstrap.scoped.css';
import {Link} from 'react-router-dom';
import axios from 'axios';
class editBooking extends Component {
        constructor(props) {
            super(props);
            this.state = {
              roombook_id: '',
              user_id: '',
              room_id: '',
              phone: '',
              arrive:'',
              depart:'',
              status:'',
              payment:'',
            }
          }
        myhandleChange = (event) => {
            let name = event.target.name;
            let value = event.target.value;
            this.setState({ [name]: value });
          }
          mySubmitHandler = (event) => {
          }
        

          componentDidMount() {
          let formData = new FormData();  
          formData.append('roombook_id', this.state.roombook_id);  
          formData.append('user_id', this.state. user_id);
          formData.append('room_id', this.state.room_id);  
          formData.append('status', this.state.status);
          formData.append('phone', this.state.phone);
          formData.append('arrive', this.state.arrive);  
          formData.append('depart', this.state.depart);
          formData.append('status', this.state.status);
          formData.append('payment', this.state.payment);
          axios.put(`http://localhost/ReactJS_Hotel/src/DB/api/controller.php/roombooks?roombook_id=8`,formData,{
              headers : {
                  'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8' 
                        }
                   
                   }).then(Response=>{
              console.log(Response)
          })
          }

        
    render() {
      return (
     <div>
         <div className="bg-theme bg-theme1">
          <div id="wrapper">
            {/*Start sidebar-wrapper*/}
            <div id="sidebar-wrapper" data-simplebar data-simplebar-auto-hide="true">
              <div className="brand-logo">
                <a href="index.php">
                  <img src="images/logo.png" className="logo-icon" alt="logo icon" />
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
              <h2 className="text-body">Edit Booking</h2>
              <div className="container">
                <form action method="POST" encType="multipart/form-data">
                  <div className="form-group">
                    <label htmlFor="user_id" className="text-body">User ID:</label>
                    <input type="user_id"  className="form-control text-body" name="user_id" value={this.state.user_id} onChange={(e) => this.setState({ user_id: e.target.value })}/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="room_id" className="text-body">Room ID:</label>
                    <input type="room_id"  className="form-control text-body" name="room_id" value={this.state.room_id} onChange={(e) => this.setState({ room_id: e.target.value })}/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone" className="text-body">Phone:</label>
                    <input type="phone"  className="form-control text-body" name="phone" value={this.state.phone} onChange={(e) => this.setState({ phone: e.target.value })}/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="arrive " className="text-body">Arrive :</label>
                    <input type="date" className="form-control text-body" name="arrive" value={this.state.arrive} onChange={(e) => this.setState({ arrive: e.target.value })}/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="depart"className="text-body">Depart  :</label>
                    <input type="date" className="form-control text-body" name="depart" value={this.state.depart} onChange={(e) => this.setState({ depart: e.target.value })}/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="status" className="text-body">Status:</label>
                    <select name="status" className="form-control text-body" id required>
                      <option value="pending"className="text-body">Pending</option>
                      <option value="booking"className="text-body">Booking</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="payment"className="text-body">Payment :</label>
                    <select name="payment" className="form-control text-body" id required>
                      <option value="paid"className="text-body">Paid </option>
                      <option value="unpaid"className="text-body">Unpaid</option>
                    </select>
                  </div>
                  <button type="submit" name="updatebook" onClick={this.onSave}>Submit</button>
                </form>
              </div>
            </div>
          </div>
          {/*End content-wrapper*/}
          {/*Start Back To Top Button*/}
          <a href="javaScript:void();" className="back-to-top"><i className="fa fa-angle-double-up" /> </a>
          {/*End Back To Top Button*/}
        </div>
      </div>
      </div>
      </div>
      </div>
      );
  }

}

export default editBooking;