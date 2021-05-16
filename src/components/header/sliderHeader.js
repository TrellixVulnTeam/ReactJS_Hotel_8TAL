import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'
import './header.css';
class Header extends Component {
    render() {
        return (
            <div>

<Carousel>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src="images/home/slide1.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={100}>
            <img
              className="d-block w-100"
              src="images/home/slide2.jpg"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={10}>
            <img
              className="d-block w-100"
              src="images/home/slide2.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="images/home/slide3.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
        {/* end slide */}
        <div className="container">
          <form className="booking-form">
            <div className="arrive">
              <label htmlFor="arrive">Arrive</label>
              <input id="arrive" type="date" />
            </div>
            <div className="departure">
              <label htmlFor="departure">Departure</label>
              <input id="departure" type="date" />
            </div>
            <div className="select-book">
              <label>Person</label>
              <select name="book" id="person" className>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
              </select>
            </div>
            <div className="select-book">
              <label>Type room</label>
              <select name="book" className>
                <option value="luxury">Luxury</option>
                <option value="family">Family</option>
                <option value="couple">Couple </option>
                <option value="standard">Standard </option>
              </select>
            </div>
            <div className="submit-form">
              <input type="submit" defaultValue="Check Availability" />
            </div>
          </form>
        </div> 
            </div>
        );
    }
}


export default Header;