import React, { Component } from 'react';
import Item_Home from './../../Item/home_item'
import './style.scoped.css'
import 'bootstrap/dist/css/bootstrap.css';
import Footer from './../../footer/footer'
import Header from './../../header/header';
import url from './../../../config'
import axios from 'axios'
import Carousel from 'react-bootstrap/Carousel';

const SliderHeader = React.lazy(() => import('./../../header/sliderHeader'));


class Home extends Component {


  constructor(props) {
    super(props);
    this.state = { dataRoom: [] };

  }

  getAllRoom = async () => {
    let allRoom = [];
    await axios.get(url + "/rooms").then((response) => {
      allRoom = response.data;
    });
    return allRoom;
  }
  getRoomType = async (id) => {

    let data = [];
    await axios.get(url + "/roomtypes?roomtype_id=" + id).then(res => {
      data = res.data;
    });
    return data;
  }
  componentDidMount = async () => {

    let data = await this.getAllRoom();
    let arr = [];

    let filterRoomType = [];

    data = data.filter(data => data.status == "available");

    let getType = data.map((item) => {
      return item.roomtype_id;
    });


    getType.map((item, index) => {
      if (getType.indexOf(item) == index)
        filterRoomType.push(item);
    });

     filterRoomType.forEach(async item => {
      let room = await this.getRoomType(item);
      arr.push(room)
    });

    setTimeout(() => {
      for (let i = 0; i < data.length; i++) {
        console.log(arr.length);
        console.log(arr)
  
        for (let j = 0; j < arr.length; j++) {
          const element = arr[j];
          if (element.roomtype_id == data[i].roomtype_id) {
            data[i].rent = element.rent;
            data[i].quantity = element.roomtype;
            data[i].roomtype = element.roomtype;
          }
        }
      };
      
    }, 200);
    this.setState({dataRoom:data})
   

   




  }
  render() {
    return (
      <div>
        <Header />
        <SliderHeader></SliderHeader>
        <div className="container">
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
                <Carousel>
                  <Carousel.Item>
                    <div className="row ">
                      <Item_Home image="images/home/Presidential1.jpg" roomtype="Luxury" des=""></Item_Home>
                      <Item_Home image="images/home/Presidential1.jpg" roomtype="Family" des=""></Item_Home>
                      <Item_Home image="images/home/Presidential1.jpg" roomtype="Luxury" des=""></Item_Home>
                      <Item_Home image="images/home/Presidential1.jpg" roomtype="Couple" des=""></Item_Home>
                    </div>
                    <br /> <hr /> <br />

                    <div className="row">
                      <Item_Home image="images/home/Presidential1.jpg" roomtype="Luxury" des=""></Item_Home>
                      <Item_Home image="images/home/Presidential1.jpg" roomtype="Family" des=""></Item_Home>
                      <Item_Home image="images/home/Presidential1.jpg" roomtype="Luxury" des=""></Item_Home>
                      <Item_Home image="images/home/Presidential1.jpg" roomtype="Couple" des=""></Item_Home>
                    </div>
                  </Carousel.Item>
                  <Carousel.Item>
                    <div className="row">
                      <Item_Home image="images/home/Presidential1.jpg" roomtype="Luxury" des=""></Item_Home>
                      <Item_Home image="images/home/Presidential1.jpg" roomtype="Luxury" des=""></Item_Home>
                      <Item_Home image="images/home/Presidential1.jpg" roomtype="Standard" des=""></Item_Home>
                      <Item_Home image="images/home/Presidential1.jpg" roomtype="Luxury" des=""></Item_Home>
                    </div>
                    <br /> <hr /> <br />
                    <div className="row">
                      <Item_Home image="images/home/Presidential1.jpg" roomtype="Luxury" des=""></Item_Home>
                      <Item_Home image="images/home/Presidential1.jpg" roomtype="Family" des=""></Item_Home>
                      <Item_Home image="images/home/Presidential1.jpg" roomtype="Luxury" des=""></Item_Home>
                      <Item_Home image="images/home/Presidential1.jpg" roomtype="Couple" des=""></Item_Home>
                    </div>
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>

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
        <Footer></Footer>
      </div>
    );
  }
}

export default Home;