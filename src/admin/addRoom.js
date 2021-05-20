import React, { Component } from 'react';
import './assets/css/animate.scoped.css'
import './assets/css/sidebar-menu.scoped.css'
import './assets/css/adminstyle.scoped.css'
import './assets/css/bootstrap.scoped.css';
import 'axios'
import axios from 'axios';
class addRoom extends Component {
    constructor(props) {
        super(props);
        this.state = {
          roomtype_id: '',
          noroom: '',
          img: '',
          status: '',
          phones:''
        }
      }
    myhandleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({ [name]: value });
      }
      mySubmitHandler = (event) => {
      }
    
    submitForm=(event)=>{

        event.preventDefault();
        let formData = new FormData();  

        formData.append('roomtype_id', this.state.roomtype_id);  
        formData.append('noroom', this.state.noroom);
        formData.append('img', this.state.img);  
        formData.append('status', this.state.status);
        formData.append('phones', this.state.phone);
        axios.get('http://localhost/ReactJS_Hotel/src/DB/api/controller.php/rooms',formData,{
            headers : {
                'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        }).then(Response=>{
            console.log(Response)
        })

    }
    render() {
        return (
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
                    <div className="card-body text-body">
                      <h2 className="text-body">Add Room</h2>
                      <form onSubmit={this.submitForm} method="POST" encType="multipart/form-data">
                        <div className="form-group">
                          <label htmlFor="roomtype_id" className="text-body">Roomtype ID :</label>
                          {/* <input type="text" class="form-control" name="roomtype_id" placeholder="Enter roomtype_id " > */}
                          <select name="roomtype_id" onChange={this.myhandleChange} className="form-control" value={this.state.roomtype_id}  required>
                            <option value={1}className="text-body">Luxury</option>
                            <option value={2} className="text-body">Family</option>
                            <option value={3} className="text-body">Couple</option>
                            <option value={4} className="text-body">Standard</option>
                          </select>
                        </div>
                        <div className="form-group">
                          <label htmlFor="noroom" className="text-body">No room:</label>
                          <input type="text" className="form-control" onChange={this.myhandleChange} name="noroom" placeholder="Enter no room" value={this.state.noroom} required />
                        </div>
                        <div className="form-group">
                          <label htmlFor="img"className="text-body">Img:</label>
                          <input type="file" className="form-control"onChange={this.myhandleChange} name="img"  value={this.state.img} required />
                        </div>
                        <div className="form-group">
                          <label htmlFor="status"className="text-body">Status:</label>
                          <select name="status" className="form-control" onChange={this.myhandleChange} value={this.state.status} required>
                            <option value="available" selected>Available</option>
                            <option value="unavailable">Unavailable</option>
                          </select>
                        </div>
                        <div className="form-group">
                          <label htmlFor="phone" className="text-body">Phone:</label>
                          <input type="text" className="form-control" name="phone"  value={this.state.phone}  onChange={this.myhandleChange} placeholder="Enter phone" required />
                        </div>
                        <input type="submit" name="submit" className="btn btn-primary" style={{float: 'right'}} defaultValue="Submit" />
                      </form>
                    </div>
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
              </div>
              </div>
        );
    }
}

export default addRoom;