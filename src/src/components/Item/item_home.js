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
                          <p className="card-text ">{this.props.des}</p>
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