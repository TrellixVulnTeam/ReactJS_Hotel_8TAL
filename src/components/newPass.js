import React, { Component } from 'react';
import '../css/newPass.css';
class Newpass extends Component {
    constructor(props){
        super(props);
        this.state={
            passWord:'',
            confirmPasssword:''
         
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
                <div className="col-md-4 offset-md-4 form">
                  <form action="new-password.php" method="POST" autoComplete="off">
                    <h2 className="text-center">New Password</h2>
                    <div className="form-group">
                      <input className="form-control" type="password" name="password" placeholder="Create new password" value={this.state.password} onChange={this.myhandleChange}required />
                    </div>
                    <div className="form-group">
                      <input className="form-control" type="password" name="confirmPassword" placeholder="Confirm your password" value={this.state.confirmPassword} onChange={this.myhandleChange}required />
                    </div>
                    <div className="form-group">
                      <input className="form-control button" type="submit" name="change-password" defaultValue="Change" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          );
    }
}
export default Newpass;
