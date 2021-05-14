import React, { Component } from 'react';
import '../../css/bootstrap-select.min.css'
import '../../css/styles.css'
import Footer from '../footer/footer';

class reservation extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid">
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
                      <input className="form-control wrap-box" type="number" name="phone" placeholder="Phone" required />
                    </div>
                  </div>
                  <h6 className="check_availability_title">your stay dates</h6>
                  <div className="check_availability-field">
                    <label>Arrive</label>
                    <div className="input-group">
                      <input className="form-control wrap-box" id="arriveDate" type="date" name="arrive" placeholder="Arrival Date" required />
                    </div>
                  </div>
                  <div className="check_availability-field">
                    <label>Depature</label>
                    <div className="input-group">
                      <input className="form-control wrap-box" id="departDate" type="date" name="depart" placeholder="Departure Date" required />
                    </div>
                  </div>
                  <h6 className="check_availability_title">ROOMS &amp; GUest</h6>
                  <div className="check_availability-field">
                    <label>Person</label>
                    <select className="awe-select" name="numbPerson">
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                    </select>
                  </div>
                  <div className="check_availability-field">
                    <label>Type Room</label>
                    <select className="awe-select roomType" name="roomType" onchange="showRoomType()">
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
              {/* END / WIDGET CHECK AVAILABILITY */}
              <div className="widget widget_check_availability">
                <h4 className="widget-title">BOOKING SUMMARY</h4>
                {/* Booking Summary */}
                <form className="check_availability booking-summary">
                
                  <div className="booking-summary-room-type">
                    <h6 className="check_availability_title">{/*?php echo $fetch3['roomtype']; ?*/}</h6>
                    <div className="booking-summary-detail">
                      <p>Room {/*?php echo $fetch2['noroom']; ?*/}</p>
                      <p>${/*?php echo $fetch3['rent'], ' X '.$_SESSION['day'].'d' ; ?*/}</p>
                      <a href="delete-roombook.php?basket_id=<?php echo $fetch1['basket_id']; ?>"><i className="fa fa-trash" /></a>
                    </div>
                  </div>
                 
                  <div className="booking-summary-total">
                    <b>Total</b>
                    <p><b>${/*?php echo $_SESSION['total']; ?*/}</b></p>
                  </div>
                  {/*?php
                                         
                                      }
                                  ?*/}
                  <button type="button" className="btn-room btn" name="kha" onclick="window.location.href='reservation2.php'">CONTINUE</button>
                </form>
                {/* Booking Summary End */}
              </div>
            </div>
          </div>
          {/* CONTENT */}
          <div className="col-lg-9 col-md-12 col-sm-12 col-xs-12">
            <div className="reservation_content">
              {/* RESERVATION ROOM */}
              <div className="reservation-room" id="rooms-list">
                {/* ITEM */}
                {/* ####################################################################################### */}
                {/* LUXURY ROOM */}
                <div className="reservation-room_item">
                  <h2 className="reservation-room_name"><a href="#">Luxury room</a></h2>
                  <div className="reservation-room_img">
                    <a href="#"><img src="images/luxury.jpg" alt="#" className="img-responsive" /></a>
                  </div>
                  <div className="reservation-room_text">
                    <div className="reservation-room_desc">
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type...</p>
                      <ul>
                        <li>1 King Bed</li>
                        <li>Free Wi-Fi in all guest rooms</li>
                        <li>Separate sitting area</li>
                      </ul>
                    </div>
                    {/* <div class="clear"></div> */}
                    <p className="reservation-room_price">
                      <span className="reservation-room_amout">$590</span> / day
                    </p>
                  </div>
                  <div className="reservation-room_package">
                
                    <form className="reservation-package_item">
                      <b>Room {/*?php echo $fetch_data['noroom']; ?*/} </b>
                      <a className="btn btn-room" href="save-roombook.php?room_id=<?php echo $fetch_data['room_id'];?>">BOOK</a>
                    </form>
                    {/*?php
                                                      }
                                                  }
                                              }
                                          }
                                          else {
                                              while($fetch_data = mysqli_fetch_assoc($result)) {
                                                      ?*/}
                    <form className="reservation-package_item">
                      <b>Room {/*?php echo $fetch_data['noroom']; ?*/} </b>
                      <a className="btn btn-room" href="save-roombook.php?room_id=<?php echo $fetch_data['room_id'];?>">BOOK</a>
                    </form>
                    {/*?php
                                              }
                                          }
                                      ?*/}
                  </div>
                </div>
                {/* LUXURY ROOM END */}
                {/* ####################################################################################### */}
                {/* FAMILY ROOM */}
                <div className="reservation-room_item">
                  <h2 className="reservation-room_name"><a href="#">FAMILY room</a></h2>
                  <div className="reservation-room_img">
                    <a href="#"><img src="images/family.jpg" alt="#" className="img-responsive" /></a>
                  </div>
                  <div className="reservation-room_text">
                    <div className="reservation-room_desc">
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type ...</p>
                      <ul>
                        <li>1 King Bed</li>
                        <li>Free Wi-Fi in all guest rooms</li>
                        <li>Separate sitting area</li>
                      </ul>
                    </div>
                    <div className="clear" />
                    <p className="reservation-room_price">
                      <span className="reservation-room_amout">$490</span> / day
                    </p>
                  </div>
                  <div className="reservation-room_package">
                    {/*?php 
                                          include_once 'signup-form/connection.php';
                                          $room = new Room();
                                          $result = $room-*/}getRoomByRoomType(2);
                    include "checkBasket.php";
                    if(ISSET($_SESSION['email'])) {'{'}
                    if(mysqli_num_rows($result) &gt; 0) {'{'}
                    while($fetch_data = mysqli_fetch_assoc($result)) {'{'}
                    if(in_array($fetch_data['room_id'], $_SESSION['room_id']) === false) {'{'}
                    ?&gt;
                    <form className="reservation-package_item">
                      <b>Room {/*?php echo $fetch_data['noroom']; ?*/} </b>
                      <a className="btn btn-room" href="save-roombook.php?room_id=<?php echo $fetch_data['room_id'];?>">BOOK</a>
                    </form>
                    {/*?php
                                                      }
                                                  }
                                              }
                                          }
                                          else {
                                              while($fetch_data = mysqli_fetch_assoc($result)) {
                                                      ?*/}
                    <form className="reservation-package_item">
                      <b>Room {/*?php echo $fetch_data['noroom']; ?*/} </b>
                      <a className="btn btn-room" href="save-roombook.php?room_id=<?php echo $fetch_data['room_id'];?>">BOOK</a>
                    </form>
                    {/*?php
                                              }
                                          }
                                      ?*/}
                  </div>
                </div>
                {/* FAMILY ROOM END*/}
                {/* ####################################################################################### */}
                {/* CUOPLE ROOM */}
                <div className="reservation-room_item">
                  <h2 className="reservation-room_name"><a href="#">COUPLE room</a></h2>
                  <div className="reservation-room_img">
                    <a href="#"><img src="images/couple.jpg" alt="#" className="img-responsive" /></a>
                  </div>
                  <div className="reservation-room_text">
                    <div className="reservation-room_desc">
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type ...</p>
                      <ul>
                        <li>1 King Bed</li>
                        <li>Free Wi-Fi in all guest rooms</li>
                        <li>Separate sitting area</li>
                      </ul>
                    </div>
                    <div className="clear" />
                    <p className="reservation-room_price">
                      <span className="reservation-room_amout">$390</span> / day
                    </p>
                  </div>
                  <div className="reservation-room_package">
                    {/*?php 
                                          include_once 'signup-form/connection.php';
                                          $room = new Room();
                                          $result = $room-*/}getRoomByRoomType(3);
                    include "checkBasket.php";
                    if(ISSET($_SESSION['email'])) {'{'}
                    if(mysqli_num_rows($result) &gt; 0) {'{'}
                    while($fetch_data = mysqli_fetch_assoc($result)) {'{'}
                    if(in_array($fetch_data['room_id'], $_SESSION['room_id']) === false) {'{'}
                    ?&gt;
                    <form className="reservation-package_item">
                      <b>Room {/*?php echo $fetch_data['noroom']; ?*/} </b>
                      <a className="btn btn-room" href="save-roombook.php?room_id=<?php echo $fetch_data['room_id'];?>">BOOK</a>
                    </form>
                    {/*?php
                                                      }
                                                  }
                                              }
                                          }
                                          else {
                                              while($fetch_data = mysqli_fetch_assoc($result)) {
                                                      ?*/}
                    <form className="reservation-package_item">
                      <b>Room {/*?php echo $fetch_data['noroom']; ?*/} </b>
                      <a className="btn btn-room" href="save-roombook.php?room_id=<?php echo $fetch_data['room_id'];?>">BOOK</a>
                    </form>
                    {/*?php
                                              }
                                          }
                                      ?*/}
                  </div>
                </div>
                {/* CUOPLE ROOM END */}
                {/* ####################################################################################### */}
                {/* STANDARD ROOM */}
                <div className="reservation-room_item">
                  <h2 className="reservation-room_name"><a href="#">STANDARD room</a></h2>
                  <div className="reservation-room_img">
                    <a href="#"><img src="images/standard.jpg" alt="#" className="img-responsive" /></a>
                  </div>
                  <div className="reservation-room_text">
                    <div className="reservation-room_desc">
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type ...</p>
                      <ul>
                        <li>1 King Bed</li>
                        <li>Free Wi-Fi in all guest rooms</li>
                        <li>Separate sitting area</li>
                      </ul>
                    </div>
                    <div className="clear" />
                    <p className="reservation-room_price">
                      <span className="reservation-room_amout">$290</span> / day
                    </p>
                  </div>
                  <div className="reservation-room_package">
                   
                    <form className="reservation-package_item">
                      <b>Room {/*?php echo $fetch_data['noroom']; ?*/} </b>
                      <a className="btn btn-room" href="save-roombook.php?room_id=<?php echo $fetch_data['room_id'];?>">BOOK</a>
                    </form>
                    {/*?php
                                                      }
                                                  }
                                              }
                                          }
                                          else {
                                              while($fetch_data = mysqli_fetch_assoc($result)) {
                                                      ?*/}
                    <form className="reservation-package_item">
                      <b>Room {/*?php echo $fetch_data['noroom']; ?*/} </b>
                      <a className="btn btn-room" href="save-roombook.php?room_id=<?php echo $fetch_data['room_id'];?>">BOOK</a>
                    </form>
                    {/*?php
                                              }
                                          }
                                      ?*/}
                  </div>
                </div>
                {/* STANDARD ROOM END*/}
                {/* ####################################################################################### */}
              </div>
              {/* END / RESERVATION ROOM */}
            </div>
          </div>
          {/* END / CONTENT */}
        </div>
      </div>
    </div>
  </section>
  {/* END / RESERVATION */}
                                      
                                      <Footer></Footer>
            </div>
            </div>
        );
    }
}

export default reservation;