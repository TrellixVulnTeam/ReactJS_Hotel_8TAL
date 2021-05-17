
  
import React, { Component } from 'react';
import './style.scoped.css';
import './services.scoped.css';
import Header from './../../header/header'
import Footer from './../../footer/footer'
import Carousel from 'react-bootstrap/Carousel'
class Pool extends Component {
  render() {
    return (
      <div className="container-fluid" >
        <Header></Header>
        <div className="container">
          <main className="main ">
            <div className="slider-wrapper ">
              <div className="slider-panel-controller ">
              <Carousel>
               <Carousel.Item>
                    <img src="images/services/pool/hoboi.jpg " />
                    </Carousel.Item>
               <Carousel.Item>
                    <img src="images/services/pool/introduction1.jpg " />
                    </Carousel.Item>
               <Carousel.Item>
                    <img src="images/services/pool/pool1.jpg " />
                    </Carousel.Item>
               <Carousel.Item>
                    <img src="images/services/pool/pool2.jpg " />
                    </Carousel.Item>
               <Carousel.Item>
                    <img src="images/services/pool/pool3.jpg " />
                    </Carousel.Item>
               <Carousel.Item>
                    <img src="images/services/pool/pool4.jpg " />
                    </Carousel.Item>
               <Carousel.Item>
                    <img src="images/services/pool/pool5.jpg " />
                    </Carousel.Item>
</Carousel>
 
                {/* <Carousel>
               <Carousel.Item>
                    <img src="images/services/pool/hoboi.jpg " />
                    </Carousel.Item>
               <Carousel.Item>
                    <img src="images/services/pool/introduction1.jpg " />
                    </Carousel.Item>
               <Carousel.Item>
                    <img src="images/services/pool/pool1.jpg " />
                    </Carousel.Item>
               <Carousel.Item>
                    <img src="images/services/pool/pool2.jpg " />
                    </Carousel.Item>
               <Carousel.Item>
                    <img src="images/services/pool/pool3.jpg " />
                    </Carousel.Item>
               <Carousel.Item>
                    <img src="images/services/pool/pool4.jpg " />
                    </Carousel.Item>
               <Carousel.Item>
                    <img src="images/services/pool/pool5.jpg " />
                    </Carousel.Item>
</Carousel>
              */}
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