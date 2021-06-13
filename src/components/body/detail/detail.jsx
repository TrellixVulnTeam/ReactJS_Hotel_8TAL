import React, { useEffect, useState } from 'react';
import './detail.scoped.css'

import axios from 'axios';
import Header from './../../header/header'
import Footer from './../../footer/footer'
import Item_Home from './../../Item/home_item'
import url from './../../../config'
import Rooms from '../room/room'
import reactDom from 'react-dom';
import { data } from 'jquery';
import queryString from 'query-string';
import Carousel from 'react-bootstrap/Carousel';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams,
    Link,useHistory
} from 'react-router-dom';




  function *chunks(arr, n) {
    for (let i = 0; i < arr.length; i += n) {
      yield arr.slice(i, i + n);
    }
  }
const Detail = (props) => {
    let history = useHistory()
    const { id } = useParams();
    const [dataRoom,setDataRoom]=useState([]);
    const [data, setData] = useState([]);
    const [redirect, setRedirect] = useState(false);
    useEffect(async () => {
        const data = await axios.get(url + '/rooms?room_id=' + id).then(res => res.data);
        setData(data);
    }, [])
    useEffect(async () => {
        const data = await axios.get(url + "/rooms?query=searchRoom").then(res => res.data);
        setDataRoom(data);
    }, [])
    const room=[...chunks(dataRoom, 4)]
     return (
        <div>
            <Header></Header>
            <div className="hheader"> </div>
            <div className="hheader"> </div>


            <div class="container">
                <center> <h3 class="headerDetail"> Welcome to view detail room </h3></center>
                <div></div>
                <div class="row">
                    <div class="col-sm-6" > <img src={data.img} alt="Image rooms" height="300" width="400" />
                    </div>
                    <div class="col-sm-6" >
                        <div class="spa">
                            <div class="space">
                                <div class="spa">
                                    <h6 class="sao"> *********** </h6>
                                </div>
                                <div>
                                    <strong> <h4 class="moderndb"> MODERN DELEX BELVEDERE  </h4></strong>
                                </div>

                            </div>
                            <div class="spac">
                                <div class="space1">

                                    <h4 class="gachdung">{data.rent}$</h4>
                                </div>

                            </div>
                        </div>

                        <div class="dtail">
                            <div></div>
                            <table class="table">
                                <thead>
                                    <tr >
                                        <th class="th1">Room_id</th>
                                        <th class="th1">Roomtype_id</th>
                                        <th class="th1">Status</th>
                                        <th class="th1">Noroom</th>
                                        <th class="th1">Phone</th>


                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="success">
                                        <td> {data.room_id}</td>
                                        <td>{data.roomtype_id}</td>
                                        <td> {data.status}</td>
                                        <td>{data.noroom}</td>
                                        <td> {data.phone}</td>
                                    </tr>
                                </tbody>
                            </table>
                          
                            <table class="table">
                                <thead>
                                    <tr>
                                    <th class="th2">NameHotel</th>
                                    <th class="th2">Address Hotel</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="success">
                                        <td>{data.hotel_name} </td>
                                        <td >{data.address}</td>
                                 

                                    </tr>
                                </tbody>
                            </table>

                            <div className="hheader"> </div>
                            <Link to={`/reservation1/${id}`} ><input type="submit" value="BOOK NOW" className='btn btn-primary' />   </Link> 
                        </div>


                    </div>
                </div>
            </div>

            <br/><hr/><br/>
            
            <center> <h3 class="headerDetail"> Orther Hotels </h3></center>
             <Carousel id="carousel">
                  {room.map((value)=>{
                    
                    return <Carousel.Item>
                        <div className="row">
                            {value.map((element) => <Item_Home image={element.img} roomtype={element.roomtype}  price={element.rent} id={element.room_id} ></Item_Home>)}
                        </div>
                    </Carousel.Item>
                 })}
                </Carousel> ;            <div className="hheader"> </div>
            <div className="hheader"> </div>

            <Footer></Footer>
        </div>

    );
}


export default Detail;