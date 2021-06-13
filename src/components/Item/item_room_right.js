
import React, { Component } from 'react';
import './room.scoped.css'
import { BrowserRouter,  Switch, Route, Link } from 'react-router-dom';

class Item1 extends Component {
    render() {
        return (
          <div>
            <div className="wrap-item clearfix">
                      <div className="col-xs-6 col-sm-5 col-md-5 col-lg-5 col-lg-push-7 col-md-push-7 col-sm-push-7 col-xs-push-6">
                        <div className="img1">
                          <img src={this.props.image1} alt="#" className="img-responsive"  object-fit="fill"/>
                          <div className="overlay" >Noroom: {this.props.noroom}</div>
                        </div>
                      </div>
                      <div className="col-xs-6 col-sm-7 col-md-7 col-lg-7 col-lg-pull-5 col-md-pull-5 col-sm-pull-5 col-xs-pull-6">
                        <div className="text-room-4 room-right">
                          <div className="text">
                            <h2 className="h2-rooms">{this.props.roomtype}</h2>
                            <div class="stars">
                            <form action="">
                              <input class="star star-5" id="star-5" type="radio" name="star"/>
                              <label class="star star-5" for="star-5"></label>
                              <input class="star star-4" id="star-4" type="radio" name="star"/>
                              <label class="star star-4" for="star-4"></label>
                              <input class="star star-3" id="star-3" type="radio" name="star"/>
                              <label class="star star-3" for="star-3"></label>
                              <input class="star star-2" id="star-2" type="radio" name="star"/>
                              <label class="star star-2" for="star-2"></label>
                              <input class="star star-1" id="star-1" type="radio" name="star"/>
                              <label class="star star-1" for="star-1"></label>
                            </form>
                            </div>
                            <h5 className="h5-room">{this.props.pri}</h5>
                            <p className="h2-rooms"> Hotel: {this.props.hotel }</p>
                            <p>{this.props.des}</p>
                            <a className="text-warning"><i class="fa fa-map-marker" aria-hidden="true"></i> {this.props.address} </a>
                            <br></br>
                            <Link to={`/detail/${this.props.id}`} className="view-dateails btn btn-room" >VIEW DETAILS</Link>
                            <div className="line" />
                          </div>
                          
                        </div>
                      </div>
                      
                    </div>
                    <hr></hr>
                    </div>
        );
    }
}
export default Item1; 