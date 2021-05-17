import React, { Component } from 'react';
<<<<<<< HEAD
import '../../../css/bootstrap-select.min.css'
import '../../../css/services.css'
class Spa extends Component {
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
                  <img src="images/services/spa/Spa1.jpg" />
                </div>
                <div className="slider-image">
                  <img src="images/services/spa/Spa2.jpg" />
                </div>
                <div className="slider-image">
                  <img src="images/services/spa/Spa3.jpg" />
                </div>
              </div>
              <a href className="slider-right-ctrl slider-ctrl" data-move="right"><i className="fa fa-chevron-right" /></a>
            </div>
          </div>
          <div className="slider-content col-5">
            <h3>SPA</h3>
            <div>
              <p>Temporarily put aside the chaos of life to come to HKT Queen Hotel. A peaceful space imbued with a local cultural identity and a relaxing herb scent like embracing your body and awakening your mind. After a long day of visiting
                the faint mountain town, soaking in the pot of medicinal leaves typical of Red Dao ethnic people will definitely help you find the balance, dispel fatigue.</p>
            </div>
          </div>
        </main>
      </div>
            </div>
        );
    }
=======
import './style.scoped.css';
import './services.scoped.css';
import Header from './../../header/header'
import Footer from './../../footer/footer'

class Spa extends Component {
  render() {
    return (
      <div className="container-fluid" >
        <Header></Header>
        <div className="container">
          <main className="main">
            <div className="slider-wrapper">
              <div className="slider-panel-controller">
                <a href className="slider-left-ctrl slider-ctrl" data-move="left"><i className="fa fa-chevron-right" /></a>
                <div className="slider-panel">
                  <div className="slider-image">
                    <img src="images/services/spa/Spa1.jpg" />
                  </div>
                  <div className="slider-image">
                    <img src="images/services/spa/Spa2.jpg" />
                  </div>
                  <div className="slider-image">
                    <img src="images/services/spa/Spa3.jpg" />
                  </div>
                </div>
                <a href className="slider-right-ctrl slider-ctrl" data-move="right"><i className="fa fa-chevron-right" /></a>
              </div>
            </div>
            <div className="slider-content col-5">
              <h3>SPA</h3>
              <div>
                <p>Temporarily put aside the chaos of life to come to HKT Queen Hotel. A peaceful space imbued with a local cultural identity and a relaxing herb scent like embracing your body and awakening your mind. After a long day of visiting
                the faint mountain town, soaking in the pot of medicinal leaves typical of Red Dao ethnic people will definitely help you find the balance, dispel fatigue.</p>
              </div>
            </div>
          </main>
        </div>
        <Footer></Footer>
      </div>
    );
  }
>>>>>>> 1fa1202d31dddc98feae044c3cdd7224868e64a1
}

export default Spa;