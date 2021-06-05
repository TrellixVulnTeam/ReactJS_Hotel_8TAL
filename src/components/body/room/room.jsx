import React, { Component } from 'react'
import Item from '../../Item/item_room';
import './room.scoped.css';
import 'bootstrap/dist/css/bootstrap.css';
import Header from '../../header/header';
import Footer from '../../footer/footer';

import axios from 'axios';
import { BrowserRouter as Router, } from "react-router-dom";
import { Route, Link, Switch } from "react-router-dom";
import Detail from '../detail/detail';
import url from '../../../config'

class Room extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] }
  }

  componentDidMount() {
    axios.get(url+'/rooms').then(res => {
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
             
              
              
                {this.state.data.map((element, index) => {
                  return (<p>
                    <div class="row">
                    <Item image1={element.img} roomtype={element.roomtype} pri={"Start form " +element.rent +" $ per day"}
               image2={element.image} 
               des={element.des} id={element.room_id } hotel={element.hotel_name} address={element.address} noroom={element.noroom}></Item>
              
                    </div>
                  </p>)
                })}

              </div>
            </div>
          </div>
        </section>
        <Footer></Footer>
      </div>
    )
  }
}
export default Room;