import React, { Component } from 'react';
import './assets/css/animate.scoped.css'
import './assets/css/sidebar-menu.scoped.css'
import './assets/css/adminstyle.scoped.css'
import axios from 'axios';
import { Link } from 'react-router-dom';
import MenuBar from './menubar';
import Header from './header'
class rooms extends Component {
    constructor(props) {
        super(props);
        this.state = { data: [] }
    }

    componentDidMount() {
        axios.get("http://localhost/ReactJS_Hotel/src/DB/api/controller.php/rooms").then(res => {
            this.setState({ data: res.data })
        })
    }
    OnDelete = (room_id) => {
        // event.preventDefault();
        axios.delete(`http://localhost/ReactJS_Hotel/src/DB/api/controller.php/rooms?room_id=${room_id}`, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                'Access-Control-Allow-Origin': '*'
            }
        }).then(res => {
            alert("Xóa thành công", {})
            console.log(res.data);
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
                                    <Link to='/addRoomAdmin'> <a className="btn btn-primary a" style={{ float: 'left' }}>Add New Room</a></Link>
                                    <div className="table-responsive table-hover">

                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th>Id</th>
                                                    <th>Roomtype Id</th>
                                                    <th>No Room</th>
                                                    <th>Img</th>
                                                    <th>Status</th>
                                                    <th>Phone</th>
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
                                                        <td><img src={element.img} /></td>
                                                        <td>{element.phone}</td>
                                                        <td>{element.status}</td>
                                                        <td><div style={{ display: 'flex' }} width="100px" hover>
                                                            <Link to={`/editRoom/${element.room_id}`} style={{ color: 'green' }}>
                                                                <button>
                                                                    <i class="fa fa-pencil" aria-hidden="true"></i>
                                                                </button></Link>
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