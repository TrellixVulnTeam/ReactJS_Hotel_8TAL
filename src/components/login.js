import '../css/login.css';
import React, { Component } from 'react';
class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            email:'',
            passsWord:''     
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

            <div className="container">
              <div className="row">
                <div className="col-md-4 offset-md-4 form login-form">
                  <form action="#" method="POST" autoComplete="multipart/form-data">
                    <h2 className="text-center">Login Form</h2>
                    <div className="form-group">
                      <input className="form-control" type="email" name="email" placeholder="Email Address" value={this.state.email} onChange={this.myhandleChange} />
                    </div>
                    <div className="form-group">
                      <input className="form-control" type="password" name="passWord" placeholder="Password" value={this.state.passsword} onChange={this.myhandleChange}required />
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
          );    
    }
}
export default Login;