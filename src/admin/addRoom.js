import React, { Component } from 'react';
import { useHistory } from "react-router-dom";

import './assets/css/animate.scoped.css'
import './assets/css/sidebar-menu.scoped.css'
import './assets/css/adminstyle.scoped.css'
import 'axios';
import MenuBar from './menubar';
import Header from './header'
import axios from 'axios';
function HomeButton() {
  let history = useHistory();

  function handleClick() {
    history.push("/home/home");
  }

  return (
    <button type="button" onClick={handleClick}>
      Go home
    </button>
  );
}

class addRoom extends Component {
    constructor(props) {
        super(props);
        this.state = {
          roomtype_id: '',
          noroom: '',
          img: '',
          status: '',
          phones:''
        }
      }
    myhandleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({ [name]: value });
      }
      mySubmitHandler = (event) => {
      }
    
    submitForm=(event)=>{

        event.preventDefault();
        let formData = new FormData();  

        formData.append('roomtype_id', this.state.roomtype_id);  
        formData.append('noroom', this.state.noroom);
        formData.append('img', this.state.img);  
        formData.append('status', this.state.status);
        formData.append('phones', this.state.phone);
        axios.get('http://localhost/ReactJS_Hotel/src/DB/api/controller.php/rooms',formData,{
            headers : {
                'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        }).then(Response=>{
            console.log(Response)
        })

    }
    render() {
        return (
            <div className="bg-theme bg-theme1">
            <div id="wrapper">
              {/*Start sidebar-wrapper*/}
            <MenuBar>

            </MenuBar>
            <Header></Header>
              <div className="clearfix" />
              <div className="content-wrapper">
                <div className="container-fluid">
                  <div className="card">
                    <div className="card-body text-body">
                      <h2 className="text-body">Add Room</h2>
                      <form onSubmit={this.submitForm} method="POST" encType="multipart/form-data">
                        <div className="form-group">
                          <label htmlFor="roomtype_id" className="text-body">Roomtype ID :</label>
                          {/* <input type="text" class="form-control" name="roomtype_id" placeholder="Enter roomtype_id " > */}
                          <select name="roomtype_id" onChange={this.myhandleChange} className="form-control" value={this.state.roomtype_id}  required>
                            <option value={1}className="text-body">Luxury</option>
                            <option value={2} className="text-body">Family</option>
                            <option value={3} className="text-body">Couple</option>
                            <option value={4} className="text-body">Standard</option>
                          </select>
                        </div>
                        <div className="form-group">
                          <label htmlFor="noroom" className="text-body">No room:</label>
                          <input type="text" className="form-control" onChange={this.myhandleChange} name="noroom" placeholder="Enter no room" value={this.state.noroom} required />
                        </div>
                        <div className="form-group">
                          <label htmlFor="img"className="text-body">Img:</label>
                          <input type="file" className="form-control"onChange={this.myhandleChange} name="img"  value={this.state.img} required />
                        </div>
                        <div className="form-group">
                          <label htmlFor="status"className="text-body">Status:</label>
                          <select name="status" className="form-control" onChange={this.myhandleChange} value={this.state.status} required>
                            <option value="available" selected>Available</option>
                            <option value="unavailable">Unavailable</option>
                          </select>
                        </div>
                        <div className="form-group">
                          <label htmlFor="phone" className="text-body">Phone:</label>
                          <input type="text" className="form-control" name="phone"  value={this.state.phone}  onChange={this.myhandleChange} placeholder="Enter phone" required />
                        </div>
                        <input type="submit" name="submit" className="btn btn-primary" style={{float: 'right'}} defaultValue="Submit" />
                      </form>
                      <HomeButton/>
                    </div>
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
              </div>
              </div>
        );
    }
}

export default addRoom;