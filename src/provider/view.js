import React, { useEffect, useState } from 'react';

import './assets/css/animate.scoped.css'
import './assets/css/sidebar-menu.scoped.css'
import './assets/css/adminstyle.scoped.css'
import axios from 'axios';
import url from '../config'
import MenuBar from './menubar'
import Header from './header';
import Carousel from 'react-bootstrap/Carousel';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams,
    Link, useHistory, Redirect
} from 'react-router-dom';


const makeTextAction = (str) => {

    if (str == "success" || str == "expired")
        return "no action";
    if (str == "accept")
        return "cancel";
    if (str == "received")
        return "accept";
    if (str == "cancel")
        return "accept";
}

const makeBtnColor = (id,status ) => {


    let classBtn="";
    if (status == "success")
       classBtn="btn btn-success";
    if (status == "expired")
        classBtn=" btn btn-warning";
    if (status == "accept")
       classBtn=" btn btn-info";
    if (status == "cancel")
    classBtn=" btn btn-danger";
    if (status == "received")
        classBtn=" btn btn-primary";
    if (status == "no action")
        classBtn=" btn btn-dark";
    return <button className={classBtn} onClick={()=>{updateRequestStatus(id,status)}} name="updateRequest"> {status} </button>

}
const updateRequestStatus=(id,status)=>{

    if(window.confirm("BAN CO MUON TIEP TUC KHONG")){
        let formData = new FormData();
        formData.append('method', 'PUT');
        formData.append('id_request', id);
        formData.append('status',status);
        formData.append('query', 'updateRequestStatus');
        formData.append('id_user', JSON.parse(localStorage.getItem('id_user')));

        axios.post(url + '/providers', formData).
        then(res=>{
            alert(res.data.message) ;
           window.location.reload();
        })
      }
}
const makeTextColor = (str) => {

    if (str == "success")
        return < span className=" btn btn-success" >{str} </span>
    if (str == "expired")
        return <span className=" btn text-warning" > {str} </span>
    if (str == "accept")
        return <span className=" btn btn-info" > {str}</span>
    if (str == "cancel")
        return <span className=" btn btn-danger" > {str}</span>
    if (str == "received")
        return <span className=" btn btn-primary" >{str} </span>

}
const View = (props) => {
    let history = useHistory()
    const { id } = useParams();
    const [data, setData] = useState([]);
    // let isLoggedIn = useState(false);


 
    // useEffect(async () => {
    //     await axios.get(url + '/provider?id_user=' + JSON.parse(localStorage.getItem('id_user'))).then(res => {
    //         if (res.status == 403) isLoggedIn = true
    //     })
    // }, [])
    useEffect(async () => {
        const data = await axios.get(url + '/providers?query=view&id_user=' + JSON.parse(localStorage.getItem('id_user'))).then(res => res.data);
        setData(data);
    }, [])
    // if(isLoggedIn){
    //     console.log('Redirecting..')
    //     return <Redirect to='/errorPage' /> ; 
    // }
    
    return (
        <div>

            <div className="bg-theme bg-theme1">
                <div id="wrapper">
                    <MenuBar></MenuBar>
                    <Header></Header>
                    <div className="clearfix" />
                    <div className="content-wrapper">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-12 col-lg-12">
                                    <div className="card">
                                        <h2>View Booking</h2>
                                        <div className="table-responsive">
                                            <table className="table align-items-center table-flush table-borderless table-hover">
                                                <thead>
                                                    <tr>
                                                        <th>STT</th>
                                                        <th>Room_id</th>
                                                        <th>Status</th>
                                                        <th>Hotel_name</th>
                                                        <th>Checkin</th>
                                                        <th>Checkout</th>
                                                        <th>Roomtype</th>
                                                        <th>Rent</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {data.length?'':<h1>NODATA TO DISPLAY</h1>}
                                                    {data.map((element, index) => {
                                                        return (<tr>
                                                            <td>{index+1}</td>
                                                            <td>{element.room_id}</td>
                                                            <td>{makeTextColor(element.status)}</td>
                                                            <td>{element.hotel_name}</td>
                                                            <td>{element.checkin}</td>
                                                            <td>{element.checkout}</td>
                                                            <td>{element.roomtype}</td>
                                                            <td>{element.rent}</td>
                                                            <td>
                                                                {makeBtnColor(element.id_request,makeTextAction(element.status))}
                                                            </td>
                                                        </tr>)
                                                    })}

                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    );
}


export default View;