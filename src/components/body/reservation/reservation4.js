import React, { Component } from 'react';
import './styles.scoped.css'
import Footer from './../../footer/footer'
import Header from './../../header/header'
class Reservation4 extends Component {
    constructor(props) {
    super(props);
    this.state = {
      phone: '',
      arrive: '',
      depart: '',
      numbPerson: '',
      roomType: '',
      information: []
    }
  }
  componentDidMount() {
    if (localStorage.getItem("infor") !== null) {
      this.setState(() => ({
        information: JSON.parse(localStorage.getItem("infor"))
      }))
    }
  }
    render() {
        return (
            <div className="container-fluid">
               <Header></Header>
            {/* MENU */}
            {/*?php
                require_once "header.php";
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
                      <li><span>3.</span> Check Out</li>
                      <li className="active"><span>4.</span> Finish</li>
                    </ul>
                  </div>
                  {/* END / STEP */}
                  <div className="row check-out">
                    {/*  SIDEBAR */}
                    <div className="col-lg-10 col-md-4 col-sm-12 col-xs-12">
                      <div className="sidebar">
                        {/* WIDGET CHECK AVAILABILITY */}
                        <div className="widget widget_check_availability widget-1">
                          {/*?php $total = $_SESSION['total'];
                                    ?*/}
                          <form className="check_availability bill" action method="post">
                            <div className="bill-header">
                              <div className="name-hotel">
                                <img src="images/logo-icon.png" alt="" />
                                <b><h3>HTK Queen Hotel</h3></b>
                              </div>
                              <div className="infor-hotel">
                                <span>99 To Hien Thanh, Son Tra, Da Nang</span>
                                <span>hktqueenhotel@gmail.com</span>
                                <span>(+84) 337 965 469</span>
                              </div>
                            </div>
                            <div className="bill-title">
                              <b>RESERVATION BILL</b>
                            </div>
                            <div className="bill-content">
                              <div className="bill-content-infor">
                                <div>
                                  <span>Name: <b>{/*?php if(ISSET($_SESSION['name'])) {echo $_SESSION['name'];} ?*/}</b></span>
                                </div>
                                <div>
                                  <span>Email: <b>{/*?php if(ISSET($_SESSION['email'])) {echo $_SESSION['email'];} ?*/}</b></span>
                                </div>
                                <div>
                                  <span>Phone: <b>{this.state.information.slice().map((infor) =>infor.phone)}</b></span>
                                </div>
                              </div>
                              <div className="bill-content-room">
                                <span>{/*?php echo $date = date("d-m-Y");?*/}</span>
                              
                                <table className="table table-responsive-lg table-responsive-xl">
                                  <thead>
                                    <tr>
                                      <th>No</th>
                                      <th>Room</th>
                                      <th>Type</th>
                                      <th>Arrive</th>
                                      <th>Depart</th>
                                      <th>Rent/day</th>
                                    </tr>
                                  </thead>
                                  <tbody>

                                  {this.state.information.slice().map((infor) => {
                                  return (<tr>
                                    <td>{infor.roomType}</td>
                                    <td>{infor.roomType}</td>
                                    <td>{infor.arrive}</td>
                                    <td>{infor.depart}</td>
                                    <td>{infor.numbPerson}</td>            
                                       </tr>
                                         )
                                       })}        
                                    <tr>
                                      <td><b>Total</b></td>
                                      <td style={{visibility: 'hidden'}} />
                                      <td style={{visibility: 'hidden'}} />
                                      <td style={{visibility: 'hidden'}} />
                                      <td style={{visibility: 'hidden'}} />
                                      <td><b>${/*?php echo $_SESSION['total']; ?*/}</b></td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                            <hr className="new1" />
                            <div className="bill-footer">
                             <span>Customer (sign)</span>
                              <div className="sign" />
                              <b>{/*?php if(ISSET($_SESSION['name'])) {echo $_SESSION['name'];} ?*/}</b>
                            </div>
                            <hr className="new2" />
                            <span className="thanks">Thank you for your reservation.</span>
                            <div className="btn-reservation">
                              <a className="btn-back btn" href="/reservation/3">PREVIOUS</a>
                              <button type="submit" className="btn-room btn" name="confirm">CONFIRM</button>
                            </div>
                          </form>
                        </div>
                        {/* END / WIDGET CHECK AVAILABILITY */}
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

export default Reservation4;