import React, { useEffect } from 'react';
import {BrowserRouter as Router, Link } from 'react-router-dom'
import ReactDOM from 'react-dom'



 const Captcha =(props) => {
    
   
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 offset-xl-2">
                        <center> <h1>CONFIRM YOUR INFORMATION</h1>
                        </center>
                        <p className="lead">This is the final confirmation of the information we will book for you. This part, after successful you will have a key. Take and hold this key and go to the hotel.</p>
                        <form id="contact-form" method="post" action="contact.php" role="form">
                            <div className="messages" />
                            <div className="controls">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label htmlFor="form_name">Firstname *</label>
                                            <input id="form_name" type="text" name="name" className="form-control" placeholder="Please enter your firstname *" required="required" data-error="Firstname is required." />
                                            <div className="help-block with-errors" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label htmlFor="form_lastname">Lastname *</label>
                                            <input id="form_lastname" type="text" name="surname" className="form-control" placeholder="Please enter your lastname *" required="required" data-error="Lastname is required." />
                                            <div className="help-block with-errors" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label htmlFor="form_email">Email *</label>
                                            <input id="form_email" type="email" name="email" className="form-control" placeholder="Please enter your email *" required="required" data-error="Valid email is required." />
                                            <div className="help-block with-errors" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label htmlFor="form_phone">Phone</label>
                                            <input id="form_phone" type="tel" name="phone" className="form-control" placeholder="Please enter your phone" />
                                            <div className="help-block with-errors" />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="form_message">Message *</label>
                                    <textarea id="form_message" name="message" className="form-control" placeholder="Message for me *" rows={4} required="required" data-error="Please, leave us a message." defaultValue={""} />
                                    <div className="help-block with-errors" />
                                </div>
                                <div className="form-group">
                                    <div className="g-recaptcha" data-sitekey="6LfNqxUbAAAAADRr0rDxNX73f06Dbq4gJQa8CdqU" data-callback="verifyRecaptchaCallback" data-expired-callback="expiredRecaptchaCallback" />
                                    <input className="form-control d-none" data-recaptcha="true" required data-error="Please complete the Captcha" />
                                    <div className="help-block with-errors" />
                                </div>
                                <input type="submit" className="btn btn-success btn-send" value="Send message" />

                                <p className="text-muted">
                        </p>


                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Captcha;