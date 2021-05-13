import React, { Component } from 'react';
import '../../css/about.css'
import '../../css/style.css'

class About extends Component { 
    render() {
        return (

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-7">
          
            <img className="card-img-top " src="images/home/introduction1.jpg" />
          </div>
          <div className="col-md-5" style={{color: 'white'}}>
            <center>
              <h2>ABOUT US</h2>
            </center>
            <div>
              <p>Coming to our hotel, you will have a great experience. There are many types of rooms to suit each customer's requirements. Parallel to the reservation service, other services are also no less. You can drink coffee, go to the
                bar, the swimming pool. Not only that, around our hotel are the tourist areas, commercial centers and entertainment areas.</p>
              <p>We welcome you with a heart of hospitality. Come to HKT Queen and experience the great feelings that we bring. </p>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className="row ">
          <div className="col-md-5 " style={{color: 'white'}}>
            <center>
              <h2 style={{fontFamily: 'Optima', color: 'white'}}>WHY GUEST CHOOSE HKT QUEEN HOTEL?</h2>
            </center>
            <div>
              <p>When it comes to the reasons for choosing our hotel, there are countless reasons. We will provide you with a comfortable and professional space. The rooms facing a large space, equipment with modern technology will serve you
                in the most optimal way.</p>
              <p>Not only that, we also provide high-class services, beautiful and delicious meals, and a large play space. Please come and experience!</p>
            </div>
          </div>
          <div className="col-md-7 col7">
            <div className='card'>
              <div className="card">
                <img className="card-img-top " src="images/About/about us1.jfif " />
              </div>
              <div className="card">
                <img className="card-img-top " src="images/About/about us2.jpg " />
              </div>
            </div>
            <div className="anh">
              <div className='card'>
                <img className="card-img-top " src="images/About/about us3.jpg " />
              </div>
              <div className='card'>
                <img className="card-img-top " src="images/About/about us4.jpg " />
              </div>
            </div>
          </div>
        </div>
      </div>
      
    
 
        );
    }
}

export default About;