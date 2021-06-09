import React, { Component } from 'react';
import './basket.css'
import 'bootstrap/dist/css/bootstrap.css';
import Footer from './../../footer/footer'
import Header from './../../header/header'

class Basket extends Component {
    render() {
    
        return (
            <div>
                <Header></Header> 
            <div className="container px-4 py-5 mx-auto">  
              
                <div className="row d-flex justify-content-center">
                 
                    <div className="col-5">
                        <h4 className="heading">Booking rooms</h4>
                    </div>
                    <div className="col-7">
                        <div className="row text-right">
                            <div className="col-2">
                                <h6 className="mt-2">TypeRoom</h6>
                            </div>
                            <div className="col-2">
                                <h6 className="mt-2">Room</h6>
                            </div>
                            <div className="col-2">
                                <h6 className="mt-2">Price</h6>
                            </div>

                            <div className="col-2">
                                <h6 className="mt-2">Status</h6>
                            </div>

                            <div className="col-2">
                                <h6 className="mt-2">Location</h6>
                            </div>

                            <div className="col-2">
                                <h6 className="mt-2"></h6>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row d-flex justify-content-center border-top">
                    <div className="col-5">
                        <div className="row d-flex">
                            <div className="book"> <img src="https://luxuo.vn/wp-content/uploads/2020/12/FrvEZNw.jpeg" className="book-img" /> </div>
                            <div className="my-auto flex-column d-flex pad-left">
                                <h6 className="mob-text">Thinking, Fast and Slow</h6>
                            </div>
                        </div>
                    </div>
                    <div className="my-auto col-7">
                        <div className="row text-right">
                            <div className="col-2">
                                <p className="mob-text">Lucxury</p>
                            </div>

                            <div className="col-2">
                                <div className="row d-flex justify-content-end px-3">
                                    <p className="mb-0" id="cnt1">501</p>   
                                    <div className="d-flex flex-column plus-minus"> <span className="vsm-text plus">+</span> <span className="vsm-text minus">-</span> </div>
                                </div>
                            </div>
                            <div className="col-2">
                                <h6 className="mob-text">$9.99</h6>
                            </div>

                            <div className="col-2">
                                <p className="mob-text">Còn phòng</p>
                            </div>

                            <div className="col-2">
                                <p className="mob-text">Hà Nội</p>
                            </div>

                            <div className="col-2">
                                <p className="mob-text"></p>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="row d-flex justify-content-center border-top">
                    <div className="col-5">
                        <div className="row d-flex">
                            <div className="book"> <img src="https://vcdn1-dulich.vnecdn.net/2020/01/22/1-danang-1579664506.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=Z9jw_XQg2_VO59Unbl-TtQ" className="book-img" /> </div>
                            <div className="my-auto flex-column d-flex pad-left">
                                <h6 className="mob-text">Homo Deus: A Brief<br /></h6>
                            </div>
                        </div>
                    </div>
                    <div className="my-auto col-7">
                        <div className="row text-right">
                            <div className="col-2">
                                <p className="mob-text">Family</p>
                            </div>
                            <div className="col-2">
                                <div className="row d-flex justify-content-end px-3">
                                    <p className="mb-0" id="cnt2">301</p>
                                    <div className="d-flex flex-column plus-minus"> <span className="vsm-text plus">+</span> <span className="vsm-text minus">-</span> </div>
                                </div>
                            </div>
                            <div className="col-2">
                                <h6 className="mob-text">$13.50</h6>
                            </div>

                            <div className="col-2">
                                <p className="mob-text">Còn phòng</p>
                            </div>

                            <div className="col-2">
                                <p className="mob-text">Đà Nẵng</p>
                            </div>

                            <div className="col-2">
                                <p className="mob-text"></p>
                            </div>

                        </div>
                    </div>
                </div>
                {/* <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="card" >
                            <div className="row">
                                <div className="col-lg-4 mt-2">
                                    <div className="row d-flex justify-content-between px-4">
                                        <p className="mb-1 text-left">Subtotal</p>
                                        <h6 className="mb-1 text-right">$23.49</h6>
                                    </div>
                                    
                                    <div className="row d-flex justify-content-between px-4">
                                        <p className="mb-1 text-left">Shipping</p>
                                        <h6 className="mb-1 text-right">$2.99</h6>
                                    </div>
                                    <div className="row d-flex justify-content-between px-4" id="tax">
                                        <p className="mb-1 text-left">Total (tax included)</p>
                                        <h6 className="mb-1 text-right">$26.48</h6>
                                    </div> <button className="btn-block btn-blue"> <span> <span id="checkout">Checkout</span> <span id="check-amt">$26.48</span> </span> </button>
                                </div>
                            </div>
                        </div>
                    </div>s
                </div> */}
                <div className="container bg-light rounded-bottom py-4" id="zero-pad">
                    <div className="row d-flex justify-content-center">
                    <div className="col-lg-10 col-12">
                        <div className="d-flex justify-content-between align-items-center">
                        <div> <button className="btn btn-sm bg-light border border-dark">GO BACK</button> </div>
                        <div className="px-md-0 px-1" id="footer-font"> <b className="pl-md-4">SUBTOTAL<span className="pl-md-4">$61.78</span></b> </div>
                        <div> <button className="btn btn-sm bg-dark text-white px-lg-5 px-3">CONTINUE</button> </div>
                        </div>
                    </div>
                    </div>
                </div>
                  
            </div>
            <Footer></Footer>
            </div>
            
        );
    }

}

export default Basket;