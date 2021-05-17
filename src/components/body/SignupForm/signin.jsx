import React, { Component } from 'react';
import './style.scoped.css'

class signin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            passsWord: ''
        }
    }
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
                <button className="header" onclick="window.location.href='../index.php'">
                    <a href="../index.php">Home</a>
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
                <div id="eJOY__extension_root" className="eJOY__extension_root_class" style={{ all: 'unset' }} /><iframe id="nr-ext-rsicon" style={{ position: 'absolute', display: 'none', width: 50, height: 50, zIndex: 2147483647, borderStyle: 'none', background: 'transparent' }} />
            </>


        );
    }
}

export default signin;