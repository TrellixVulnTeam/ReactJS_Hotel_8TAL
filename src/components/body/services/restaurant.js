import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {

    };
}

class Restaurant extends Component {
    render() {
        return (
            <div>
                <div className="container">
        <main className="main">
          <div className="slider-wrapper">
            <div className="slider-panel-controller">
              <a href className="slider-left-ctrl slider-ctrl" data-move="left"><i className="fa fa-chevron-right" /></a>
              <div className="slider-panel">
                <div className="slider-image">
                  <img src="images/services/restaurant/restaurant1.jpg" />
                </div>
                <div className="slider-image">
                  <img src="images/services/restaurant/restaurant2.jpg" />
                </div>
                <div className="slider-image">
                  <img src="images/services/restaurant/restaurant3.jpg" />
                </div>
                <div className="slider-image">
                  <img src="images/services/restaurant/restaurant4.jpg" />
                </div>
                <div className="slider-image">
                  <img src="images/services/restaurant/restaurant5.jpg" />
                </div>
                <div className="slider-image">
                  <img src="images/services/restaurant/restaurant6.jpg" />
                </div>
                <div className="slider-image">
                  <img src="images/services/restaurant/restaurant7.jpg" />
                </div>
              </div>
              <a href className="slider-right-ctrl slider-ctrl" data-move="right"><i className="fa fa-chevron-right" /></a>
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
            </div>
        );
    }
}

export default Restaurant;