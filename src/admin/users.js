import React, { Component } from 'react';
import './assets/css/animate.scoped.css'
import './assets/css/sidebar-menu.scoped.css'
import './assets/css/adminstyle.scoped.css'
import MenuBar from './menubar';
import Header from './header'
class users extends Component {
  render() {
    return (
      <div className="bg-theme bg-theme1">

        {/* Start wrapper*/}
        <div id="wrapper">
          {/*Start sidebar-wrapper*/}
          <MenuBar></MenuBar>
          <Header></Header>
          <div className="clearfix" />
          <div className="content-wrapper">
            <div className="container-fluid">
              <div className="row">
                <div className="col-12 col-lg-12">
                  <div className="card">
                    <h2>View Users</h2>
                    <div className="table-responsive">
                      <table className="table align-items-center table-flush table-borderless table-hover">
                        <thead>
                          <tr>
                            <th>User ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Code</th>
                            <th>Status</th>
                            <th>Role</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              {/*start overlay*/}
              <div className="overlay toggle-menu" />
              {/*end overlay*/}
            </div>
            {/* End container-fluid*/}
          </div>
          {/*End content-wrapper*/}
          {/*Start Back To Top Button*/}
          <a href="javaScript:void();" className="back-to-top"><i className="fa fa-angle-double-up" /> </a>
          {/*End Back To Top Button*/}
        </div>
        {/*End wrapper*/}
        {/* Bootstrap core JavaScript*/}
        {/* sidebar-menu js */}
        {/* Custom scripts */}

      </div>
    );
  }
}

export default users;