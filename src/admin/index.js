import React, { Component } from 'react';
import './assets/css/animate.scoped.css'
import './assets/css/sidebar-menu.scoped.css'
import './assets/css/adminstyle.scoped.css'
import MenuBar from './menubar';
import Header from './header';
import axios from 'axios'
import url from './../config'
import { useEffect, useState} from 'react';
import  { Redirect, useHistory } from 'react-router-dom'
import LocationHotel from '../components/body/room/location_hotel';




const Index = () => {
    // const history = useHistory();
    const [data, setData] = useState([]);
    const [data2, setDataa] = useState([]);
    let isLoggedIn=true;
    // useEffect(async () => {
    //   let a=  await axios.get(url + '/admins?id_user=' + JSON.parse(localStorage.getItem('id_user'))).
    //   then(res=>{if(res.status!=403)isLoggedIn=false

    // }
      
      
    //   );
     
        
  //  },Boolean)
    useEffect(async () => {
        const data = await axios.get(url + '/admins?query=view&id_user=' + JSON.parse(localStorage.getItem('id_user'))).then(res => res.data );
        setData(data);
        
    },[])
    useEffect(async () => {
        const data = await axios.get(url + '/admins?query=statistical&id_user=' +  JSON.parse(localStorage.getItem('id_user'))).then(res => res.data );
        setDataa(data);
    
    },[])
  
    // function direct(){

    //     console.log(isLoggedIn)
    //     if (isLoggedIn==true)
    //     history.push('/errorPage');

    // }
  

    return (

        <div className="bg-theme bg-theme1 body">
            <div id="wrapper">
     
                <MenuBar></MenuBar>
                <Header></Header>
                <div className="clearfix" />
                <div className="content-wrapper">
                    <div className="container-fluid">
                        <div className="card mt-3">
                            <div className="card-content">
                                <div className="row row-group m-0">
                                    <div className="col-12 col-lg-6 col-xl-3 border-light">
                                        <div className="card-body">
                                            <h5 className="text-white mb-0">9526 <span className="float-right"><i className="fa fa-shopping-cart" /></span></h5>
                                            <div className="progress my-3" style={{ height: 3 }}>
                                                <div className="progress-bar" style={{ width: '55%' }} />
                                            </div>
                                            <p className="mb-0 text-white small-font">Total Orders <span className="float-right">+4.2% <i className="zmdi zmdi-long-arrow-up" /></span></p>
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-6 col-xl-3 border-light">
                                        <div className="card-body">
                                            <h5 className="text-white mb-0">8323 <span className="float-right"><i className="fa fa-usd" /></span></h5>
                                            <div className="progress my-3" style={{ height: 3 }}>
                                                <div className="progress-bar" style={{ width: '55%' }} />
                                            </div>
                                            <p className="mb-0 text-white small-font">Total Revenue <span className="float-right">+1.2% <i className="fa fa-long-arrow-up" aria-hidden="true" /></span></p>
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-6 col-xl-3 border-light">
                                        <div className="card-body">
                                            <h5 className="text-white mb-0">6200 <span className="float-right"><i className="fa fa-eye" /></span></h5>
                                            <div className="progress my-3" style={{ height: 3 }}>
                                                <div className="progress-bar" style={{ width: '55%' }} />
                                            </div>
                                            <p className="mb-0 text-white small-font">Visitors <span className="float-right">+5.2% <i className="zmdi zmdi-long-arrow-up" /></span></p>
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-6 col-xl-3 border-light">
                                        <div className="card-body">
                                            <h5 className="text-white mb-0">5630 <span className="float-right"><i className="fa fa-envira" /></span></h5>
                                            <div className="progress my-3" style={{ height: 3 }}>
                                                <div className="progress-bar" style={{ width: '55%' }} />
                                            </div>
                                            <p className="mb-0 text-white small-font">Messages <span className="float-right">+2.2% <i className="zmdi zmdi-long-arrow-up" /></span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-lg-12">
                                <div className="card">
                                    <div className="card-header"> <h1>Payment
                                                <div className="card-action">
                                            <div className="dropdown">
                                                <a href="javascript:void();" className="dropdown-toggle dropdown-toggle-nocaret" data-toggle="dropdown">
                                                    <i className="icon-options" />
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a className="dropdown-item" href="javascript:void();">Action</a>
                                                    <a className="dropdown-item" href="javascript:void();">Another action</a>
                                                    <a className="dropdown-item" href="javascript:void();">Something else here</a>
                                                    <div className="dropdown-divider" />
                                                    <a className="dropdown-item" href="javascript:void();">Separated link</a>
                                                </div>
                                            </div>
                                        </div>
                                    </h1></div>
                                    <div className="table-responsive">

                                        <table className="table align-items-center table-flush table-borderless table-hover">
                                            <thead>
                                                <tr>
                                                    <th>ID</th>
                                                    <th>ID Provider</th>
                                                    <th>ID Request</th>
                                                    <th>Room ID</th>
                                                    <th>Hotel Name</th>
                                                    <th>Key</th>
                                                    <th>Total Cost </th>
                                                    <th>Create At </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {data2.length?'':<center> <h1> NO DATA TO DISPLAY </h1> </center>}
                                                {data2.map(element =>
                                                    <tr>
                                                        <td>{element.id}</td>
                                                        <td>{element.id_provider}</td>
                                                        <td>{element.id_request}</td>
                                                        <td>{element.room_id}</td>
                                                        <td>{element.hotel_name}</td>
                                                        <td>{element.key}</td>
                                                        <td>{element.cost}</td>
                                                        <td>{element.create_at}</td>

                                                    </tr>
                                                )
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-lg-12">
                                <div className="card">
                                    <div className="card-header"> <h1>History
                                                <div className="card-action">
                                            <div className="dropdown">
                                                <a href="javascript:void();" className="dropdown-toggle dropdown-toggle-nocaret" data-toggle="dropdown">
                                                    <i className="icon-options" />
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a className="dropdown-item" href="javascript:void();">Action</a>
                                                    <a className="dropdown-item" href="javascript:void();">Another action</a>
                                                    <a className="dropdown-item" href="javascript:void();">Something else here</a>
                                                    <div className="dropdown-divider" />
                                                    <a className="dropdown-item" href="javascript:void();">Separated link</a>
                                                </div>
                                            </div>
                                        </div>
                                    </h1></div>
                                    <div className="table-responsive">

                                        <table className="table align-items-center table-flush table-borderless table-hover">
                                            <thead>
                                                <tr>
                                                    <th>ID</th>
                                                    <th>ID Request</th>
                                                    <th>User ID</th>
                                                    <th>Room ID</th>
                                                    <th>Check In</th>
                                                    <th>Check Out </th>
                                                    <th>Create At </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            {data.length?'':<center> <h1> NO DATA TO DISPLAY </h1> </center>}
                                                {data.map(element =>
                                                    <tr>
                                                        <td>{element.id}</td>
                                                        <td>{element.id_request}</td>
                                                        <td>{element.user_id}</td>
                                                        <td>{element.room_id}</td>
                                                        <td>{element.checkin}</td>
                                                        <td>{element.checkout}</td>
                                                        <td>{element.create_at}</td>

                                                    </tr>
                                                )
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="overlay toggle-menu" />
                    </div>
                </div>
                <a href="javaScript:void();" className="back-to-top"><i className="fa fa-angle-double-up" /> </a>
            </div>


        </div>




    );
}



export default Index;