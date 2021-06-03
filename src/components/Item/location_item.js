import React, { Component } from 'react';
import './style.scoped.css'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ajaxTransport } from 'jquery';
import url from './../../config'

class location_item extends Component {
    constructor(props) {
        super(props);
        this.state = { data:[]};
      }
      componentDidMount = async () => {
        await axios.get(url+'/rooms?query=searchLocation&location='+this.props.location)
        .then(res => {this.setState({data:res.data});});  
      }
    render() {
        return (            
            <div className={this.props.className}>
            <Link>
              <div className="thumbnail"   >
                <img className="card-img-bottom" src={this.state.data.image}  alt="HKTQueen"  />
              </div>
              </Link >
            </div>
           
        );
    }
}

export default location_item;