import React, { Component } from 'react';
import './assets/css/animate.scoped.css'
import './assets/css/sidebar-menu.scoped.css'
import './assets/css/adminstyle.scoped.css'
import {Link} from 'react-router-dom';
import axios from 'axios';
import MenuBar from './menubar';
import Header from './header'
import url from '../config'

class edit extends Component {

    render() {
        return (
            <div id="wrapper">
            {/*Start sidebar-wrapper*/}
         <MenuBar></MenuBar>
         <Header></Header>
            <div className="clearfix" />
            <div className="content-wrapper">
              <div className="container-fluid">
                <div className="card">
                  <div className="card-body">
                    <h2>Edit Room</h2>
                    <div className="container">
                      <form action method="POST" encType="multipart/form-data">
                        {/* <div class="form-group">
                        <label for="roomtype_id">Roomtype ID :</label>
                        <input type="text" class="form-control" name="roomtype_id" value="<?php echo $room['roomtype_id']; ?>" required="">
                      </div> */}
                        <div className="form-group">
                          <label htmlFor="roomtype_id">Roomtype ID :</label>
                          {/* <input type="text" class="form-control" name="roomtype_id" placeholder="Enter roomtype_id " required=""> */}
                          <select name="roomtype_id" className="form-control" id required>
                            {/*?php $result = $roomObj-*/}con-&gt;query("select roomtype_id,roomtype  from roomtypes");
                            while ($row = $result-&gt;fetch_assoc()) {'{'}
                            ?&gt;
                            <option value="<?php echo $row['roomtype_id'] ?>">{/*?php echo $row['roomtype'] ?*/}</option>
                            {/*?php }?*/}
                          </select>
                        </div>
                        <div className="form-group">
                          <label htmlFor="noroom">No room:</label>
                          <input type="noroom" className="form-control" name="noroom" defaultValue="<?php echo $room['noroom']; ?>" required />
                        </div>
                        <div className="form-group">
                          <label htmlFor="img">Img:</label>
                          <input type="file" className="form-control" name="img" defaultValue="<?php echo $room['img']; ?> " />
                        </div>
                        <div className="form-group">
                          <label htmlFor="status">Status:</label>
                          <select name="status" className="form-control" id required>
                            <option value="available">Available</option>
                            <option value="unavailable">Unavailable</option>
                          </select>
                        </div>
                        <div className="form-group">
                          <label htmlFor="phone">Phone:</label>
                          <input type="phone" className="form-control" name="phone" defaultValue="<?php echo $room['phone']; ?>" required />
                        </div>
                        <input type="submit" name="update" className="btn btn-primary" style={{float: 'right'}} defaultValue="Submit" />
                      </form>
                    </div>
                  </div>
                </div>
                {/*End content-wrapper*/}
                {/*Start Back To Top Button*/}
                <a href="javaScript:void();" className="back-to-top"><i className="fa fa-angle-double-up" /> </a>
                {/*End Back To Top Button*/}
              </div>
            </div></div>
        );
    }
}

export default edit;