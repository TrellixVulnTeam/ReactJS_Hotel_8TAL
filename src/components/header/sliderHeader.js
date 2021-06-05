import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'
import './header.scoped.css'
import axios from 'axios'
import url from './../../config'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  Redirect,useHistory, Link
} from 'react-router-dom'
class Header extends Component {

  constructor(props){
    super(props);
    this.state={
      arrive: this.current_datetime(),
      depart: '',
      person: ' ',
      price: ' ',
      redirect:false,
      local:'',
      location: []
    };

  }
  handleForm=(event)=>{
    event.preventDefault();
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value });
  }
  componentDidMount(){
    axios.get(url+'/locations')
    .then(res=>{
      this.setState({location:res.data});
    })
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
  search=()=>{
    this.setState({redirect:true})
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
              <label>Price</label>
              <select name="price" id="person" onChange={this.handleForm}  >
                <option value={0}>ALL</option>
                <option value={290}> {'>'} 0-290$  </option>    
                <option value={390}> {'>'} 290- 390$  </option>              
                <option value={490}> {'>'} 390$- 490$  </option>              
                <option value={590}> {'>'}  590$  </option>                     
              </select>
            </div>
            <div className="select-book" name="type" onChange={this.handleForm} >
              <label>Location </label>
              <select name="local" className>
              <option value="all">ALL</option> 
                  {this.state.location.map(element=>{
                    return  <option value={element.location}>{element.location}</option>
                  })}
              </select>
            </div>
            <div className="submit-form">
                      <Link to={`/location/${this.state.local}?query=search&location=${this.state.local}&price=${this.state.price}`} ><input type="submit" value="Search" onClick={this.search}/>     </Link> 

            </div>
          </form>
        </div> 
            </div>
        );
    }
}


export default Header;