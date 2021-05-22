import { Toast } from 'bootstrap';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './style.scoped.css'
class signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      confirmPass: '',
    }
  }

  //////heckSignUp(){
  checkSignUp = () => {
    if (this.state.password != this.state.confirmPass) {
      alert("PASSWORD NOT MATCH");
    }
    else {
      let form = new FormData;
      form.append('email', this.state.email);
      form.append('name', this.state.name);
      form.append('password', this.state.password);//ok roi
      axios({
        method: 'POST',
        url: 'http://localhost/quynhreactjs/ReactJS_Hotel/src/DB/api/controller.php/users',
        data: form
      }).then(data => {

        if (data.status === 201) {
          alert(" Đang ký thành công ")
          this.props.history.Push("/signIn"); // ok roi do
        }
        else{
          //console.log(data.data.message);
          alert(" Tài khoản đã tồn tại ")

          // ví dụ tài khoản đã đang nhập ấy mk in ra message ra màn hình dduocj ko , thấy nó chỉ in trong localhost , ng
        }

      }).catch(err => {
        console.log(err);
      });
    }
  }
  //console.log(res.data);
  /////// heckSignUp(){
  myhandleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value });

  }
  mySubmitHandler = (event) => {
    event.preventDefault();
  }


  render() {
    return (
      <>
        <button className="header">
          <Link to='/' >Home</Link>
        </button>
        <div className="container">
          <div className="row">
            <div className="col-md-4 offset-md-4 form">
              <form>
                <h2 className="text-center"> Signup Form </h2>
                <div className="form-group">
                  <input className="form-control" type="text" name="name" onChange={this.myhandleChange} placeholder="User Name" required />
                </div>
                <div className="form-group">
                  <input className="form-control" type="email" name="email" onChange={this.myhandleChange} placeholder="Email Address" required />
                </div>
                <div className="form-group">
                  <input className="form-control" type="password" name="password" onChange={this.myhandleChange} placeholder="Password" required />
                </div>
                <div className="form-group">
                  <input className="form-control" type="password" name="confirmPass" onChange={this.myhandleChange} placeholder="Confirm password" required />
                </div>
                <div className="form-group">
                  <input className="form-control button" type="button" onClick={this.checkSignUp} name="signup" defaultValue="Signup" />
                </div>
                <div className="link login-link text-center">Already a member? <a href="login-user.php">Login here</a></div>
              </form>
            </div>
          </div>
        </div>
      </>

    );
  }
}

export default signup;