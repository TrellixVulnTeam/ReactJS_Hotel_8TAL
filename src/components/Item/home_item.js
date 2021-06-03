import React, { Component } from 'react';

class Item_home extends Component {

    render() {
        return (
                         
                <div className="col-md-3 col-sm-6 col-12">
                      <div className="card card-product mb-3 ">
                        <div className="thumbnail">
                          <img className="card-img-top " src={this.props.image} alt="HKTQueen" />
                        </div>
                        <div className="card-body ">
                          <h5 className="card-title ">{this.props.roomtype} Room</h5>
                          <strong > Price: <span className="card-text text-danger ">  {this.props.price} $   </span> </strong>
                          <p class="card-text text-success ">{this.props.des} </p>
                          <p class="card-text text-success ">There is free cancellation </p>
                          <center>
                            <a href="ViewDetailsPresidential.php" className="btn btn-primary ">View Details</a>
                          </center>
                        </div>
                      </div>
                    </div>

                  
                

        );
    }
}

export default Item_home;