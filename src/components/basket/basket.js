import './basket.scoped.css'
import 'bootstrap/dist/css/bootstrap.css';
import Footer from './../footer/footer'
import Header from './../header/header'
import url from '../../config'
import axios from 'axios'

import React, { Component, useEffect, useState } from 'react';
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
const remove = (id) => {
  if(window.confirm("BAN CO MUON XOA KHOI GIO HANG KHONG")){
    let formData = new FormData();
    formData.append('method', 'DELETE');
    formData.append('basket_id', id);
    

    axios.post(url + '/baskets', formData).
    then(window.location.reload())
  }

}
const Basket = () => {
    const { local } = useParams();
    const query = useQuery();
    const [data, setData] = useState([]);
    const [room, setRoom] = useState([]);

    useEffect(async () => {
        let aa = await axios.get(url + '/baskets?user_id=' + JSON.parse(localStorage.getItem('id_user'))).then(res => res.data);
        console.log(aa);
        setData(aa);
    }, []);
    //   useEffect( async ()=>{
    //     let aa   =  await axios.get(url +'/baskets?user_id='+JSON.parse(localStorage.getItem('id_user'))) .then(res=> res.data);
    //     console.log(aa);
    //       setData(aa);
    //     },[]);
    return (
        <div>
            <Header></Header>

            <div className=" px-4 py-5 mx-auto">

                <table className=" table ">
                    <thead>
                        <tr>
                            <th >Booking rooms</th>
                            <th >No Room</th>
                            <th >Price</th>
                            <th >Checkin</th>
                            <th >Checout</th>
                            <th >Hotel</th>
                            <th >Status</th>
                            <th >Key</th>
                            <th >Detail</th>
                            <th> Remove </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(value => {
                            return (
                                <tr>
                                    <th><img src={value.image} /></th>
                                    <td>{value.noroom}</td>
                                    <td>{value.rent} $</td>
                                    <td>{value.checkin}</td>
                                    <td>{value.checkout}</td>
                                    <td>{value.hotel_name}</td>
                                    <td>{value.status}</td>
                                    <td>{value.key}</td>
                                    <td> <Link className="btn btn-success" to={`detail/${value.room_id}`} > Detail</Link></td>
                                    <td> <button className="btn btn-danger " onClick ={()=>remove(value.basket_id)}> remove </button> </td>

                                </tr>
                            )
                        })}
                    </tbody>
                </table>
               

            </div>
            <Footer></Footer>
        </div>

    );
}



export default Basket;