import React, { Component } from 'react';
        import '../css/reservertion1.css';
        class Reservertion1 extends Component {
            constructor(props){
                super(props);
                this.state={
                    name:'',
                    arrive:'',
                    depart:'',
                    numbPerson:'',
                    roomType:'',
                 
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
                <li className="active"><span>1.</span> Choose Room</li>
                <li><span>2.</span> Confirm Information</li>
                <li><span>3.</span> Check Out</li>
                <li><span>4.</span> Finish</li>
              </ul>
            </div>
            {/* END / STEP */}
                  <div className="row">
                    <div className="col-lg-3 col-md-4 col-sm-12 col-xs-12">
                      <div className="sidebar">
                        {/* WIDGET CHECK AVAILABILITY */}
                        <div className="widget widget_check_availability form-reservation">
                          <h4 className="widget-title">YOUR RESERVATION</h4>
                          {/* onclick="window.location.href='controllerBookingData.php'" */}
                          <form className="check_availability" action="controllerBookingData.php" method="POST">
                            <div className="check_availability-field">
                              <label>Phone</label>
                              <div className="input-group date">
                                <input className="form-control wrap-box" type="number" name="phone" placeholder="Phone" value={this.state.phone} onChangee={this.myhandleChange} required />
                              </div>
                            </div>
                            <h6 className="check_availability_title">your stay dates</h6>
                            <div className="check_availability-field">
                              <label>Arrive</label>
                              <div className="input-group">
                                <input className="form-control wrap-box" id="arriveDate" type="date" name="arrive" placeholder="Arrival Date" value={this.state.arrive} onChange={this.myhandleChange} required />
                              </div>
                            </div>
                            <div className="check_availability-field">
                              <label>Depature</label>
                              <div className="input-group">
                                <input className="form-control wrap-box" id="departDate" type="date" name="depart" placeholder="Departure Date" value={this.state.depart} onChange={this.myhandleChange} required />
                              </div>
                            </div>
                            <h6 className="check_availability_title">ROOMS &amp; GUest</h6>
                            <div className="check_availability-field">
                              <label>Person</label>
                              <h3>{this.state.numbPerson} </h3>
                              <select className="awe-select" name="numbPerson"value={this.state.numbPerson} onChange={this.myhandleChange}>
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                              </select>
                            </div>
                            <div className="check_availability-field">
                              <label>Type Room</label>
                              <select className="awe-select roomType" name="roomType" value={this.state.roomType} onChange={this.myhandleChange}>
                                <option value={0}>All</option>
                                <option value={1}>Luxury</option>
                                <option value={2}>Family</option>
                                <option value={3}>Couple</option>
                                <option value={4}>Standard</option>
                              </select>
                            </div>
                            {/* <button type="submit" class="btn-room btn" name="kha">SEARCH</button> */}
                          </form>
                        </div>                
                  </div>
                 </div>
                </div>
                </div>
                </div>
        
      </section>
    );
   } 
   }
        export default Reservertion1;
 