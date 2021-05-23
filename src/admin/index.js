import React, { Component } from 'react';
import './assets/css/animate.scoped.css'
import './assets/css/sidebar-menu.scoped.css'
import './assets/css/adminstyle.scoped.css'
import MenuBar from './menubar';
import Header from './header'
class Index extends Component {

    render() {
        return (

                <div  className="bg-theme bg-theme1 body">
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
                                                        <tr>
                                                            <td>{/*?</td*/}
                                                            </td><td>{/*?</td*/}
                                                            </td><td>{/*?</td*/}
                                                            </td><td>{/*?</td*/}
                                                            </td><td>{/*?</td*/}
                                                            </td><td>{/*?</td*/}
                                                            </td><td>{/*?</td*/}
                                                            </td><td>{/*?</td*/}
                                                            </td><td>{/*?</td*/}
                                                            </td></tr>

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