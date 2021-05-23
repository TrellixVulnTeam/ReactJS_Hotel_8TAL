
import React, { Component } from 'react';
import './room.scoped.css'
import { BrowserRouter,  Switch, Route } from 'react-router-dom';

class Item extends Component {
    render() {
        return (
            <div className="wrap-item clearfix">
                      <div className="col-xs-6 col-sm-5 col-md-5 col-lg-5">
                        <div className="img">
                          <img src={this.props.image1} alt="#" className="img-responsive" />
                        </div>
                      </div>
                      <div className="col-xs-6 col-sm-7 col-md-7 col-lg-7">
                        <div className="text-room-4">
                          <div className="text">
                            <h2 className="h2-rooms">{this.props.roomtype}</h2>
                            <h5 className="h5-room">{this.props.pri}</h5>
                            <p>{this.props.des}</p>
                            <a href="room-detail.php" className="view-dateails btn btn-room" >VIEW DETAILS</a>
                            <div className="line" />
                          </div>
                          <div className="img1">
                            <a href="room-detail.php"><img src={this.props.image2} alt="#" className="img-responsive" /></a>
                          </div>
                        </div>
                      </div>
                    </div>
        );
    }
}
export default Item; 