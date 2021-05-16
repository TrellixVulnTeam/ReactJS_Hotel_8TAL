import React, { Component } from 'react';
import Item_Home from '../Item/Item_home'
import '../../css/style.css'

const SliderHeader= React.lazy(()=>import ('../header/sliderHeader'));
class Home extends Component {

  render() {
    return (
      <div>
        <p>
        </p><div className="container ">
          <center>
            <h1 style={{ fontFamily: 'Didot', color: '#CC6600' }}>WELCOME TO HKTQUEEN HOTEL</h1>
          </center><br />
          <div className="row infor_1 ">
            <div className="col-md-5 " style={{ fontSize: '22px', fontFamily: 'Optima', color: '#003300' }}>HKT Queen Hotel Đà Nẵng City is a world-class 5-star hotel, located at the intersection of four main districts, which is considered the heart and center of the city Đà Nẵng. It takes you only 35 minutes drive from the hotel to Đà Nẵng
            airport, 8 minutes to the commercial and entertainment center of the city. With 300 elegantly designed and elegant standard rooms and suites with attention to every detail, it will bring the utmost comfort and comfort to you whether
                it is a relaxing time or a business trip. </div>
            <div className="col-md-7 ">
              <div className="thumbnail">
                <img className="card-img-top " src="images/home/introduction1.jpg" alt="HKTQueen" />
              </div>
            </div>
          </div>
        </div>
        <p />
        <br />
        <hr />
        <div className="container ">
          <div className="row mt-5 ">
            <h2 className="list-product-title ">
              <center>
                <h1 style={{ fontFamily: 'Didot', color: '#CC6600' }}>ROOM</h1>
              </center>
            </h2>
          </div>
          <br />
        </div>
        {/* slide room */}
        <div className="container ">
          <div id="slider2" className="carousel slide mt-1 " data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row ">
                  <Item_Home image="images/home/Presidential1.jpg" roomtype="Luxury" des=""></Item_Home>
                  <Item_Home image="images/home/Presidential1.jpg" roomtype="Family" des=""></Item_Home>
                  <Item_Home image="images/home/Presidential1.jpg" roomtype="Luxury" des=""></Item_Home>
                  <Item_Home image="images/home/Presidential1.jpg" roomtype="Couple" des=""></Item_Home>



                </div>
              </div>
              <div className="carousel-item room2">
                <div className="row">
                  <Item_Home image="images/home/Presidential1.jpg" roomtype="Luxury" des=""></Item_Home>
                  <Item_Home image="images/home/Presidential1.jpg" roomtype="Luxury" des=""></Item_Home>
                  <Item_Home image="images/home/Presidential1.jpg" roomtype="Standard" des=""></Item_Home>
                  <Item_Home image="images/home/Presidential1.jpg" roomtype="Luxury" des=""></Item_Home>
                </div>
              </div>
            </div>
            <a className="carousel-control-prev room2" href="#slider2" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon " aria-hidden="true " />
              <span className="sr-only ">Previous</span>
            </a>
            <a className="carousel-control-next room2" href="#slider2" role="button" data-slide="next">
              <span className="carousel-control-next-icon " aria-hidden="true " />
              <span className="sr-only ">Next</span>
            </a>
          </div>
        </div>
        {/* end slide room*/}
        {/* Load jquery trước khi load bootstrap js */}
        <br />
        <hr />
        <div className="container ">
          <center>
            <h1 style={{ fontFamily: 'Didot', color: '#CC6600' }}>DERVICES</h1>
          </center>
          <br />
          <div className="row infor_2 ">
            <div className="col-md-7 ">
              <img className="card-img-top " src="images/home/introduction2.jpg" alt="HKTQueen" />
            </div>
            <div className="col-md-5 " style={{ fontSize: '22px', fontFamily: 'Optima', color: '#003300' }}>The hotel has Orientica Seafood Restaurant &amp; Bar and Café Chat. Modern quality facilities of meeting and conference rooms can accommodate up to 1250 people. In addition, the hotel also has a world-class sports center with outdoor temperatures
            (floating bars on the water), shaping services, spa and massage. Hotel HTK Queen Đà Nẵng City with excellent facilities and services is the ideal choice for clients on jobs and vacations before visiting the most vibrant and rhythmic
                city in Vietnam.</div>
          </div><br />
          <div className="row infor_2">
            <div className="col-sm-3">
              <div className="thumbnail">
                <img className="card-img-top " src="images/home/restaurant.jpg" alt="HKTQueen" />
              </div>
            </div>
            <div className="col-sm-3">
              <div className="thumbnail">
                <img className="card-img-top " src="images/home/spa.jpg" alt="HKTQueen" />
              </div>
            </div>
            <div className="col-sm-3">
              <div className="thumbnail">
                <img className="card-img-top " src="images/home/hoboi.jpg" alt="HKTQueen" />
              </div>
            </div>
            <div className="col-sm-3">
              <div className="thumbnail">
                <img className="card-img-top " src="images/home/gym.jpg" alt="HKTQueen" />
              </div>
            </div>
          </div>
        </div>
        <br />
        <hr />
      </div>
    );
  }
}

export default Home;