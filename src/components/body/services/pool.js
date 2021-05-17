import React, { Component } from 'react';
import './style.scoped.css';
import './services.scoped.css';
import Header from './../../header/header'
import Footer from './../../footer/footer'

class Pool extends Component {
  render() {
    return (
      <div className="container-fluid" >
        <Header></Header>
        <div className="container">
          <main className="main ">
            <div className="slider-wrapper ">
              <div className="slider-panel-controller ">
                <a href=" " className="slider-left-ctrl slider-ctrl " data-move="left "><i className="fa fa-chevron-right " /></a>
                <div className="slider-panel ">
                  <div className="slider-image ">
                    <img src="images/services/pool/hoboi.jpg " />
                  </div>
                  <div className="slider-image ">
                    <img src="images/services/pool/introduction1.jpg " />
                  </div>
                  <div className="slider-image ">
                    <img src="images/services/pool/pool1.jpg " />
                  </div>
                  <div className="slider-image ">
                    <img src="images/services/pool/pool2.jpg " />
                  </div>
                  <div className="slider-image ">
                    <img src="images/services/pool/pool3.jpg " />
                  </div>
                  <div className="slider-image ">
                    <img src="images/services/pool/pool4.jpg " />
                  </div>
                  <div className="slider-image ">
                    <img src="images/services/pool/pool5.jpg " />
                  </div>
                </div>
                <a href=" " className="slider-right-ctrl slider-ctrl " data-move="right "><i className="fa fa-chevron-right " /></a>
              </div>
            </div>
            <div className="slider-content col-5 ">
              <h3>POOL</h3>
              <div>
                <div>This is the most modern hot water swimming pool here, where visitors can both swim and enjoy the fresh natural air. You will be extremely cool, relaxed, if you are immersed in the blue and clear water watching the romantic sunset
                and the sunrise. All tiredness in the meeting or day of play will be relieved, relax and relax the body in the cool blue water.
              </div>
              </div>
            </div>
            </main>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default Pool;