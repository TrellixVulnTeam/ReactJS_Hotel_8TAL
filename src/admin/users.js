import React, { Component } from 'react';
import './assets/css/animate.scoped.css'
import './assets/css/sidebar-menu.scoped.css'
import './assets/css/adminstyle.scoped.css'
import axios from 'axios'
import MenuBar from './menubar';
import Header from './header'
import url from '../config'
class users extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] }
  }

  componentDidMount() {
    axios.get(url+"/users").then(res => {
      // axios.get(" http://localhost/quynhreactjs/ReactJS_Hotel/src/DB/api/controller.php/rooms").then(res => {
      this.setState({ data: res.data })

    })
  }
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
                            <th>User_id </th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>Code</th>
                            <th>status</th>
                            <th>Role</th>
                          </tr>
                        </thead>
                        <tbody>
                          {this.state.data.map(element => {
                            return (<tr>
                              <td>{element.user_id}</td>
                              <td>{element.name}</td>
                              <td>{element.email}</td>
                              <td>{element.password}</td>
                              <td>{element.code}</td>
                              <td>{element.status}</td>
                              <td>{element.role}</td>
                              <td><div style={{ display: 'flex'}} width="100px" hover>
                                <button>
                                  <i class="fa fa-pencil" aria-hidden="true"></i>
                                </button>
                                <form action="" method="post">
                                  <button name="deletebooking"  style={{color:'red'}}>
                                    <i class="fa fa-trash" aria-hidden="true"></i>
                                  </button>
                                </form>
                              </div>
                              </td>
                            </tr>)
                          })}
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