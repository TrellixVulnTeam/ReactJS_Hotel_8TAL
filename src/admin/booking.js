import React, { Component } from 'react';
import './assets/css/animate.scoped.css'
import './assets/css/sidebar-menu.scoped.css'
import './assets/css/adminstyle.scoped.css'
import axios from 'axios';
import MenuBar from './menubar';
import Header from './header'
import { Navbar } from 'react-bootstrap';
class booking extends Component {
    constructor(props) {
        super(props);
        this.state = { data: [] };
    }
    componentDidMount() {
        axios.get("http://localhost/ReactJS_Hotel/src/DB/api/controller.php/rooms").then(res => {
            this.setState({ data: res.data });
        })
    }
    render() {
        return (
            <div>


                <div className="bg-theme bg-theme1">
                    <div id="wrapper">
                        <MenuBar></MenuBar>
                        <Header></Header>
                        <div className="clearfix" />
                        <div className="content-wrapper">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-12 col-lg-12">
                                        <div className="card">
                                            <h2>View Booking</h2>
                                            <div className="table-responsive">
                                                <table className="table align-items-center table-flush table-borderless table-hover">
                                                    <thead>
                                                        <tr>
                                                            <th>ID</th>
                                                            <th>Name</th>
                                                            <th>Email</th>
                                                            <th>Phone</th>
                                                            <th>Room</th>
                                                            <th>Arrive</th>
                                                            <th>Depart</th>
                                                            <th>Status</th>
                                                            <th>Payment </th>
                                                            <th>Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {this.state.data.map(elements => {
                                                            return (<td>{elements.phone}</td>)
                                                        })}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*End content-wrapper*/}
                        {/*Start Back To Top Button*/}
                        <a className="a" href="javaScript:void();" className="back-to-top"><i className="fa fa-angle-double-up" /> </a>
                        {/*End Back To Top Button*/}
                    </div>
                    {/*End wrapper*/}
                    {/* Bootstrap core JavaScript*/}
                    {/* sidebar-menu js */}
                    {/* Custom scripts */}
                </div>

            </div>
        );
    }
}

export default booking;