import React, { Component } from 'react';
import './assets/css/animate.scoped.css'
import './assets/css/sidebar-menu.scoped.css'
import './assets/css/adminstyle.scoped.css'
import {Link} from 'react-router-dom';
import axios from 'axios';

import MenuBar from './menubar';
import Header from './header'
import url from '../config'

class editBooking extends Component {
        constructor(props) {
            super(props);
            this.state = {
              roombook_id: '',
              user_id: '',
              room_id: '',
              phone: '',
              arrive:'',
              depart:'',
              status:'',
              payment:'',
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
            axios.get(url+`/roombooks?roombook_id=7`).then((res) =>{
              this.setState({
                roombook_id: res.data.roombook_id,
                user_id: res.data.user_id,
                room_id: res.data.room_id,
                status: res.data.status,
                phone: res.data.phone,
                arrive: res.data.arrive,
                depart: res.data.depart,
                payment: res.data.payment,
                })
                console.log(res)
            })
        }
          onSave = (roombook_id) => {
          let formData = new FormData();  
          formData.append('roombook_id', roombook_id);  
          formData.append('user_id', this.state. user_id);
          formData.append('room_id', this.state.room_id);  
          formData.append('status', this.state.status);
          formData.append('phone', this.state.phone);
          formData.append('arrive', this.state.arrive);  
          formData.append('depart', this.state.depart);
          formData.append('payment', this.state.payment);
          formData.append('method','PUT');
          let config ={
            headers: {
              "Content-Type": "application/json",
           }
          }
          axios.post(url+`/roombooks?roombook_id=${roombook_id}`,formData, config).then(Response => {
            console.log(Response.data.message);  
            }).catch (function (error) {
        if (error.response) {
            console.log(error.response.headers);
        }
        
    });
    
        }

    render() {
      return (
     <div>
         <div className="bg-theme bg-theme1">
          <div id="wrapper">
            {/*Start sidebar-wrapper*/}
              <MenuBar></MenuBar>]
              <Header></Header>
      <div className="clearfix" />
      <div className="content-wrapper">
        <div className="container-fluid">
          <div className="card">
            <div className="card-body">
              <h2 className="text-body">Edit Booking</h2>
              <div className="container">
                  <div className="form-group">
                    <label htmlFor="user_id" className="text-body"readonly>User ID:</label>
                    <input type="user_id"  readonly='true'  className="form-control text-body" name="user_id" defaultValue={this.state.user_id} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="room_id" className="text-body">Room ID:</label>
                    <input type="room_id" readonly='true'  className="form-control text-body" name="room_id" defaultValue={this.state.room_id} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone" className="text-body">Phone:</label>
                    <input type="phone"  className="form-control text-body" name="phone" value={this.state.phone} onChange={(e) => this.setState({ phone: e.target.value })}/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="arrive " className="text-body">Arrive :</label>
                    <input type="date" className="form-control text-body" name="arrive" value={this.state.arrive} onChange={(e) => this.setState({ arrive: e.target.value })}/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="depart"className="text-body">Depart  :</label>
                    <input type="date" className="form-control text-body" name="depart" value={this.state.depart} onChange={(e) => this.setState({ depart: e.target.value })}/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="status" className="text-body">Status:</label>
                    <select name="status" value={this.state.value} onChange={this.myhandleChange} className="form-control text-body" id required>
                      <option value="pending"className="text-body" >Pending</option>
                      <option value="booking"className="text-body">Booking</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="payment"className="text-body">Payment :</label>
                    <select name="payment" value={this.state.value} onChange={this.myhandleChange} className="form-control text-body" id required>
                      <option value="paid"className="text-body" >Paid </option>
                      <option value="unpaid"className="text-body">Unpaid</option>
                    </select>
                  </div>
                  <input type="submit" name="updatebook" className="btn btn-primary" style={{ float: 'right' }} onClick={() => { this.onSave(7) }} />
              </div>
            </div>
          </div>
          {/*End content-wrapper*/}
          {/*Start Back To Top Button*/}
          <a href="javaScript:void();" className="back-to-top"><i className="fa fa-angle-double-up" /> </a>
          {/*End Back To Top Button*/}
        </div>
      </div>
      </div>
      </div>
      </div>
      );
  }

}

export default editBooking;