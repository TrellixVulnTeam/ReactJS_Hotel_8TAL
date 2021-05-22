import React, { Component } from 'react';
import './style.css'
import 'bootstrap/dist/css/bootstrap.css'
class newPassword extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 offset-md-4 form">
                            <form action="new-password.php" method="POST" autoComplete="off">
                                <h2 className="text-center">New Password</h2>

                                <div className="form-group">
                                    <input className="form-control" type="password" name="password" placeholder="Create new password" required />
                                </div>
                                <div className="form-group">
                                    <input className="form-control" type="password" name="cpassword" placeholder="Confirm your password" required />
                                </div>
                                <div className="form-group">
                                    <input className="form-control button" type="submit" name="change-password" defaultValue="Change" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default newPassword;