import React, { Component } from 'react';
import './Detail.css'
import axios from 'axios';
import Rooms from '../room/room';
class Detail extends Component {

    constructor(props) {
        super(props);
        this.state = { data: [] };
    }

    componentDidMount() {
        axios.get('http://localhost/New%20folder/ReactJS_Hotel/src/DB/api/controller.php/rooms')
            .then(response => {
                this.setState({
                    data: response.data
                })
                    .catch(function (error) {
                        console.log(error);
                    })
            })
    }

    // roomList() {
    //     return this.state.data.map(function (element, index) {
    //         return  <p room={element} key={index} ></p>
    //     });
    // }
    // render() {
    //     console.log(this.props);
        // constructor(props) {
        //     super(props);
        //     this.state = { data: [] }
        // }
        // componentDidMount() {
        //     axios.get('http://localhost/New%20folder/ReactJS_Hotel/src/DB/api/controller.php/rooms').then(res => {
        //         this.setState({ data: res.data });
        //     })
        // }

            render() {

        return (
            <div class="container">
                <center> <h3 class="headerDetail"> Welcome to view detail room </h3></center>
                <div></div>
                <div class="row">
                    <div class="col-sm-5" > <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThWogExiuuBvNYxY7rq2fQQ5CicmrYz420ZQ&usqp=CAU" alt="Girl in a jacket" height="100%" width="100%" ></img>
                    </div>
                    <div class="col-sm-7" >
                        <div class="spa">
                            <div class="space">
                                <div class="spa">
                                    <h6 class="sao"> *********** </h6>
                                </div>
                                <div>
                                    <strong> <h4 class="moderndb"> MODERN DELEX BELVEDERE  </h4></strong>
                                </div>

                            </div>
                            <div class="spac">
                                <div class="space1">
                                    <h4 class="gachdung"> | </h4>
                                </div>
                                <div>
                                    <h5 class="tien"> $ 75000 </h5>
                                    <small> per night</small>
                                </div>
                            </div>
                        </div>
                        <div class="dtail">
                            <h4 class="gach">____</h4>
                            <div class="row">

                                <div class="col-sm-3">
                                    <h5> Room_id</h5>
                                    <h5> {this.props.room_id} </h5>
                                </div>
                                <div class="col-sm-2">
                                    <h5> Roomtype_id</h5>
                                    <h5> {this.props.roomtype_id} </h5>
                                </div>

                                <div class="col-sm-2">
                                    <h5> noRoom</h5>
                                    <h5> {this.props.noroom} </h5>
                                </div>
                                <div class="col-sm-2">
                                    <h5> Status</h5>
                                    <h5> {this.props.status} </h5>
                                </div>
                                <div class="col-sm-3">
                                    <h5> Phone</h5>
                                    <h5> {this.props.phone} </h5>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Detail;