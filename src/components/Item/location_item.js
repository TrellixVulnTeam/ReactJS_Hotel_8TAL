import React, { Component } from 'react';
import './style.scoped.css'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ajaxTransport } from 'jquery';
import url from './../../config'

class location_item extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }
  componentDidMount = async () => {
      await axios.get(url + `/rooms?query=searchLocation&location=` + this.props.location)
      .then(res => { this.setState({ data: res.data }); });
  }
  render() {
    return (
      <div className={this.props.className}>
        <Link to={`/location/${this.props.location}`}>


          <div className="thumbnail card">
            <img className="card-img-top" src={this.state.data.image} alt="HKTQueen" />
            <div className="card-img-overlay card-body ">
              <h2 className="card-text text-danger"> {this.state.data.location}</h2>
              <p className="card-text text-warning" >{this.state.data.totalOfProperties} properties </p>
            </div>
            <div class="card-footer">
              <h4 className="card-title text-info "> Price from: {this.state.data.rentFrom} $  </h4>
              <h4 className="card-title text-info "> Price average: {this.state.data.average} $  </h4>
            </div>
          </div>
        </Link >
      </div>

    );
  }
}

export default location_item;