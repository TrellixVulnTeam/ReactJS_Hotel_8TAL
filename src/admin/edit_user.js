import React, { Component } from 'react';
import './assets/css/animate.scoped.css'
import './assets/css/sidebar-menu.scoped.css'
import './assets/css/adminstyle.scoped.css'
import './assets/css/bootstrap.scoped.css';
import {Link} from 'react-router-dom';
import axios from 'axios';

class edit_user extends Component {
    constructor(props) {
        super(props);
        this.state = {
          user_id: null,
          name: '',
          email: '',
          password: '',
          code: '',
          status:'',
          role:'',
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
        axios.get("http://localhost/ReactJS_Hotel/src/DB/api/controller.php/users?user_id=8").then(res => {
          this.setState({ data: res.data }) 
      })
      }
        onSave = (event)=>{

          event.preventDefault();
      let formData = new FormData();  
      formData.append('user_id', this.state.user_id);  
      formData.append('name', this.state.name);
      formData.append('email', this.state.email);  
      formData.append('password', this.state.password);
      formData.append('code', this.state.code);
      formData.append('status', this.state.status);
      formData.append('role', this.state.role);
      axios.put(`http://localhost/ReactJS_Hotel/src/DB/api/controller.php/users?user_id=8`,formData,{
          headers : {
              'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
          }
      }).then(Response=>{
        
          console.log(Response)
      })
    }
  

    render() {
        return (
          <div className=" body bg-theme bg-theme1">
            <div id="wrapper">
        {/*Start sidebar-wrapper*/}
        <div id="sidebar-wrapper" data-simplebar data-simplebar-auto-hide="true">
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
                <h2 className="text-body">Edit User</h2>
                <div className="container">
        
                  <form action method="POST" encType="multipart/form-data">
                    <div className="form-group">
                      <label htmlFor="user_id" className="text-body">User ID:</label>
                      <input type="text" readOnly="true" className="form-control text-body" name="user_id"  value={this.state.user_id} onChange={(e) => this.setState({ user_id: e.target.value })} required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="user_name" className="text-body">Name:</label>
                      <input type="text" className="form-control text-body" name="user_name" value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })}  />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email" className="text-body">Email:</label>
                      <input type="email" className="form-control text-body" name="email" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="password" className="text-body">Password:</label>
                      <input type="text"  class="form-control text-body" name="password" value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })}  required/>
                    </div>
                    <div className="form-group">
                      <label htmlFor="role" className="text-body">Role  :</label>
                      <input type="text" className="form-control text-body" name="role" value={this.state.role} onChange={(e) => this.setState({ role: e.target.value })}  required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="status " className="text-body">Status :</label>
                      <select name="status" className="form-control text-body" id required>
                        <option value="unverified" className="text-body">unverified</option>
                        <option value="verified" className="text-body" >verified</option>
                      </select>
                    </div>
                    <button type="submit" name="updateuser" onClick={this.onSave} className="btn btn-primary" style={{float: 'right'}} >Submit</button>
                  </form>
                </div>
              </div>
            </div>
            {/*End content-wrapper*/}
            {/*Start Back To Top Button*/}
            <a href="javaScript:void();" className="back-to-top"><i className="fa fa-angle-double-up" /> </a>
            {/*End Back To Top Button*/}
          </div>
        </div></div></div>
        );
    }
}

export default edit_user;