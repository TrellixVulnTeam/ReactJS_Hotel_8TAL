import React, { Component } from 'react'
import '../css/Contact.css';
class Contact extends Component {
    constructor(props){
        super(props);
        this.state={
            name:'',
            email:'',
            subject:'',
            message:'',  

        }
    }

    myhandleChange =(event)=>{
        let name = event.target.name;
        let value = event.target.value;
        this.setState({[name]:value});
   }
   mySubmitHandler =(event)=>{
       event.preventDefault();    
   }

    render() {
        return (

            <div className="bgr_contact">
            <div className="container"style={{backgroundSize: '0vmax', color: 'Black',marginTop :'50px',height:'400px',width:'1000px'}}>
            <div className="contact">
                <div className="row">
                <div className="col-md-6 col-lg-5">
                    <div className="text">
                    <h2>Contact</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
                        make a type specimen book. It has survived not only five centuries.</p>
                    <ul>
                        <li><i className=" fa fa fa-location-arrow"/>  <a href="https://www.google.com/maps/place/99+T%C3%B4+Hi%E1%BA%BFn+Th%C3%A0nh,+Ph%C6%B0%E1%BB%9Bc+M%E1%BB%B9,+S%C6%A1n+Tr%C3%A0,+%C4%90%C3%A0+N%E1%BA%B5ng+550000,+Vi%E1%BB%87t+Nam/@16.059758,108.2414633,17z/data=!3m1!4b1!4m5!3m4!1s0x3142177f2ced6d8b:0xeac35f2960ca74a4!8m2!3d16.0597966!4d108.2434978?hl=vi-VN">        99 To Hien Thanh, Da Nang, Vietnam</a></li>
                        <li><i className="fa fa-phone" aria-hidden="true"/>  <a href="#">        (+84) 337 965 469</a></li>
                        <li><i className="fa fa-envelope-o" aria-hidden="true"/><a href="#">     hktqueen@gmail.vn</a></li>
                    </ul>
                    </div>
                </div>
                <div className="col-md-6 col-lg-6 col-lg-offset-1">
                    <div className="contact-form">
                    <form action="send_mail_contact.php" method="post">
                        <div className="row">
                                <div className="col-sm-6">
                                    <input type="text" className="field-text" name="name" placeholder="Name" value={this.state.name} onChange={this.myhandleChange} />
                                </div>
                                <div className="col-sm-6">
                                    <input type="text" className="field-text" name="email" placeholder="Email" value={this.state.email} onChange={this.myhandleChange} />
                                </div>
                                <div className="col-sm-12">
                                    <input type="text"className="field-text" name="subject" placeholder="Subject" size="62" value={this.state.subject} onChange={this.myhandleChange} />
                                </div>
                                <div className="col-sm-12">
                                    <textarea cols={65} rows={7} name="message" className="field-textarea" placeholder="Write what do you want" defaultValue={""} value={this.state.message} onChange={this.myhandleChange}  />
                                </div>
                                <div className="col-sm-6">
                                    <button type="button" className="btn btn-room">SEND</button>
                                </div>
                        </div>
                    </form>
                    </div>
                </div>
                </div>
            </div>
            </div>
                            
           </div>
              );
    }
}
export default Contact;

