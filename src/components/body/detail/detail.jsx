import React, { useEffect, useState } from 'react';
import './detail.scoped.css'

import axios from 'axios';
import Header from './../../header/header'
import Footer from './../../footer/footer'

import url from './../../../config'
import Rooms from '../room/room'
import reactDom from 'react-dom';
import { data } from 'jquery';
import queryString from 'query-string';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams,
    Redirect,useHistory
} from 'react-router-dom';



const Detail = (props) => {
    let history = useHistory()
    const { id } = useParams();
    const [data, setData] = useState([]);
    const [redirect, setRedirect] = useState(false);
    useEffect(async () => {
        const data = await axios.get(url + '/rooms?room_id=' + id).then(res => res.data);
        setData(data);
    }, [])
    const direct=()=>{
        setRedirect(true);

     }
    return (
        <div>
            <Header></Header>
            { redirect ? (<Redirect push to="/reservation1"/>) : null }

            <div class="container">
                <center> <h3 class="headerDetail"> Welcome to view detail room </h3></center>
                <div></div>
                <div class="row">
                    <div class="col-sm-6" > <img src={data.img} alt="Image rooms" / >
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
                                    <h4 class="gachdung"> | </h4>
                                </div>

                            </div>
                        </div>
                        <div class="dtail">
                            <div class="row  card-body">
                                <div className="card">
                                    <h5 className="card-text text-warning"> Roomtype: {data.roomtype}</h5>
                                    <h5 className="card-text text-success" > Status:  {data.status}</h5>
                                    <h5> noroom: {data.noroom}</h5>
                                    <h5> Phone: {data.phone}</h5>
                                    <h4 className="card-text text-info "> Price : <span> {data.rent} $                                     <small> per night</small>
                                    </span> </h4>
                                    <a className="text-link"><i class="fa fa-map-marker" aria-hidden="true"></i> {data.address} </a>
                                    <p className="card-text">{data.des} </p>
                                </div>  
                            </div>
                            <button className="btn btn-primary" onClick={direct} > BOOK NOW</button>

                        </div>

                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>

    );
}



export default Detail;