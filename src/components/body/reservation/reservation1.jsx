import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './styles.scoped.css'
import 'bootstrap/dist/css/bootstrap.css';
import Footer from './../../footer/footer'
import Header from './../../header/header'
import axios from 'axios';
import url from '../../../config';

import { BrowserRouter as Router, Link, Route, Switch, Redirect } from 'react-router-dom';
import { data } from 'jquery';
class reservation extends Component {
  information = [];
  constructor(props) {
    super(props);
    this.state = {
      phone: this.current_datetime(),
      arrive: '',
      depart: '',
      hotel: '',
      location: '',
      roomType: '0',
      room: '',
      listRoom: [],
      listRoomType: [],
      listLocation: [],
      listHotel: [],
      cost: '',
      continue: false

    }
    // this.saveLocal = this.saveLocal.bind(this)
    this.selectRoomType = this.selectRoomType.bind(this)
  }
  daysBetween = () => {
    const one_day = 1000 * 60 * 60 * 24;
    let date1_ms = new Date(this.state.arrive);
    var date2_ms = new Date(this.state.depart);
    var difference_ms = date2_ms - date1_ms;
    return Math.round(difference_ms / one_day);
  }
  current_datetime = () => {
    let current_datetime = new Date();
    let month = (current_datetime.getMonth() + 1);
    if (month < 10) month = "0" + month;
    let day = (current_datetime.getDate());
    if (day < 10) day = "0" + day;
    let formatted_date = current_datetime.getFullYear() + "-" + month + "-" + day;
    return formatted_date;
  }
  dateForDepart = () => {
    let current_datetime = new Date();
    let month = (current_datetime.getMonth() + 1);
    if (month < 10) month = "0" + month;
    let day = (current_datetime.getDate() + 1);

    if (day < 10) day = "0" + day;
    let formatted_date = current_datetime.getFullYear() + "-" + month + "-" + day;

    return formatted_date;
  }
  componentDidMount() {
    axios.get(url + "/rooms").then(res => {
      this.setState({ listRoom: res.data.map(value => value.noroom) });
    })
    axios.get(url + "/locations").then(res => {
      this.setState({
        listLocation: res.data.map(value => value.location)
      })
    }
    );
  }
  check = () => {
    // if (localStorage.getItem("infor") !== null) {
    //   this.information = JSON.parse(localStorage.getItem("infor"))
    // }
    // this.information.push({
    //   phone: this.state.phone,
    //   arrive: this.state.arrive,
    //   depart: this.state.depart,
    //   hotel: this.state.hotel,
    //   roomType: this.state.roomType
    // });
    // console.log(this.information);
    //localStorage.setItem("room_id", JSON.stringify(this.state.room));

    isNaN(this.state.cost) ? alert('VUI LONG NHAP DU THONG TIN') : this.setState({ continue: true });

  }
  myhandleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value }, () => {
      if (name == "room") {
        axios.get(url + "/rooms?room_id=" + this.state.room).then(res => {
          this.setState({
            cost: (new Number(res.data.rent)) * this.daysBetween()
          })
        });
      }
      localStorage.setItem('checkin', JSON.stringify(this.state.checkin))
      localStorage.setItem('chekout', JSON.stringify(this.state.checout))


    });



  }

  selectRoomType = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value }, () => {
      axios.get(url + "/locations?query=hotels&id_hotel=" + this.state.hotel).then(res => {
        this.setState({
          listRoomType: res.data
        })
      });
    });




  }
  selectHotel = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value }
      , () => {
        axios.get(url + "/locations?query=hotels&location=" + this.state.location)
          .then(res => {
            this.setState({ listHotel: res.data })

          })

      }
    );


  }

  selectRoom = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    this.setState({ [name]: value }, () => {
      axios.get(url + "/rooms?roomtype_id=" + this.state.roomType).then(res => {
        this.setState({
          listRoom: res.data.map(value => value)
        })
      }
      );

    });

  }



  // localStorage.setItem("noroom",this.listRoom);
  //   console.log(res.data.map(value=>value.noroom)) Sau khi lấy ra được phòng nào thì hiện thị ra trang số 2

  render() {
    return (
      <div>
        {this.state.continue ? <Redirect to='reservation2' /> : ''}
        <div className="container-fluid">
          <Header></Header>

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
                <div className="row">
                  <div className="col-lg-3 col-md-4 col-sm-12 col-xs-12">
                    <div className="sidebar">
                      <div className="widget widget_check_availability form-reservation">
                        <h4 className="widget-title">YOUR RESERVATION</h4>
                        <form className="check_availability" onSubmit={this.handleSubmit} >
                          <div className="check_availability-field">
                            <label>Phone</label>
                            <div className="input-group date">
                              <input className="form-control wrap-box" type="number" name="phone" value={this.state.name} onChange={this.myhandleChange} placeholder="Phone" required />
                            </div>
                          </div>
                          <h6 className="check_availability_title">Your stay dates</h6>
                          <div className="check_availability-field">
                            <label>Arrive</label>
                            <div className="input-group">
                              <input className="form-control wrap-box" id="arriveDate" type="date" min={this.current_datetime()} name="arrive" value={this.state.arrive} onChange={this.myhandleChange} placeholder="Arrival Date" required />
                            </div>
                          </div>
                          <div className="check_availability-field">
                            <label>Depature</label>
                            <div className="input-group">
                              <input className="form-control wrap-box" id="departDate" type="date" name="depart" min={this.dateForDepart()} value={this.state.depart} onChange={this.myhandleChange} placeholder="Departure Date" required />
                            </div>
                          </div>
                          <h6 className="check_availability_title">ROOMS &amp;GUest</h6>

                          <div className="check_availability-field">
                            <label> Location </label>
                            <select className="awe-select" name="location" value={this.state.location} onChange={this.selectHotel}>
                              {this.state.listLocation.map(value =>
                                <option value={value}>{value}</option>

                              )}
                            </select>
                          </div>
                          <div className="check_availability-field">
                            <label>Hotel</label>
                            <select className="awe-select" name="hotel" value={this.state.hotel} onChange={this.selectRoomType} >

                              {this.state.listHotel.map(value =>
                                <option value={value.id}>{value.hotel_name}</option>

                              )}
                            </select>
                          </div>
                          <div className="check_availability-field">
                            <label>Type Room</label>
                            <select className="awe-select roomType" name="roomType" value={this.state.roomType} onChange={this.selectRoom}>
                              {this.state.listRoomType.map(value =>
                                <option value={value.roomtype_id}>{value.roomtype}</option>

                              )}
                            </select>
                          </div>
                          <div className="check_availability-field">

                            <label> Room</label>
                            <select className="awe-select roomType" name="room" value={this.state.room} onChange={this.myhandleChange}>
                              {this.state.listRoom.map(value => { return <option value={value.room_id}>{value.noroom}</option> })}
                            </select>
                          </div>
                        </form>
                      </div>
                      <div className="widget widget_check_availability">
                        <h4 className="widget-title">BOOKING SUMMARY</h4>

                        <form className="check_availability booking-summary">




                          <div className="booking-summary-total">
                            <b>Total {isNaN(this.state.cost) ? 'Date Invalid ' : this.state.cost} </b>
                            <p><b>  $</b></p>
                          </div>

                          <button type="button" className="btn-room btn" name="btn" onClick={this.check} >CONTINUE</button>

                        </form>

                      </div>
                    </div>
                  </div>
                  <div className="col-lg-9 col-md-12 col-sm-12 col-xs-12">
                    <div className="reservation_content">
                      <div className="reservation-room" id="rooms-list">

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
                            <p className="reservation-room_price">
                              <span className="reservation-room_amout">$590</span> /day
                            </p>
                          </div>
                          <div className="reservation-room_package">

                          </div>
                        </div>

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


                          </div>
                        </div>

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



                          </div>
                        </div>

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



                          </div>
                        </div>

                      </div>

                    </div>
                  </div>

                </div>
              </div>
            </div>
          </section>



        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default reservation;