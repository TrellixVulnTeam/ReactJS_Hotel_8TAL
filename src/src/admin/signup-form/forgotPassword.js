import React, { Component } from 'react';
import './style.css'
import 'bootstrap/dist/css/bootstrap.css'

class forgotPassword extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 offset-md-4 form">
                            <form action="forgot-password.php" method="POST" autoComplete>
                                <h2 className="text-center">Forgot Password</h2>
                                <p className="text-center">Enter your email address</p>
                                <div className="form-group">
                                    <input className="form-control" type="email" name="email" placeholder="Enter email address" required  />
                                </div>
                                <div className="form-group">
                                    <input className="form-control button" type="submit" name="check-email" defaultValue="Continue" />
                                </div>
                                <div className="link login-link text-center">Return to the? <a href="login-user.php">Login </a></div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default forgotPassword