
import React, { Component } from 'react'
import Item from '../../Item/item_room';
import './room.scoped.css';
import './room.css';
import 'bootstrap/dist/css/bootstrap.css';
import Header from '../../header/header';
import axios from 'axios';
import { BrowserRouter as Router, Link } from "react-router-dom";
//import url from '../config'

class Room extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] }
  }

  componentDidMount() {
    axios.get('http://localhost/New%20folder/ReactJS_Hotel/src/DB/api/controller.php/rooms').then(res => {
      this.setState({ data: res.data })
    })
  }
  render() {
    return (

      <div class="container-fluid">
        <Header></Header>
        <section className="body-room-4">
          <div className="container">
            <div className="wrap-room-4">
              <div className="row">
                {/* <Item image1="http://landing.engotheme.com/html/skyline/demo/images/Room/room-18.jpg" roomtype="LUXURY ROOM" pri="Start form $120 per day" image2="http://landing.engotheme.com/html/skyline/demo/images/Room/room-19.jpg" des=" Lorem Ipsum has been the industry's standard dummy text ever since.the 1500s, when an unknown printer took a galleryof type and scrambled it to make a type specimen book ..."></Item> 
                <Item room_id="2" image1="http://landing.engotheme.com/html/skyline/demo/images/Room/room-20.jpg" roomtype="FAMILY ROOM" pri="Start form $150 per day" image2="http://landing.engotheme.com/html/skyline/demo/images/Room/room-21.jpg" des="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gallery of type and scrambled it to make a type specimen book ..."></Item>
                <Item room_id="3" image1="http://landing.engotheme.com/html/skyline/demo/images/Room/room-22.jpg" roomtype="COUPLE ROOM" pri="Start form $150 per day" image2="http://landing.engotheme.com/html/skyline/demo/images/Room/room-23.jpg" des="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gallery of type and scrambled it to make a type specimen book ..."></Item> */}
                {this.state.data.map((element, index) => {
                  return (<p>
                    {/* <td>{index}</td> 
                     <h3>{element.room_id}</h3>
                      <h5>{element.roomtype_id}</h5>
                      <h5>{element.noroom}</h5>
                      <p><img src={element.images} /> </p>
                      <h5>{element.phone}</h5>
                      <h5>{element.status}</h5>
                      <h3> -----------------------------</h3> */}
                    <div class="row">
                      <div class="col-sm-12">
                        <h5>{element.noroom}</h5>
                        <h3>{element.room_id}</h3>
                        {/* <p><img src={element.images} /> </p> */}
                        <p> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4zDV7hvBIRIcvWXkkKNfRUsAwo79NxK8aGg&usqp=CAU" /></p>
                        {/* <button class="btn"> <Link to='/detail{room_id}' >  View Detail </Link> </button> */}
                        {/* { <button class="btn"> <Link to='/detail{index}' >  View Detail </Link> </button> } */}
                        <button class="btn"> <Link to={"/detail/"+element.room_id}> View detail </Link></button>
                        <h3> -----------------------------</h3>
                      </div>
                    </div>



                  </p>)
                })}

              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
export default Room;
