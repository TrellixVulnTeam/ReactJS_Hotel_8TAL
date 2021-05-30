import React, { Component } from 'react';
import './assets/css/animate.scoped.css'
import './assets/css/sidebar-menu.scoped.css'
import './assets/css/adminstyle.scoped.css'
<<<<<<< refs/remotes/origin/quynh
import './assets/css/bootstrap.scoped.css'
=======
import MenuBar from './menubar';
import Header from './header'
import url from '../config'
import axios from 'axios'
>>>>>>> local
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = { data: [] }
    }

    componentDidMount() {
        axios.get(url + "/users").then(res => {
            // axios.get(" http://localhost/quynhreactjs/ReactJS_Hotel/src/DB/api/controller.php/rooms").then(res => {
            this.setState({ data: res.data })

        })
    }
    render() {
        return (

<<<<<<< refs/remotes/origin/quynh
                <div  className="bg-theme bg-theme1 body">
                    <div id="wrapper">
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
                                            <li className="dropdown-item">
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
                                <div className="card mt-3">
                                    <div className="card-content">
                                        <div className="row row-group m-0">
                                            <div className="col-12 col-lg-6 col-xl-3 border-light">
                                                <div className="card-body">
                                                    <h5 className="text-white mb-0">9526 <span className="float-right"><i className="fa fa-shopping-cart" /></span></h5>
                                                    <div className="progress my-3" style={{ height: 3 }}>
                                                        <div className="progress-bar" style={{ width: '55%' }} />
                                                    </div>
                                                    <p className="mb-0 text-white small-font">Total Orders <span className="float-right">+4.2% <i className="zmdi zmdi-long-arrow-up" /></span></p>
=======
            <div className="bg-theme bg-theme1 body">
                <div id="wrapper">
                    <MenuBar></MenuBar>
                    <Header></Header>
                    <div className="clearfix" />
                    <div className="content-wrapper">
                        <div className="container-fluid">
                            <div className="card mt-3">
                                <div className="card-content">
                                    <div className="row row-group m-0">
                                        <div className="col-12 col-lg-6 col-xl-3 border-light">
                                            <div className="card-body">
                                                <h5 className="text-white mb-0">9526 <span className="float-right"><i className="fa fa-shopping-cart" /></span></h5>
                                                <div className="progress my-3" style={{ height: 3 }}>
                                                    <div className="progress-bar" style={{ width: '55%' }} />
>>>>>>> local
                                                </div>
                                                <p className="mb-0 text-white small-font">Total Orders <span className="float-right">+4.2% <i className="zmdi zmdi-long-arrow-up" /></span></p>
                                            </div>
                                        </div>
                                        <div className="col-12 col-lg-6 col-xl-3 border-light">
                                            <div className="card-body">
                                                <h5 className="text-white mb-0">8323 <span className="float-right"><i className="fa fa-usd" /></span></h5>
                                                <div className="progress my-3" style={{ height: 3 }}>
                                                    <div className="progress-bar" style={{ width: '55%' }} />
                                                </div>
                                                <p className="mb-0 text-white small-font">Total Revenue <span className="float-right">+1.2% <i className="fa fa-long-arrow-up" aria-hidden="true" /></span></p>
                                            </div>
                                        </div>
                                        <div className="col-12 col-lg-6 col-xl-3 border-light">
                                            <div className="card-body">
                                                <h5 className="text-white mb-0">6200 <span className="float-right"><i className="fa fa-eye" /></span></h5>
                                                <div className="progress my-3" style={{ height: 3 }}>
                                                    <div className="progress-bar" style={{ width: '55%' }} />
                                                </div>
                                                <p className="mb-0 text-white small-font">Visitors <span className="float-right">+5.2% <i className="zmdi zmdi-long-arrow-up" /></span></p>
                                            </div>
                                        </div>
                                        <div className="col-12 col-lg-6 col-xl-3 border-light">
                                            <div className="card-body">
                                                <h5 className="text-white mb-0">5630 <span className="float-right"><i className="fa fa-envira" /></span></h5>
                                                <div className="progress my-3" style={{ height: 3 }}>
                                                    <div className="progress-bar" style={{ width: '55%' }} />
                                                </div>
                                                <p className="mb-0 text-white small-font">Messages <span className="float-right">+2.2% <i className="zmdi zmdi-long-arrow-up" /></span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 col-lg-12">
                                    <div className="card">
                                        <div className="card-header"> <h1>Booking Details
                  <div className="card-action">
                                                <div className="dropdown">
                                                    <a href="javascript:void();" className="dropdown-toggle dropdown-toggle-nocaret" data-toggle="dropdown">
                                                        <i className="icon-options" />
                                                    </a>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <a className="dropdown-item" href="javascript:void();">Action</a>
                                                        <a className="dropdown-item" href="javascript:void();">Another action</a>
                                                        <a className="dropdown-item" href="javascript:void();">Something else here</a>
                                                        <div className="dropdown-divider" />
                                                        <a className="dropdown-item" href="javascript:void();">Separated link</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </h1></div>
                                        <div className="table-responsive">

                                            <table className="table align-items-center table-flush table-borderless table-hover">
                                                <thead>
                                                    <tr>
                                                        <th>ID</th>
                                                        <th>Name</th>
                                                        <th>Email</th>
                                                        <th>Phone</th>
                                                        <th>Room</th>
                                                        <th>Arrive </th>
                                                        <th>Depart </th>
                                                        <th>Status </th>
                                                        <th>Payment </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {this.state.data.map((element, index) => {
                                                        <tr>
                                                            <td>{/*?</td*/}
                                                            <td>{element.user_id}</td>
                                                            <td>{element.name}</td>
                                                             <td>{element.email}</td>
                                                            </td><td>{/*?</td*/}
                                                            </td><td>{/*?</td*/}
                                                            </td><td>{/*?</td*/}
                                                            </td><td>{/*?</td*/}
                                                            </td><td>{/*?</td*/}
                                                            </td>

                                                        </tr>
                                                    })}
                                                    </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="overlay toggle-menu" />
                        </div>
                    </div>
                    <a href="javaScript:void();" className="back-to-top"><i className="fa fa-angle-double-up" /> </a>
                </div>


            </div>




        );
    }
}


export default Index;