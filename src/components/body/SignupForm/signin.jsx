import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.scoped.css'
import axios from 'axios';
import { data, event } from 'jquery';
class signin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }
    //////heckSignIn(){{user_id)
    checkSignIn = (event) => {
        event.preventDefault();
        axios({
            method: 'GET',
            url: 'http://localhost/quynhreactjs/ReactJS_Hotel/src/DB/api/controller.php/checklogin?email='+this.state.email+'&password='+this.state.password,
        
        }).then(res => {
            // this.setState({
            //     email: this.state.email,
            //     passWord: this.state.password
            //     // let form = new FormData;
            //     // form.append('email', this.state.email);
            //     // form.append('password', this.state.passsWord);//ok ro
            // })
            console.log(res.data.message)
            if (res.data.message === "OK") {
                alert(" Đăng Nhập thanh cong ")

                //   this.props.history.Push("/"); // ok roi do
            }
            else {

            
                //console.log(data.data.message);
                alert(" Đăng Nhập sai mật khẩu ")
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
                    <Link to='/' >Home</Link>
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
}//quen sua lon cho roi đo
// ok tao sai , làm tiếp vạy you sai not me
export default signin;