import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'
import './header.scoped.css'
class Header extends Component {

  constructor(props){
    super(props);
    this.state={
      arrive: this.current_datetime(),
      depart: '',
      person: ' ',
      type: ' '};

  }
  handleForm=(event)=>{
    event.preventDefault();
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value });
  }


  

  daysBetween=( ) =>{
    const one_day=1000*60*60*24;
    let date1_ms = new Date (this.state.arrive);
    var date2_ms = new Date( this.state.depart);  
    var difference_ms = date2_ms - date1_ms;
    return Math.round(difference_ms/one_day); 
  }
  current_datetime=()=>{
    let current_datetime = new Date();
    let month= (current_datetime.getMonth() + 1); 
    if(month<10) month="0"+month;
    let day= (current_datetime.getDate()); 
    if(day<10) day="0"+day;
    let formatted_date =  current_datetime.getFullYear() + "-" +month+ "-" + day;
    return formatted_date;
  }
  dateForDepart=()=>{
    let current_datetime = new Date();
    let month= (current_datetime.getMonth() + 1); 
    if(month<10) month="0"+month;
    let day= (current_datetime.getDate()+1); 

    if(day<10) day="0"+day;
    let formatted_date =  current_datetime.getFullYear() + "-" +month+ "-" +day;

    return formatted_date;
  }

    render() {
        return (
            <div >

    <Carousel id="slider1" className="mt-1">
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100 slider_1"
              src="images/home/slide1.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100 slider_1"
              src="images/home/slide2.jpg"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100 slider_1"
              src="images/home/slide2.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100 slider_1"
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
              <input id="arrive" name="arrive" type="date" min={this.current_datetime()} onChange={this.handleForm} />
            </div>
            <div className="departure">
              <label htmlFor="departure">Departure</label>
              <input id="departure" name="depart" type="date" min={this.dateForDepart()} onChange={this.handleForm} />
            </div>
            <div className="select-book">
              <label>Person</label>
              <select name="person" id="person" onChange={this.handleForm}  >
              <option value={1}>ALL</option>

                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
              </select>
            </div>
            <div className="select-book" name="type" onChange={this.handleForm} >
              <label>Type room</label>
              <select name="book" className>
              <option value="luxury">ALL</option>
                <option value="luxury">Luxury</option>
                <option value="family">Family</option>
                <option value="couple">Couple </option>
                <option value="standard">Standard </option>
              </select>
            </div>
            <div className="submit-form">
              <input type="submit" value="Search"  />
            </div>
          </form>
        </div> 
            </div>
        );
    }
}


export default Header;