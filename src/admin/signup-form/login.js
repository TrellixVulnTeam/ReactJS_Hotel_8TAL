import React, { Component } from 'react';
import './style.css'
import 'bootstrap/dist/css/bootstrap.css'

class login extends Component {
    render() {
        return (
            <div>

  <div className="container">
    <div className="row">
      <div className="col-md-4 offset-md-4 form login-form">
        <form action="#" method="POST" autoComplete="multipart/form-data">
          <h2 className="text-center">Login Form</h2>
        
          <div className="form-group">
            <input className="form-control" type="email" name="email" placeholder="Email Address" required defaultValue="" />
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

export default login;