import React, { Component } from 'react';
import './assets/css/animate.scoped.css'
import './assets/css/sidebar-menu.scoped.css'
import './assets/css/adminstyle.scoped.css'
import axios from 'axios';
import { Link } from 'react-router-dom'
import MenuBar from './menubar';
import Header from './header'
class editRoom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            room_id: 0,
            roomtype_id: '',
            noroom: '',
            img: '',
            status: '',
            phones: ''
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
        formData.append('room_id', this.state.room_id);
        let config = {
            headers: {
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin': '*',
            }
        }
        axios.get(`http://localhost:8080/DB/api/controller.php/rooms`, formData, config).then(Response => {
            console.log(Response)
        })
    }
    onSave = (id) => {

        let formData = new FormData();
        formData.append('room_id', id);
        formData.append('roomtype_id', this.state.roomtype_id);
        formData.append('noroom', this.state.noroom);
        formData.append('img', this.state.img);
        formData.append('status', this.state.status);
        formData.append('phones', this.state.phone);
        formData.append('method','PUT'); // luu y o day
        let config = {
            headers: {
                "Content-Type": "application/json",
                 
        }

    }
    axios.post(`http://localhost:8080/DB/api/controller.php/rooms`, formData, config).then(Response => {
        console.log(Response.data.message);  
        }).catch (function (error) {
    if (error.response) {
        console.log(error.response.headers);
    }
    
});

    }
render() {
    return (
        <div className=" body bg-theme bg-theme1">

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
                        <li>
                            <a href="rooms.php">
                                <i className="fa fa-bed" aria-hidden="true" /> <span>Rooms</span>
                            </a>
                        </li>
                        <li className="active">
                            <a href="users.php" className="active">
                                <i className="fa fa-user" aria-hidden="true" /> <span>Users</span>
                            </a>n
                                </li>
                        <li>
                            <a href="./signup-form/login-user.php" target="_blank">
                                <i className="fa fa-sign-out" aria-hidden="true" /> <span>Log Out</span>
                            </a>
                        </li>
                    </ul>
                </div>

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
                                <h2 className="text-body">Edit Room</h2>
                                <div className="container">

                                    <div className="form-group ">
                                        <label htmlFor="roomtype_id " className="text-body">Roomtype ID :</label>

                                        <select name="roomtype_id" className="form-control text-body" id required>

                                            <option value={this.state.roomtype_id} onChange={(e) => this.setState({ roomtype_id: e.target.value })}></option>

                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="noroom " className="text-body">No room:</label>
                                        <input type="text" className="form-control text-body" name="noroom" value={this.state.noroom} onChange={(e) => this.setState({ noroom: e.target.value })} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="img " className="text-body">Img:</label>
                                        <input type="file" className="form-control text-body" name="img" value={this.state.img} onChange={(e) => this.setState({ img: e.target.value })} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="status " className="text-body">Status:</label>
                                        <select name="status" className="form-control text-body" id required>
                                            <option value="available" className="text-body">Available</option>
                                            <option value="unavailable" className="text-body">Unavailable</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="phone text-body" className="text-body">Phone:</label>
                                        <input type="phone" className="form-control text-body" name="phone" value={this.state.phone} onChange={(e) => this.setState({ phone: e.target.value })} required />
                                    </div>
                                    <input type="submit" name="update" className="btn btn-primary" style={{ float: 'right' }} onClick={() => { this.onSave(8) }} />

                                </div>
                            </div>
                        </div>
                    </div></div></div></div>
    );
}
}


export default editRoom;