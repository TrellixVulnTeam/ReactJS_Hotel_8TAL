import React, { Component } from 'react';
import Header from '../header/header'
// import Footer from '../../components/footer/footer';
class Homee extends Component {

  render() {
    return (
      <div>
        <div> <Header /> </div>
        <div className="container ">
          <center>
            <h1 style={{ fontFamily: 'Didot', color: '#CC6600' }}>WELCOME TO HKTQUEEN HOTEL</h1>
          </center><br />
          <div className="row infor_1 ">
            <div className="col-md-5 " style={{ fontSize: '22px', fontFamily: 'Optima', color: '#003300' }}>HKT Queen Hotel Đà Nẵng City is a world-class 5-star hotel, located at the intersection of four main districts, which is considered the heart and center of the city Đà Nẵng. It takes you only 35 minutes drive from the hotel to Đà Nẵng
            airport, 8 minutes to the commercial and entertainment center of the city. With 300 elegantly designed and elegant standard rooms and suites with attention to every detail, it will bring the utmost comfort and comfort to you whether
              it is a relaxing time or a business trip. </div>
            <div className="col-md-7 ">
              <div className="thumbnail">
                <img className="card-img-top " src="images/home/introduction1.jpg" alt="HKTQueen" />
              </div>
            </div>
          </div>
        </div>
        <p />
        <br />
        <hr />
        <div className="container ">
          <div className="row mt-5 ">
            <h2 className="list-product-title ">
              <center>
                <h1 style={{ fontFamily: 'Didot', color: '#CC6600' }}>ROOM</h1>
              </center>
            </h2>
          </div>
          <br />
        </div>
        {/* slide room */}
        <div className="container ">
          <div id="slider2" className="carousel slide mt-1 " data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row ">
                  <div className="col-md-3 col-sm-6 col-12">
                    <div className="card card-product mb-3 ">
                      <div className="thumbnail">
                        <img className="card-img-top " src="images/home/Presidential1.jpg" alt="HKTQueen" />
                      </div>
                      <div className="card-body ">
                        <h5 className="card-title ">Presidential Room</h5>
                        <p className="card-text ">Luxurious design, noble, comfortably.</p>
                        <center>
                          <a href="ViewDetailsPresidential.php" className="btn btn-primary ">View Details</a>
                        </center>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 col-12">
                    <div className="card card-product mb-3 ">
                      <div className="thumbnail">
                        <img className="card-img-top " src="images/home/Presidential1.jpg" alt="HKTQueen" />
                      </div>
                      <div className="card-body ">
                        <h5 className="card-title ">Deluxe Room</h5>
                        <p className="card-text ">The room is quite large, fully equipped and comfortable.</p>
                        <center>
                          <a href="ViewDetailsDeluxe.php" className="btn btn-primary ">View Details</a>
                        </center>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 col-12">
                    <div className="card card-product mb-3 ">
                      <div className="thumbnail">
                        <img className="card-img-top " src="images/home/Presidential1.jpg" alt="HKTQueen" />
                      </div>
                      <div className="card-body ">
                        <h5 className="card-title ">Superior Room</h5>
                        <p className="card-text ">Full device and comfort, balcony overlooking the pool.</p>
                        <center>
                          <a href="ViewDetailsSuperior.php" className="btn btn-primary ">View Details</a>
                        </center>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 col-12">
                    <div className="card card-product mb-3 ">
                      <div className="thumbnail">
                        <img className="card-img-top " src="images/home/Presidential1.jpg" alt="HKTQueen" />
                      </div>
                      <div className="card-body ">
                        <h5 className="card-title ">Standard Room</h5>
                        <p className="card-text ">Reasonable price, simple design, suitable.</p>
                        <center>
                          <a href="ViewDetailsStandard.php" className="btn btn-primary ">View Details</a>
                        </center>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item room2">
                <div className="row ">
                  <div className="col-md-3 col-sm-6 col-12">
                    <div className="card card-product mb-3 ">
                      <div className="thumbnail">
                        <img className="card-img-top " src="images/home/Presidential1.jpg" alt="HKTQueen" />
                      </div>
                      <div className="card-body ">
                        <h5 className="card-title ">Presidential Room</h5>
                        <p className="card-text ">Luxurious design, noble, comfortably.</p>
                        <center>
                          <a href="ViewDetailsPresidential.php" className="btn btn-primary ">View Details</a>
                        </center>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 col-12">
                    <div className="card card-product mb-3 ">
                      <div className="thumbnail">
                        <img className="card-img-top " src="images/home/Presidential1.jpg" alt="HKTQueen" />
                      </div>
                      <div className="card-body ">
                        <h5 className="card-title ">Deluxe Room</h5>
                        <p className="card-text ">The room is quite large, fully equipped and comfortable.</p>
                        <center>
                          <a href="ViewDetailsDeluxe.php" className="btn btn-primary ">View Details</a>
                        </center>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 col-12">
                    <div className="card card-product mb-3 ">
                      <div className="thumbnail">
                        <img className="card-img-top " src="images/home/Presidential1.jpg" alt="HKTQueen" />
                      </div>
                      <div className="card-body ">
                        <h5 className="card-title ">Superior Room</h5>
                        <p className="card-text ">Full device and comfort, balcony overlooking the pool.</p>
                        <center>
                          <a href="ViewDetailsSuperior.php" className="btn btn-primary ">View Details</a>
                        </center>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 col-12">
                    <div className="card card-product mb-3 ">
                      <div className="thumbnail">
                        <img className="card-img-top " src="images/home/Presidential1.jpg" alt="HKTQueen" />
                      </div>
                      <div className="card-body ">
                        <h5 className="card-title ">Standard Room</h5>
                        <p className="card-text ">Reasonable price, simple design, suitable.</p>
                        <center>
                          <a href="ViewDetailsStandard.php" className="btn btn-primary ">View Details</a>
                        </center>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a className="carousel-control-prev room2" href="#slider2" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon " aria-hidden="true " />
              <span className="sr-only ">Previous</span>
            </a>
            <a className="carousel-control-next room2" href="#slider2" role="button" data-slide="next">
              <span className="carousel-control-next-icon " aria-hidden="true " />
              <span className="sr-only ">Next</span>
            </a>
          </div>
        </div>
      </div>
     
    );
  }
}

export default Homee;