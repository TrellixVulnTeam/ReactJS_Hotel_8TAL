import React, { Component } from 'react';
import '../css/signup.css';
class Signup extends Component {
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
            <div>
        
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 offset-md-4 form">
                            <form action="signup-user.php" method="POST" autoComplete>
                                <h2 className="text-center">Signup Form</h2>
                             <div className="form-group">
                                    <input className="form-control" type="text" name="fullname" placeholder="Full Name" value={this.state.name} onChange={this.myhandleChange}/>
                                </div>
                                <div className="form-group">
                                    <input className="form-control" type="email" name="email" placeholder="Email Address"value={this.state.email} onChange={this.myhandleChange} />
                                </div>
                                <div className="form-group">
                                    <input className="form-control" type="password" name="passWord" placeholder="Password"value={this.state.passWord} onChange={this.myhandleChange} required />
                                </div>
                                <div className="form-group">
                                    <input className="form-control" type="password" name="confirmPass" placeholder="Confirm password" value={this.state.confirmPass} onChange={this.myhandleChange}required />
                                </div>
                                <div className="form-group">
                                    <input className="form-control button" type="submit" name="signup" defaultValue="Signup" />
                                </div>
                                <div className="link login-link text-center">Already a member? <a href="login-user.php">Login here</a></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Signup;
