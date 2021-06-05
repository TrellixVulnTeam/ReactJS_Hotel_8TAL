import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class Item_home extends Component {

  constructor(props){
    super(props)
  }
    render() {
        return (
                         
                <div className="col-md-3 col-sm-6 col-12">
                      <div className="card card-product mb-3 ">
                        <div className="thumbnail">
                          <img className="card-img-top"  style={{height:'250px'}}src={this.props.image} alt="HKTQueen" />
                        </div>
                        <div className="card-body ">
                          <h5 className="card-title ">{this.props.roomtype} Room</h5>
                          <strong > Price: <span className="card-text text-danger ">  {this.props.price} $   </span> </strong>
                          <p class="card-text text-success ">{this.props.des} </p>
                          <p class="card-text text-success ">There is free cancellation </p>
                          <center>
                          <Link to={`/detail/${this.props.id}`} className="view-dateails btn btn-primary" >View Details</Link>
                          </center>
                        </div>
                      </div>
                    </div>

                  
                

        );
    }
}

export default Item_home;