import React, { Component } from 'react';
import './assets/css/animate.scoped.css'
import './assets/css/sidebar-menu.scoped.css'
import './assets/css/adminstyle.scoped.css'
import axios from 'axios';
import { Link } from 'react-router-dom'
import MenuBar from './menubar';
import Header from './header'
import url from '../config'


class CheckKey extends Component {
    constructor(props) {
        super(props);
        this.state = {
            key: '',
            
        }
    }
    myhandleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({ [name]: value });
    }
  
    componentDidMount() {
        //if (this.props.match && this.props.match.params.id_room) {
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
    //}
   
  
}

    onSave = () => {
    
    
    axios.get(url+`/providers?query=checkInKey&key=${this.state.key}&id_user=${JSON.parse(localStorage.getItem('id_user'))}`).then(res => {
        
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
                
                <div className="clearfix" />
                <div className="content-wrapper">
                    <div className="container-fluid">
                        <div className="card">
                            <div className="card-body">
                                <h2 className="text-body">CHECK KEY:</h2>
                                <div className="container">

                                 
                                
                                    <div className="form-group">
                                        <label htmlFor="phone text-body" className="text-body">ENTER KEY:</label>
                                        <input type="phone" className="form-control text-body" name="key" value={this.state.phone} onChange={this.myhandleChange} required  myhandleChange />

                                    </div>
                                    <center > <input type="submit" name="update" className="btn btn-primary" style={{ float: 'right' }} onClick= {this.onSave} value="Check" /></center>

                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    </div>
                    </div>
    );
}
}


export default CheckKey;