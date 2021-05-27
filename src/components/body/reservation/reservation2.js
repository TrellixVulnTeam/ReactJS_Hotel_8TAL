import React, { Component } from 'react';
import './styles.scoped.css'
import Footer from './../../footer/footer'
import Header from './../../header/header'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
class reservation2 extends Component {
    render() {
        return (
            <div>
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
            <li className="active"><span>2.</span> Confirm Information</li>
            <li><span>3.</span> Check Out</li>
            <li><span>4.</span> Finish</li>
          </ul>
        </div>
        {/* END / STEP */}
        <div className="row check-out">
          {/*  SIDEBAR */}
          <div className="col-lg-9 col-md-4 col-sm-12 col-xs-12">
            <div className="sidebar">
              {/* WIDGET CHECK AVAILABILITY */}
              <div className="widget widget_check_availability widget-1">
                <h4 className="widget-title">YOUR Information</h4>
                <form className="check_availability">
                  <div className="check_availability-field booking-information">
                    <div className="col-lg-10"><b>Name:</b> <span>{/*?php if(ISSET($_SESSION['name'])) {echo $_SESSION['name'];} ?*/}</span></div>
                    <div className="col-lg-10"><b>Email:</b> <span>{/*?php echo $_SESSION['email'] ?*/}</span></div>
                    <div className="col-lg-10"><b>Phone:</b> <span>{/*?php if(ISSET($_SESSION['phone'])) {echo $_SESSION['phone'];} ?*/}</span></div>
                    <button className="edit-information-booking" data-toggle="modal" type="button" data-target="#update_modal" name="edit-infor-booking"><i className="fa fa-edit " /></button>
                  </div>
                  <br />
                  <div>
                    <br />
                  
                    <table className="table table-hover table-responsive-lg">
                      <thead>
                        <tr>
                          <th>Room</th>
                          <th>Type</th>
                          <th>Arrive</th>
                          <th>Depart</th>
                          <th>Rent/day</th>
                        </tr>
                      </thead>
                      <tbody>
       
                      
                        <tr>
                          <td><b>Total</b></td>
                          <td style={{visibility: 'hidden'}} />
                          <td style={{visibility: 'hidden'}} />
                          <td style={{visibility: 'hidden'}} />
                          <td><b>${/*?php echo $_SESSION['total']; ?*/}</b></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="btn-reservation ">
                    <a className="btn-back btn" href="/reservation/1">PREVIOUS</a>
                    <a className="btn-room btn" ><Link to="/reservation3">CONTINUE</Link></a>
                    <Switch> <Route path='/reserveration4' > </Route></Switch>

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
  {/* Modal Update */}
  <div className="modal fade" id="update_modal" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <form method action>
          <div className="modal-header">
            <h3 className="modal-title">Update Item</h3>
          </div>
          <div className="modal-body">
            <div className="col-md-2" />
            <div className="col-md-8">
              <div className="form-group">
                <input type="hidden" name="id" defaultValue />
              </div>
              <div className="form-group">
                <label>Name</label>
                <input type="text" name="name" defaultValue="Nguyen Dinh Kha" className="form-control" required="required" />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="text" name="quantity" defaultValue="dinhkhakl01@gmail.com" className="form-control" required="required" />
              </div>
              <div className="form-group">
                <label>Phone</label>
                <input type="text" name="quantity" defaultValue={"0545151413"} className="form-control" required="required" />
              </div>
            </div>
          </div>
          <div style={{clear: 'both'}} />
          <div className="modal-footer">
            <button name="update" className="btn btn-warning">Update</button>
            <button className="btn btn-danger" type="button" data-dismiss="modal">Close</button>
          </div>
        </form></div>
    </div>
  </div>
</div>
<Footer></Footer>
</div>
);
}}

export default reservation2;