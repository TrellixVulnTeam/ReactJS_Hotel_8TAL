import React, { Component } from 'react';
import './assets/css/animate.scoped.css'
import './assets/css/sidebar-menu.scoped.css'
import './assets/css/adminstyle.scoped.css'
import axios from 'axios';
import MenuBar from './menubar';
import editRoom from './editRoom';
import Header from './header'
import url from '../config'
import { BrowserRouter as Router, Route, Link,NavLink, Switch } from "react-router-dom";
class rooms extends Component {
    constructor(props) {
        super(props);
        this.state = { data: [] }
    }

    componentDidMount() {
        axios.get(url+"/rooms").then(res => {
            this.setState({ data: res.data })
        })
    }
        OnDelete = (room_id) => {
            let formData = new FormData();
            formData.append('room_id', room_id);
            formData.append('method','delete'); // luu y o day
            let config = {
                headers: {
                    "Content-Type": "application/json",
                     
            }
    
        }
        axios.post(url+`/rooms?room_id=${room_id}`, formData, config).then(Response => {
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
                <MenuBar></MenuBar>
                <Header></Header>
                <div id="wrapper">

                    <div className="clearfix" />
                    <div className="content-wrapper">
                        <div className="container-fluid">
                            <div className="card">
                                <div className="card-body">
                                    <h2>View Rooms</h2>
                                    <NavLink to='/addRoomAdmin'> <a className="btn btn-primary a" style={{ float: 'left' }}>Add New Room</a></NavLink>
                                    <div className="table-responsive table-hover">

                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th>Id</th>
                                                    <th>Room_id</th>
                                                    <th>Roomtype Id</th>
                                                    <th>No Room</th>
                                                    <th>Img</th>
                                                    <th>Phone</th>
                                                    <th>Status</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {this.state.data.map((element, index) => {
                                                    return (<tr>
                                                        <td>{index}</td>
                                                        <td>{element.room_id}</td>
                                                        <td>{element.roomtype_id}</td>
                                                        <td>{element.noroom}</td>
                                                        <td><img src={element.img} width="180" height="150" alt={element.room_id}/></td>
                                                        <td>{element.phone}</td>
                                                        <td>{element.status}</td>
                                                        <td><div style={{ display: 'flex' }} width="100px" hover>
                                                        <NavLink to={`/editRoomAdmin/${element.room_id}/editRoom`} style={{ color: 'green' }}>
                                                                <button>
                                                                    <i class="fa fa-pencil" aria-hidden="true"></i>
                                                                </button>
                                                        </NavLink>
                                                            <button name="deletebooking" onClick={() => this.OnDelete(element.room_id)} style={{ color: "red" }}>
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
            </div>
        );
    }
}

export default rooms;