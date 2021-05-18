
        import React, { Component } from 'react';
        import '../css/reservertion4.css';
        class Reservertion4 extends Component {
            constructor(props){
                super(props);
                this.state={
                 
                }
            }

            myhandleChange =(event)=>{
                let name = event.target.name;
                let value = event.target.value;
                this.setState({[name]:value});
           }
           mySubmitHandler =(event)=>{
               event.preventDefault();    
           }
            render() {
                return (

                    <section className="section-reservation-page">
                    <div className="container">
                        <div className="reservation-page">
                        {/* STEP */}
                        <div className="reservation_step">
                            <ul>
                            <li><span>1.</span> Choose Room</li>
                            <li><span>2.</span> Confirm Information</li>
                            <li><span>3.</span> Check Out</li>
                            <li className="active"><span>4.</span> Finish</li>
                            </ul>
                        </div>
                        {/* END / STEP */}
                        <div className="row check-out">
                            {/*  SIDEBAR */}
                            <div className="col-lg-10 col-md-4 col-sm-12 col-xs-12">
                            <div className="sidebar">
                                {/* WIDGET CHECK AVAILABILITY */}
                                <div className="widget widget_check_availability widget-1">
                                {/*?php $total = $_SESSION['total'];
                                            ?*/}
                                <form className="check_availability bill" action method="post">
                                    <div className="bill-header">
                                    <div className="name-hotel">
                                        <img src="images/logo-icon.png" alt="" />
                                        <b><h3>HTK Queen Hotel</h3></b>
                                    </div>
                                    <div className="infor-hotel">
                                        <span>99 To Hien Thanh, Son Tra, Da Nang</span>
                                        <span>hktqueenhotel@gmail.com</span>
                                        <span>(+84) 337 965 469</span>
                                    </div>
                                    </div>
                                    <div className="bill-title">
                                    <b>RESERVATION BILL</b>
                                    </div>
                                    <div className="bill-content">
                                    <div className="bill-content-infor">
                                        <div>
                                        <span>Name: <b>{/*?php if(ISSET($_SESSION['name'])) {echo $_SESSION['name'];} ?*/}</b></span>
                                        </div>
                                        <div>
                                        <span>Email: <b>{/*?php if(ISSET($_SESSION['email'])) {echo $_SESSION['email'];} ?*/}</b></span>
                                        </div>
                                        <div>
                                        <span>Phone: <b>{/*?php if(ISSET($_SESSION['phone'])) {echo $_SESSION['phone'];} ?*/}</b></span>
                                        </div>
                                    </div>
                                    <div className="bill-content-room">
                                        <span>{/*?php echo $date = date("d-m-Y");?*/}</span>
                                     
                                        <table className="table table-responsive-lg table-responsive-xl">
                                        <thead>
                                            <tr>
                                            <th>No</th>
                                            <th>Room</th>
                                            <th>Type</th>
                                            <th>Arrive</th>
                                            <th>Depart</th>
                                            <th>Rent/day</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {/*?php
                                                                    if(ISSET($_SESSION['email'])) {
                                                                        include_once "signup-form/connection.php";
                                                                        $user = new User();
                                                                        $room = new Room();
                                                                        $roomType = new RoomType();
                                                                        $basket = new Basket();
                                                                        $roomBook = new RoomBook();
                                                                        $_SESSION['total'] = 0;
                                                                        $check = false;
                                                                        $sendMail="BẢNG HÓA ĐƠN</br*/}
                                            <tr>
                                            <td>No room</td>
                                            <td>Arrive</td>
                                            <td>Depart</td>
                                            <td>Price</td>
                                            </tr><tr>
                                            <td>{/*?php echo $i; ?*/}</td>
                                            <td>{/*?php echo $fetch2['noroom']; ?*/}</td>
                                            <td>{/*?php echo $fetch3['roomtype']; ?*/}</td>
                                            <td>{/*?php echo $_SESSION['arrive']; ?*/}</td>
                                            <td>{/*?php echo $_SESSION['depart']; ?*/}</td>
                                            <td>${/*?php echo $fetch3['rent'].' X '.$_SESSION['day'].'d'; ?*/}</td>
                                            </tr>
                                            {/*?php
                                                                                            if(isset($_POST['confirm'])){
                                                                                                if($roomBook-*/}<tr>
                                            <td>".$fetch2['noroom']."\n</td>
                                            <td>".$_SESSION['arrive']."</td>
                                            <td>".$_SESSION['depart']."</td>
                                            <td> $".$fetch3['rent'].' X '.$_SESSION['day'].'d'."</td>
                                            </tr>
                                            <tr>
                                            <td><b>Total</b></td>
                                            <td style={{visibility: 'hidden'}} />
                                            <td style={{visibility: 'hidden'}} />
                                            <td style={{visibility: 'hidden'}} />
                                            <td style={{visibility: 'hidden'}} />
                                            <td><b>${/*?php echo $_SESSION['total']; ?*/}</b></td>
                                            </tr>
                                        </tbody>
                                        </table>
                                    </div>
                                    </div>
                                    <hr className="new1" />
                                    <div className="bill-footer">
                                    <span>Customer (sign)</span>
                                    <div className="sign" />
                                    <b>{/*?php if(ISSET($_SESSION['name'])) {echo $_SESSION['name'];} ?*/}</b>
                                    </div>
                                    <hr className="new2" />
                                    <span className="thanks">Thank you for your reservation.</span>
                                    <div className="btn-reservation">
                                    <a className="btn-back btn" href="reservation3.php">PREVIOUS</a>
                                    <button type="submit" className="btn-room btn" name="confirm">CONFIRM</button>
                                    </div>
                                </form>
                                </div>
                                {/* END / WIDGET CHECK AVAILABILITY */}
                            </div>
                            </div>
                            {/*  END/SIDEBAR */}
                        </div>
                        </div>
                    </div>
                    </section>
                );
            }
       }
       export default Reservertion4 ;