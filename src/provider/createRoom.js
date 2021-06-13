import React, { Component } from 'react';
import './assets/css/animate.scoped.css'
import './assets/css/sidebar-menu.scoped.css'
import './assets/css/adminstyle.scoped.css'
import axios from 'axios';
import { Link } from 'react-router-dom'
import MenuBar from './menubar';
import Header from './header'
import url from '../config'
import $, { event } from 'jquery';

const refreshPage = ()=>{
    window.location.reload();
 }
 const readURL =(event) =>{
    if (event.target.files && event.target.files[0]) {
        let img = event.target.files[0];
        this.setState({
          image: URL.createObjectURL(img)
        });
      }
    };
    

class CreateRoom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            room_id: 0,
            roomtype_id: '',
            noroom: '',
            img: '',
            status: '',
            phone: '',
            listRoomType:[]
        }
    }
    myhandleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({ [name]: value });
    }
    mySubmitHandler = (event) => {
    }

    componentDidMount() {
        if (this.props.match && this.props.match.params.id_room) {
           // const room_id = this.props.match.params.id_room
        // axios.get(url+`/rooms?room_id=${room_id}`).then(res => {
        //     this.setState({
        //         room_id: res.data.room_id,
        //         roomtype_id: res.data.roomtype_id,
        //         noroom: res.data.noroom,
        //         img: res.data.img,
        //         status: res.data.status,
        //         phone: res.data.phone,
        //         image: ''
        //     })
        //     console.log(res)
        // })
    }
   
    axios.get(url+`/providers?query=getIDRoomType&id_user=`+JSON.parse(localStorage.getItem('id_user'))).then(res => {
        this.setState({
           listRoomType:res.data
        })
        console.log(res)
    })
}

selectRoomType = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value });
}
    onSave = (room_id) => {
        let formData = new FormData();
        formData.append('query','createRoom');
        formData.append('id_user',JSON.parse(localStorage.getItem('id_user')));

        formData.append('roomtype_id',this.state.roomtype_id);
        formData.append('noroom', this.state.noroom);
        formData.append('img', this.state.img);
        formData.append('status', this.state.status);
        formData.append('phone', this.state.phone);
        let config = {
            headers: {
                "Content-Type": "application/json",
                 
        }

    }
    axios.post(url+`/providers`, formData, config).then(res => {
        
        alert(res.data.message);
        
        }).catch (function (error) {
    if (error.response) {
        console.log(error.response.headers);
    }
    
});

    }

render() {



    return (
        <div className=" body bg-theme bg-theme1">

            <div id="wrapper">
            <MenuBar></MenuBar>
            <Header></Header>
                {/*End topbar header*/}
                <div className="clearfix" />
                <div className="content-wrapper">
                    <div className="container-fluid">
                        <div className="card">
                            <div className="card-body">
                                <h2 className="text-body">Edit Room</h2>
                                <div className="container">

                                    <div className="form-group ">
                                        <label htmlFor="roomtype_id " className="text-body">Roomtype ID :</label>
                                        <select    className="form-control text-body"   name="roomtype_id" value={this.state.roomtype_id} onChange={this.selectRoomType}>
                                            <option>
                                            {this.state.listRoomType.length?'':'YOU ARE NOT HAVE ANY TYPE ROOM'}
                                            </option>
                                            {this.state.listRoomType.map(value=>
                                                   <option value={value.roomtype_id}> 
                                                            {value.roomtype_id}
                                                   </option>
                                            )
                                        }
                                        </select>
                                        
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="noroom " className="text-body">No room:</label>
                                        <input type="text" className="form-control text-body" name="noroom" value={this.state.noroom} onChange={(e) => this.setState({ noroom: e.target.value })} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="img " className="text-body">Img:</label>
                                        <input type="file" className="form-control text-body" name="img"  onChange={(e) => {this.setState({ img: "images/room/"+e.target.value.replace("C:\\fakepath\\", "")}) } } />
                                        <img id="blah"  src={`http://localhost:3000/`+this.state.img}  /> 
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="status " className="text-body" >Status:</label>
                                        <select name="status" value={this.state.value} onChange={this.myhandleChange}  className="form-control text-body" id required>
                                            <option value="available" className="text-body">Available</option>
                                            <option value="unavailable" className="text-body">Unavailable</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="phone text-body" className="text-body">Phone:</label>
                                        <input type="phone" className="form-control text-body" name="phone" value={this.state.phone} onChange={(e) => this.setState({ phone: e.target.value })} required />
                                    </div>
                                    <input type="submit" name="update" className="btn btn-primary" style={{ float: 'right' }} onClick= {()=>this.onSave(this.state.room_id)} />

                                </div>
                            </div>
                        </div>
                    </div></div></div></div>
    );
}
}


export default CreateRoom;