import React, { Component } from 'react';
import './style.css'
import 'bootstrap/dist/css/bootstrap.css'
class passwordChanged extends Component {
    render() {
        return (
            <div>

                <div className="container">
                    <div className="row">
                        <div className="col-md-4 offset-md-4 form login-form">
                         
                              
                            <form action="login-user.php" method="POST">
                                <div className="form-group">
                                    <input className="form-control button" type="submit" name="login-now" defaultValue="Login Now" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
            
        );
    }
}

export default passwordChanged;