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
          let formData = new FormData();  
          formData.append('roombook_id', this.state.roombook_id);  
          formData.append('user_id', this.state. user_id);
          formData.append('room_id', this.state.room_id);  
          formData.append('status', this.state.status);
          formData.append('phone', this.state.phone);
          formData.append('arrive', this.state.arrive);  
          formData.append('depart', this.state.depart);
          formData.append('status', this.state.status);
          formData.append('payment', this.state.payment);
          axios.put(url+`/roombooks?roombook_id=8`,formData,{
              headers : {
                  'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8' 
                        }
                   
                   }).then(Response=>{
              console.log(Response)
          })
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
                <form action method="POST" encType="multipart/form-data">
                  <div className="form-group">
                    <label htmlFor="user_id" className="text-body">User ID:</label>
                    <input type="user_id"  className="form-control text-body" name="user_id" value={this.state.user_id} onChange={(e) => this.setState({ user_id: e.target.value })}/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="room_id" className="text-body">Room ID:</label>
                    <input type="room_id"  className="form-control text-body" name="room_id" value={this.state.room_id} onChange={(e) => this.setState({ room_id: e.target.value })}/>
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
                    <select name="status" className="form-control text-body" id required>
                      <option value="pending"className="text-body">Pending</option>
                      <option value="booking"className="text-body">Booking</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="payment"className="text-body">Payment :</label>
                    <select name="payment" className="form-control text-body" id required>
                      <option value="paid"className="text-body">Paid </option>
                      <option value="unpaid"className="text-body">Unpaid</option>
                    </select>
                  </div>
                  <button type="submit" name="updatebook" onClick={this.onSave}>Submit</button>
                </form>
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