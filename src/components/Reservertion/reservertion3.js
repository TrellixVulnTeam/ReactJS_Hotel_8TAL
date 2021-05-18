
        import React, { Component } from 'react';
        import '../css/reservertion3.css';
        class Reservertion3 extends Component {
            constructor(props){
                super(props);
                this.state={
                    name:'',
                    card:'',
                    cvv:''
                 
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
                                    <h6 className="check_availability_title">Your stay dates</h6>
                                    <div className="check_availability-field">
                                      <label>Name on Card</label>
                                      <input className="form-control wrap-box" type="text" name="name" placeholder="EX: NGUYEN DINH KHA" value={this.state.name} onChange={this.myhandleChange}/>
                                      <br />
                                      <label>Credit card number</label>
                                      <input className="form-control wrap-box" type="text" name="card" placeholder="EX: 4304  2052 10741" value={this.state.card} onChange={this.myhandleChange}/>
                                      <br />
                                      <label>CVV (Card Verification Value)</label>
                                      <input className="form-control wrap-box" type="text" name="cvv" placeholder="EX: 04/25" value={this.state.cvv} onChange={this.myhandleChange}/>
                                    </div>
                                    <div className="btn-reservation">
                                      <a className="btn-back btn" href="reservation2.php">PREVIOUS</a>
                                      <a className="btn-room btn" href="reservation4.php">CONTINUE</a>
                                    </div>
                                  </form>
                                </div>
                                <div className="col-lg-3 widget widget_check_availability widget-1">
                                  <h4 className="widget-title">Basket</h4>
                                  {/* Booking Summary */}
                                  <form className="check_availability booking-summary">
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
                  );
            }
        }

        export default Reservertion3;
 

