import React, { Component } from 'react';
import '../css/resetCode.css';
class ResetCode extends Component {
    constructor(props){
        super(props);
        this.state={
            otp:''
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
                  <form action="reset-code.php" method="POST" autoComplete="off">
                    <h2 className="text-center">Code Verification</h2>
                    <div className="form-group">
                      <input className="form-control" type="number" name="otp" placeholder="Enter code"  value={this.state.otp} onChange={this.myhandleChange}required />
                    </div>
                    <div className="form-group">
                      <input className="form-control button" type="submit" name="check-reset-otp" defaultValue="Submit" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          );
    }
}
export default ResetCode;
