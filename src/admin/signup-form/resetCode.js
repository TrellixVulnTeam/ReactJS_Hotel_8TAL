import React, { Component } from 'react';
import './style.css'
import 'bootstrap/dist/css/bootstrap.css'
class resetCode extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 offset-md-4 form">
                            <form action="reset-code.php" method="POST" autoComplete="off">
                                <h2 className="text-center">Code Verification</h2>
                               
                                <div className="form-group">
                                    <input className="form-control" type="number" name="otp" placeholder="Enter code" required />
                                </div>
                                <div className="form-group">
                                    <input className="form-control button" type="submit" name="check-reset-otp" defaultValue="Submit" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default resetCode;