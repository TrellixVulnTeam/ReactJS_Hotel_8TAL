import React, { Component } from 'react';
import './assets/css/animate.scoped.css'
import './assets/css/sidebar-menu.scoped.css'
import './assets/css/adminstyle.scoped.css'
import {Link} from 'react-router-dom';
import axios from 'axios';
import MenuBar from './menubar';
import Header from './header'
class EditUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
          user_id: null,
          name: '',
          email: '',
          password: '',
          code: '',
          status:'',
          role:'',
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
        axios.get("http://localhost/ReactJS_Hotel/src/DB/api/controller.php/users?user_id=8").then(res => {
          this.setState({ data: res.data }) 
      })
      }
        onSave = (event)=>{

          event.preventDefault();
      let formData = new FormData();  
      formData.append('user_id', this.state.user_id);  
      formData.append('name', this.state.name);
      formData.append('email', this.state.email);  
      formData.append('password', this.state.password);
      formData.append('code', this.state.code);
      formData.append('status', this.state.status);
      formData.append('role', this.state.role);
      axios.put(`http://localhost/ReactJS_Hotel/src/DB/api/controller.php/users?user_id=8`,formData,{
          headers : {
              'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
          }
      }).then(Response=>{
        
          console.log(Response)
      })
    }
  

    render() {
        return (
          <div className=" body bg-theme bg-theme1">
            <div id="wrapper">
          <Header></Header>
          <MenuBar></MenuBar>
        <div className="clearfix" />
        <div className="content-wrapper">
          <div className="container-fluid">
            <div className="card">
              <div className="card-body text-body">
                <h2 className="text-body">Edit User</h2>
                <div className="container">
        
                  <form action method="POST" encType="multipart/form-data">
                    <div className="form-group">
                      <label htmlFor="user_id" className="text-body">User ID:</label>
                      <input type="text" readOnly="true" className="form-control text-body" name="user_id"  value={this.state.user_id} onChange={(e) => this.setState({ user_id: e.target.value })} required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="user_name" className="text-body">Name:</label>
                      <input type="text" className="form-control text-body" name="user_name" value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })}  />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email" className="text-body">Email:</label>
                      <input type="email" className="form-control text-body" name="email" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="password" className="text-body">Password:</label>
                      <input type="text"  class="form-control text-body" name="password" value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })}  required/>
                    </div>
                    <div className="form-group">
                      <label htmlFor="role" className="text-body">Role  :</label>
                      <input type="text" className="form-control text-body" name="role" value={this.state.role} onChange={(e) => this.setState({ role: e.target.value })}  required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="status " className="text-body">Status :</label>
                      <select name="status" className="form-control text-body" id required>
                        <option value="unverified" className="text-body">unverified</option>
                        <option value="verified" className="text-body" >verified</option>
                      </select>
                    </div>
                    <button type="submit" name="updateuser" onClick={this.onSave} className="btn btn-primary" style={{float: 'right'}} >Submit</button>
                  </form>
                </div>
              </div>
            </div>
            {/*End content-wrapper*/}
            {/*Start Back To Top Button*/}
            <a href="javaScript:void();" className="back-to-top"><i className="fa fa-angle-double-up" /> </a>
            {/*End Back To Top Button*/}
          </div>
        </div></div></div>
        );
    }
}

export default EditUser;