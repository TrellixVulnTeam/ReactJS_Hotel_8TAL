import React, { Component } from 'react';
import './assets/css/animate.scoped.css'
import './assets/css/sidebar-menu.scoped.css'
import './assets/css/adminstyle.scoped.css'
import axios from 'axios';
import MenuBar from './menubar';
import Header from './header'
import url from '../config'
import { BrowserRouter as Router, Route, NavLink, Switch } from "react-router-dom";
const refreshPage = ()=>{
    window.location.reload();
 }
class booking extends Component {
    constructor(props) {
        super(props);
        this.state = { data: [] }
    }

    componentDidMount() {
        axios.get(url+"/roombooks").then(res => {
            this.setState({ data: res.data })
        })
    }
        OnDelete = (roombook_id) => {
            let formData = new FormData();
            formData.append('roombook_id',roombook_id);
            formData.append('method','DELETE'); // luu y o day
            let config = {
                headers: {
                    "Content-Type": "application/json",
                     
            }
    
        }
        axios.post(url+`/roombooks?roombook_id=${roombook_id}`, formData, config).then(Response => {
            console.log(Response.data.message);  
            }).catch (function (error) {
        if (error.response) {
            console.log(error.response.headers);
        }
        
    });
    }
// hello hello
    // componentDidMount() {
    //     axios.get(url+"/roombooks").then(res => {
    //         this.setState({ data: res.data })

    //     })
    // }

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
                                                            <th>User_id</th>
                                                            <th>Room_id</th>
                                                            <th>Phone</th>
                                                            <th>Arrival time</th>
                                                            <th>Departure time</th>
                                                            <th>Status</th>
                                                            <th>Payment </th>
                                                            <th>Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {this.state.data.map(element => {
                                                            return (<tr>
                                                                <td>{element.roombook_id}</td>
                                                                <td>{element.user_id}</td>
                                                                <td>{element.room_id}</td>
                                                                <td>{element.phone}</td>                                                                
                                                                <td>{element.arrive}</td>
                                                                <td>{element.depart}</td>
                                                                <td>{element.status}</td>
                                                                <td>{element.payment}</td>
                                                                <td><div style={{ display: "flex"}} width="100px" hover>
                                                                <NavLink to={`/editBookingAdmin/${element.roombook_id}/editBooking`} style={{ color: 'green' }}>
                                                                     <button  >
                                                                        <i class="fa fa-pencil" aria-hidden="true"></i>
                                                                    </button>
                                                                </NavLink>
                                                                        <button  name="deletebooking" onClick={() => this.OnDelete(element.roombook_id)} style={{ color: "red" }} >
                                                                             <i class="fa fa-trash" aria-hidden="true"></i>
                                                                       </button>
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