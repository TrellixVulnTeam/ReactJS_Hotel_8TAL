import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.scoped.css'
import axios from 'axios';
import { data, event } from 'jquery';
import {BrowserRouter as Router,Route,Switch } from 'react-router-dom'



//import { useCookies }    from 'react-cookie'
class signin extends Component {
    users =[];
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            name:[]
        }
    }
    saveLocal(){
        this.users = [
          this.state.email,
          this.state.password
        ];
        this.users.push({
            email:this.state.email,
            password: this.state.password
          });
          console.log(this.users);
          localStorage.setItem("user",JSON.stringify(this.users));
      }


    checkSignIn = (event) => {
        event.preventDefault();
        axios({
            method: 'GET',
            url: 'http://localhost/DB/api/controller.php/checklogin?email='+this.state.email+'&password='+this.state.password,   
        }).then(res => {
            console.log(res.data.message)
            if (res.data.message === "OK") {
                alert(" Đăng nhập thành công");
                  this.saveLocal();
                //   this.setState({ name:res.data.name})  
                //   localStorage.setItem("name",JSON.stringify(this.name));     
              // Sau khi đăng nhập thành công thì so sánh điều kiện và lấy luôn tên bên API phù hợp với điều kiện
            }
            else {       
                alert(" Đăng Nhập sai mật khẩu ") // Sao sai m?ddee
            }

        }).catch(err => {
            console.log(err);
        });
    }
    /////// heckSignIn(){
    myhandleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({[name]: value });
    }
    mySubmitHandler = (event) => {
        event.preventDefault();
    }
    
    render() {
          
        return (

            <div>
                <button className="header">
                    <Link to='/home' >Home</Link>
                </button>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 offset-md-4 form login-form">
                            <form>
                                <h2 className="text-center">Login Form</h2>
                                <div className="form-group">
                                    <input className="form-control" type="email" name="email" onChange={this.myhandleChange} placeholder="Email Address" required />
                                </div>
                                <div className="form-group">
                                    <input className="form-control" type="password" name="password" onChange={this.myhandleChange} placeholder="Password" required />
                                </div>
                                <div className="link forget-pass text-left"><a href="forgot-password.php">Forgot password?</a></div>
                                <div className="form-group">
                                    <input className="form-control button" type="button" onClick={this.checkSignIn} name="signin" defaultValue="Signin" />
                                </div>
                                <div className="link login-link text-center">Not yet a member? <Link>Signup now</Link></div> 
                            </form>
                        </div>
                    </div>
                </div>

            </div>

        );
    }
}
export default signin;