import React, { Component } from 'react';
import '../../css/style.css';
import 'bootstrap/dist/css/bootstrap.css'
class Footer extends Component {
  render() {
    return (
      <div style={{backgroundSize: '0vmax', backgroundColor: '#232323', color: '#FFFFFF',margin :'20px 20px 20px 20px'}} className="footer">
          <div className="container">
            <div className="row2">
              <div className="col-5">
                <p>
                </p><h5>CONTACT</h5>
                <p />
                <hr />
                <p>
                  Hotline:
                  <a href="# "> 0396 567 451 </a>
                </p>
                <p>
                  Email:
                  <a href="# "> hktqueenhotel@gmail.com </a>
                </p>
                <p>
                  Address:
                  <a href="https://www.google.com/maps/place/99+T%C3%B4+Hi%E1%BA%BFn+Th%C3%A0nh,+Ph%C6%B0%E1%BB%9Bc+M%E1%BB%B9,+S%C6%A1n+Tr%C3%A0,+%C4%90%C3%A0+N%E1%BA%B5ng+550000,+Vi%E1%BB%87t+Nam/@16.059758,108.2414633,17z/data=!3m1!4b1!4m5!3m4!1s0x3142177f2ced6d8b:0xeac35f2960ca74a4!8m2!3d16.0597966!4d108.2434978?hl=vi-VN">  99 To Hien Thanh, Da Nang, Vietnam</a>
                </p>
                <p>
                  <a href="https://www.facebook.com/"> <i className="fa fa-facebook-f" /></a>
                  <a href="https://twitter.com/"> <i className="fa fa-twitter-square" /></a>
                  <a href="https://google.com/"> <i className="fa fa-google-plus" /></a>
                  <a href="https://instagram.com/"> <i className="fa fa-instagram" /></a>
                </p>
              </div>
              <div className="col-2">
                <p>
                </p><h5> SUPPORT </h5>
                <p />
                <hr />
                <p>
                  <a href="#"> Support </a>
                </p>
                <p>
                  <a href="#"> Contribute </a>
                </p>
              </div>
              <div className="col-5">
                <p>
                </p><h5> FOLLOW US </h5>
                <p />
                <hr />
                <p>
                  Enter email to subscribe to receive useful information about learning from HKT Queen Hotel
                </p>
                <input type="email" name id=" " placeholder="Your email... " className="form-control " />
                <br />
                <button type="button" className="btn btn-secondary ">Registation</button>
              </div>
            </div>
          </div>
        </div>
      );
  }
}

export default Footer;


