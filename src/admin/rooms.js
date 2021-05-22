import React, { Component } from 'react';
import './assets/css/animate.scoped.css'
import './assets/css/sidebar-menu.scoped.css'
import './assets/css/adminstyle.scoped.css'
import './assets/css/bootstrap.scoped.css'
import axios from 'axios';
class rooms extends Component {
    constructor(props) {
        super(props);
        this.state = { data: [] }
    }

    componentDidMount() {
        axios.get("http://localhost/quynhreactjs/ReactJS_Hotel/src/DB/api/controller.php/rooms").then(res => {
            this.setState({ data: res.data })
        })
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
                    <div className="clearfix" />
                    <div className="content-wrapper">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-12 col-lg-12">
                                    <div className="card">
                                        <h2>View ROOMS
                                        </h2>
                                        <div className="table-responsive">
                                            <table className="table align-items-center table-flush table-borderless table-hover">
                                                <thead>
                                                    <tr>
                                                        <th>STT</th>
                                                        <th>Room_id</th>
                                                        <th>Roomtype_id</th>
                                                        <th>Noroom</th>
                                                        <th>Img</th>
                                                        <th>Phone</th>
                                                        <th>Status</th>
                                                        <th>Action</th>

                                                    </tr>
                                                </thead>
                                           
                                                 <tbody>
                                                    {this.state.data.map((element,index) => {
                                                        return (<tr>
                                                            <td>{index}</td> 
                                                            <td>{element.room_id}</td>
                                                            <td>{element.roomtype_id}</td>
                                                            <td>{element.noroom}</td>
                                                            <td><img src={element.img}/></td>
                                                            <td>{element.phone}</td>
                                                            <td>{element.status}</td>
                                                            <td><div style={{ display: 'flex'}} width="100px" hover>
                                                                <button><a href="editBooking.php?editId=<?php echo $row['roombook_id'] // phan nay xoa di ne ?>" style={{color:'green'}}>
                                                                    <i class="fa fa-pencil" aria-hidden="true"></i></a>
                                                                </button>
                                                                <form action="" method="post">
                                                                    <button name="deletebooking" value="<?php echo $row['roombook_id'] ?>" style={{color:"red"}}>
                                                                        <i class="fa fa-trash" aria-hidden="true"></i>
                                                                    </button>
                                                                </form>
                                                            </div>
                                                            </td>
                                                        </tr>)
                                                    })}
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

export default rooms;