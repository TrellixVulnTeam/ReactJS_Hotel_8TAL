import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.scoped.css'
import axios from 'axios';
import { data } from 'jquery';
class signin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            passsWord: ''
        }
    }
//////heckSignIn(){
    checkSignIn(){	
        axios({	
        method: 'GET',	
        url :'http://localhost/DB/api/controller.php/users',	
        data : null	
        }).then(res =>{	
        this.setState({	
        // products :res.data
        email: data.email,
        passsWord: data.passsWord
        });	
        }).catch(err =>{	
        });	
        }	

        /////// heckSignIn(){
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

            <div>
                <button className="header" onclick="window.location.href='../index.php'">
                    <Link to='/' >Home</Link>
                </button>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 offset-md-4 form login-form">
                            <form action="#" method="POST" autoComplete="multipart/form-data">
                                <h2 className="text-center">Login Form</h2>
                                <div className="form-group">
                                    <input className="form-control" type="email" name="email" placeholder="Email Address" required defaultValue />
                                </div>
                                <div className="form-group">
                                    <input className="form-control" type="password" name="password" placeholder="Password" required />
                                </div>
                                <div className="link forget-pass text-left"><a href="forgot-password.php">Forgot password?</a></div>
                                <div className="form-group">
                                    <input className="form-control button" type="submit" name="login" defaultValue="Login" />
                                </div>
                                <div className="link login-link text-center">Not yet a member? <a href="signup-user.php">Signup now</a></div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>

        );
    }
}

export default signin;