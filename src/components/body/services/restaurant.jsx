import React, { Component } from 'react';
import './style.scoped.css';
import './services.scoped.css';
import Header from  './../../header/header'
import Footer from './../../footer/footer'
import Carousel from 'react-bootstrap/Carousel'
class Restaurant extends Component {
  render() {
    return (
      <div className="container-fluid"> 
      <Header> </Header>
      
      <div className="container">
        <main className="main">
          <div className="slider-wrapper">
            <div className="slider-panel-controller">
              <Carousel>
               <Carousel.Item>
                  <img src="images\services\restaurant\restaurant1.jpg" />
                  </Carousel.Item>
               <Carousel.Item>
                  <img src="images/services/restaurant/restaurant2.jpg" />
                  </Carousel.Item>
               <Carousel.Item>
                  <img src="images/services/restaurant/restaurant3.jpg" />
                  </Carousel.Item>
               <Carousel.Item>
                  <img src="images/services/restaurant/restaurant4.jpg" />
                  </Carousel.Item>
               <Carousel.Item>
                  <img src="images/services/restaurant/restaurant5.jpg" />
                  </Carousel.Item>
               <Carousel.Item>
                  <img src="images/services/restaurant/restaurant6.jpg" />
                  </Carousel.Item>
               <Carousel.Item>
                  <img src="images/services/restaurant/restaurant7.jpg" />
                  <img src="images/services/spa/Spa3.jpg" />
                    </Carousel.Item>
</Carousel>
            </div>
          </div>
          <div className="slider-content col-6">
            <h3>RESTAURANT</h3>
            <div>
              <div>HKT Queen Hotel will bring you a truly unforgettable Vietnamese culinary experience, while enjoying the culinary delights and the beauty of nature and the fresh atmosphere typical of the tropics. From simple to delicate, the dishes
                decorated with eyes and eyes stimulate your taste.</div> <br />
              <div>Vietnamese cuisine is famous for its frugal but still retains its flair. Not only that, dishes can surprise you with special combinations of ingredients. Representing that delicate combination must mention traditional Vietnamese
              dishes. Thanks to being located in a tropical climate, richly developed vegetation has provided Vietnamese cuisine with a choice of healthy herbs rich in health. Besides, the unique old cooking methods passed down from previous
                generations also contribute to the flavor of each dish.</div>
            </div>
          </div>
        </main>
      </div>
      <Footer></Footer>
      </div>
    );
  }
}

export default Restaurant;