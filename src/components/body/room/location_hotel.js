import React, { Component, useEffect, useState } from 'react';
import Header from '../../header/header';
import Footer from '../../footer/footer';

import axios from 'axios';
import url from './../../../config'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams,
    useLocation,
    Link
  } from 'react-router-dom';
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
    
   const LocationHotel =  (props)=> {
        const {local}=useParams();
        const query= useQuery();
        const [data, setData] = useState([]);
        useEffect( async ()=>{
          const ur=local?local:"";
          const a= query.get('query')?query.get('query'):'searchHotel';
          const data = await axios.get(url +  `/rooms?query=${a}&location=${ur}&price=${query.get('price')}`  ).then(res=> res.data);
          setData(data);
        },[])
        

        return (
            <div  className="container">
                <Header> </Header>
              
                <div>               
                    {data.map(item=> {return (
                                <Link to='/reservation1'>  
                            <div className="row">   
                                                    
                                <div className="col-sm-3 card-body">                                                               
                                <img src={item.image} style={{width:'250px'}} className="img-thumbnail "/>
                                </div>
                                <div className="mb-4 col-sm-9 card-body ">                                                   
                                    <div className="card">
                                        <h4 className="card-title"> {item.location} : <span className="text-primary ">{item.hotel_name}</span> </h4>
                                        <h4 className="card-text text-info "> Type Rooms : <span> {item.roomtype} </span> </h4>
                                        <h4 className="card-text text-info "> Price : <span> {item.rent} $</span> </h4>
                                        <a className="text-link"><i class="fa fa-map-marker" aria-hidden="true"></i> {item.address} </a>
                                        <p className="card-text">{item.des} </p>
                                    </div>
                                </div>
                            
                                </div>   
                                </Link>
                    ); })}  
                                               
                  
            
                          
                </div>
                <Footer></Footer>
            </div>
        );
    }


export default LocationHotel;