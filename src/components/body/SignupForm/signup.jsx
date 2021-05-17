import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './style.scoped.css'
class signup extends Component {
    constructor(props){
        super(props);
        this.state={
            fullname:'',
            email:'',
            passWord:'',
            confirmPass:'',
        }
    }
    myhandleChange =(event)=>{
        let name = event.target.name;
        let value = event.target.value;
        this.setState({[name]:value});
   }
   mySubmitHandler =(event)=>{
       event.preventDefault();    
   }
    render() {
        return (
            <>
            <button className="header" onclick="window.location.href='../index.php'">
            <Link to='/' >Home</Link>
            </button>
            <div className="container">
              <div className="row">
                <div className="col-md-4 offset-md-4 form">
                  <form action="signup-user.php" method="POST" autoComplete>
                    <h2 className="text-center">Signup Form</h2>
                    <div className="form-group">
                      <input className="form-control" type="text" name="name" placeholder="Full Name" required defaultValue />
                    </div>
                    <div className="form-group">
                      <input className="form-control" type="email" name="email" placeholder="Email Address" required defaultValue />
                    </div>
                    <div className="form-group">
                      <input className="form-control" type="password" name="password" placeholder="Password" required />
                    </div>
                    <div className="form-group">
                      <input className="form-control" type="password" name="cpassword" placeholder="Confirm password" required />
                    </div>
                    <div className="form-group">
                      <input className="form-control button" type="submit" name="signup" defaultValue="Signup" />
                    </div>
                    <div className="link login-link text-center">Already a member? <a href="login-user.php">Login here</a></div>
                  </form>
                </div>
              </div>
            </div>
            <div id="eJOY__extension_root" className="eJOY__extension_root_class" style={{all: 'unset'}} /><iframe id="nr-ext-rsicon" style={{position: 'absolute', display: 'none', width: 50, height: 50, zIndex: 2147483647, borderStyle: 'none', background: 'transparent'}} />
          </>
          
        );
    }
}

export default signup;