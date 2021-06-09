import React, { Component } from 'react';
import './styles.scoped.css'

import Footer from './../../footer/footer'
import Header from './../../header/header'

import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

class Reservation3 extends Component {
    render() {
        return (
            <div className="container-fluid">
               <Header></Header>
            {/* MENU */}
            {/*?php
                require_once "header.php";
                if(!ISSET($_SESSION['email'])){
                    header("Location: signup-form/login-user.php");
                }
            ?*/}
            {/* END MENU */}
            {/* RESERVATION */}
            <section className="section-reservation-page">
              <div className="container">
                <div className="reservation-page">
                  {/* STEP */}
                  <div className="reservation_step">
                    <ul>
                      <li><span>1.</span> Choose Room</li>
                      <li><span>2.</span> Confirm Information</li>
                      <li className="active"><span>3.</span> Check Out</li>
                      <li><span>4.</span> Finish</li>
                    </ul>
                  </div>
                  {/* END / STEP */}
                  <div className="row check-out">
                    {/*  SIDEBAR */}
                    <div className="col-lg-12 col-md-4 col-sm-12 col-xs-12">
                      <div className="sidebar check-out-2">
                        <div className="col-lg-8 widget widget_check_availability widget-1">
                          <h4 className="widget-title">Check Out</h4>
                          <form className="check_availability">
                            <h6 className="check_availability_title">your stay dates</h6>
                            <div className="check_availability-field">
                              <label>Name on Card</label>
                              <input className="form-control wrap-box" type="text" placeholder="EX: NGUYEN DINH LONG" />
                              <br />
                              <label>Credit card number</label>
                              <input className="form-control wrap-box" type="text" placeholder="EX: 4304  2052 10741" />
                              <br />
                              <label>CVV (Card Verification Value)</label>
                              <input className="form-control wrap-box" type="text" placeholder="EX: 04/25" />
                            </div>
                            <div className="btn-reservation">
                              <a className="btn-back btn" href="/reservation/2">PREVIOUS</a>
                              <a className="btn-room btn" ><Link to="/reservation4">CONTINUE</Link></a>
                              <Switch> <Route path='/reserveration4' > </Route></Switch>
                            </div>
                          </form>
                        </div>
                        <div className="col-lg-3 widget widget_check_availability widget-1">
                          <h4 className="widget-title">Basket</h4>
                          {/* Booking Summary */}
                          <form className="check_availability booking-summary">
                            <div className="booking-summary-room-type">
                              <h6 className="check_availability_title">{/*?php echo $fetch3['roomtype']; ?*/}</h6>
                              <div className="booking-summary-detail">
                                <p>Room {/*?php echo $fetch2['noroom']; ?*/}</p>
                                <p>${/*?php echo $fetch3['rent'].' x '.$_SESSION['day'].'d'; ?*/}</p>
                                <a href="delete-roombook.php?basket_id=<?php echo $fetch1['basket_id']; ?>"><i className="fa fa-trash" /></a>
                              </div>
                            </div>
                            {/*?php
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                                ?*/}
                            <div className="booking-summary-total">
                              <b>Total</b>
                              <p><b>${/*?php echo $_SESSION['total']; ?*/}</b></p>
                            </div>
                            {/*?php
                                            }
                                        ?*/}
                          </form>
                          {/* Booking Summary End */}
                        </div>
                      </div>
                    </div>
                    {/*  END/SIDEBAR */}
                  </div>
                </div>
              </div>
            </section>
            <Footer></Footer>
          </div>
    
        );
    }
}

export default Reservation3;