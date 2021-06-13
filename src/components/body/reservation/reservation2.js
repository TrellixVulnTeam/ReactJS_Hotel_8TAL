import React, { Component } from 'react';
import './styles.scoped.css'
import Footer from './../../footer/footer'
import Header from './../../header/header'
import axios from 'axios'
import url from '../../../config'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
class reservation2 extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
      phone: '',
      arrive: '',
      depart: '',
      numbPerson: '',
      roomType: '',
      information: [],
      name:'',
      email:'',
      phone:'',
    
    }
  }

  componentDidMount() {
    if (localStorage.getItem("infor") !== null) {
      this.setState(() => ({
        information: JSON.parse(localStorage.getItem("infor"))
      }))
    }
    axios.get(url + "/users?user_id="+JSON.parse(localStorage.getItem('id_user'))).then(res => {
      this.setState({ name: res.data.name, email: res.data.email,phone:res.data.phone});
    })
    if (localStorage.getItem("users") !== null) {
      this.setState(() => ({
        user: JSON.parse(localStorage.getItem("user"))
      }))
    }
    
  }

  myhandleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value });
   
  }
  addBasket= async ()=>{
    let formdata= new FormData();
    formdata.append('id_user',JSON.parse(localStorage.getItem('id_user')))
    formdata.append('room_id',JSON.parse(localStorage.getItem('room_id')))
    formdata.append('checkout',JSON.parse(localStorage.getItem('checkout')))
    formdata.append('checkin',JSON.parse(localStorage.getItem('checkin')));
      formdata.append('query','addToBasket')
     await axios.post(url + "/baskets",formdata)
  }
//    <h4>{this.state.information.map((infor) =>
//     this.state.users.map((user) =>
//  }
// </h4>
    
  //   let temp=[];
  //   if (localStorage.getItem("infor")!== null) {
  //     temp.push(JSON.parse(localStorage.getItem("infor")))
  //   }
  //   if (localStorage.getItem("user")!== null) {
  //     temp.push(JSON.parse(localStorage.getItem("user")))
  //    }
  //   // this.setState({infor:temp});
  //    this.setState({information:temp},()=>{
  //      console.log(this.state.information)
  //    });
    
  //   // this.setState({users:temp},()=>{
  //   //   console.log(this.state.user[1])
  //   // });
  //  }
    // Lấy ra dữ liệu từ 2 keyInffor và users 
    // {JSON.parse(localStorage.getItem("user"))[0]}


    
      
       
  render() {
    return (
      <div>
        <div className="container-fluid"> 
          <Header></Header>
          <div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 offset-xl-2">
                        <center> <h1>CONFIRM YOUR INFORMATION</h1>
                        </center>
                        <p className="lead">This is the final confirmation of the information we will book for you. This part, after successful you will have a key. Take and hold this key and go to the hotel.</p>
                            <div className="messages" />
                            <div className="controls">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label htmlFor="form_name">Firstname  *</label>
                                            <input id="form_name" type="text" value={ this.state.name}  onChange={this.myhandleChange} name="name" className="form-control" placeholder="Please enter your firstname *" required="required" data-error="Firstname is required." />
                                            <div className="help-block with-errors" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label htmlFor="form_lastname">Lastname   *</label>
                                            <input id="form_lastname" type="text" value={this.state.name} onChange={this.myhandleChange}  name="surname" className="form-control" placeholder="Please enter your lastname *" required="required" data-error="Lastname is required." />
                                            <div className="help-block with-errors" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label htmlFor="form_email">Email  *</label>
                                            <input id="form_email" type="email"  value={this.state.email} onChange={this.myhandleChange}  name="email" className="form-control" placeholder="Please enter your email *" required="required" data-error="Valid email is required." />
                                            <div className="help-block with-errors" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label htmlFor="form_phone">Phone</label>
                                            <input id="form_phone" type="tel" value={this.state.phone}name="phone" className="form-control" placeholder="Please enter your phone" />
                                            <div className="help-block with-errors" />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="form_message">Message *</label>
                                    <textarea id="form_message" name="des" className="form-control"  onChange={this.myhandleChange}  placeholder="Message for me *" rows={4} required="required" data-error="Please, leave us a message." defaultValue={""} />
                                    <div className="help-block with-errors" />
                                </div>
                                <div className="form-group">
                                    <div className="g-recaptcha" data-sitekey="6LfNqxUbAAAAADRr0rDxNX73f06Dbq4gJQa8CdqU" data-callback="verifyRecaptchaCallback" data-expired-callback="expiredRecaptchaCallback" />
                                    <input className="form-control d-none" data-recaptcha="true" required data-error="Please complete the Captcha" />
                                    <div className="help-block with-errors" />
                                </div>
                            
                                <Link to='/basket' >   <button className="btn btn-warning" onClick={this.addBasket}> Continue</button> </Link>
                                <p className="text-muted">

                        </p>


                            </div>
                    </div>
                </div>
            </div>

        </div>
        <Footer></Footer>
      </div>
      </div>
    );
  }
}

export default reservation2;