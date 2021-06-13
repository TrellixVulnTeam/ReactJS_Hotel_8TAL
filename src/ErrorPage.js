import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class ErrorPage extends Component {
    render() {
        return (
            <div>
                <div class="container py-5">
                    <div class="row">
                        <div class="col-md-2 text-center">
                            <p><i class="fa fa-exclamation-triangle fa-5x"></i><br />Status Code: 403</p>
                        </div>
                        <div class="col-md-10">
                            <h3>OPPSSS!!!! Sorry... YOU MUST LOGIN AS ADMIN FIRST</h3>
                            
                            <p>Sorry, your access is refused due to security reasons of our server and also our sensitive data.<br />Please go back to the previous page to continue browsing.</p>
                            <Link class="btn btn-danger" to='/signIn'>Go Back</Link>
                        </div>
                    </div>
                </div>


            </div>
        );
    }
}

export default ErrorPage;