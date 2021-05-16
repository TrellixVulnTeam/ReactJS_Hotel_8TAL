import React, { Component } from 'react';
import '../../../css/bootstrap-select.min.css'
import '../../../css/styles.css'

class Reservation4 extends Component {
    render() {
        return (
            <div className="container-fluid">
            {/* MENU */}
            {/*?php
                require_once "header.php";
            ?*/}
            {/* END MENU */}
            {/* RESERVATION */}
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
                                ";
                                $query = $user-&gt;getUserByEmail($_SESSION['email']);//get User
                                if(mysqli_num_rows($query) &gt; 0) {'{'}
                                $fetch = mysqli_fetch_assoc($query);
                                $query1 = $basket-&gt;getBasketByUserID($fetch['user_id']);//get basket_id, 
                                if(mysqli_num_rows($query1) &gt; 0) {'{'}
                                $i = 1;
                                while($fetch1 = mysqli_fetch_assoc($query1)) {'{'}
                                $query2 = $room-&gt;getRoomByRoomID($fetch1['room_id']);//get roomtype_id, noroom
                                if(mysqli_num_rows($query2) &gt; 0) {'{'}
                                $fetch2 = mysqli_fetch_assoc($query2);
                                $query3 = $roomType-&gt;getRoomTypeByID($fetch2['roomtype_id']);//get rent, roomtype
                                if(mysqli_num_rows($query3) &gt; 0) {'{'}
                                $fetch3 = mysqli_fetch_assoc($query3);
                                $first_date = strtotime($_SESSION['depart']);
                                $second_date = strtotime($_SESSION['arrive']);
                                $datediff = abs($first_date - $second_date);
                                $_SESSION['day'] = ceil($datediff/(60*60*24));
                                $_SESSION['rent'] = $_SESSION['day'] * $fetch3['rent'];
                                $_SESSION['total'] += $_SESSION['rent'];
                                ?&gt;
                                insertRoomBook($fetch['user_id'], $fetch1['room_id'], $_SESSION['phone'], $_SESSION['arrive'], $_SESSION['depart'])){'{'}
                                $roomstatus = new RoomStatus();
                                $roomstatus-&gt;insertRoomStatus($fetch1['room_id'], $_SESSION['arrive'], $_SESSION['depart']);
                                $check=true;
                                $sendMail = $sendMail."
                                ";
                                {'}'}
                                {'}'}
                                {'}'}
                                {'}'}
                                $i++;
                                {'}'}
                                if($check) {'{'}
                                $mail = new PHPMailer();
                                $subject = "Hotel reservation invoice";
                                $body = "Dear Mr./Ms. ".$_SESSION['name'].", <br /><p>Thank you for your reservation at HKT Queen.<br />
                                  And here is a list of the rooms you have booked: </p><p>$sendMail</p><h2>Total: $".$total."</h2><br /><p>If you have any questions please contact us by email: hktqueenhotel@gmail.com
                                  or phone number: (+84) 337 965 469</p><p>Have a nice day.</p>
                                Best regards,<br />
                                HKT Queen Hotel";
                                //SMTP Settings
                                $mail-&gt;isSMTP();
                                $mail-&gt;Host = "smtp.gmail.com";
                                $mail-&gt;SMTPAuth = true;
                                $mail-&gt;Username = "dinhkhakl01@gmail.com"; //enter you email address
                                $mail-&gt;Password = 'Luly041101'; //enter you email password
                                $mail-&gt;Port = 465;
                                $mail-&gt;SMTPSecure = "ssl";
                                //Email Settings
                                $mail-&gt;isHTML(true);
                                $mail-&gt;setFrom($_SESSION['email'], "HKT Queen Hotel");
                                $mail-&gt;addAddress($_SESSION['email']); //enter you email address
                                $mail-&gt;Subject = ($subject);
                                $mail-&gt;Body = $body;
                                if($mail-&gt;send()) {'{'}
                                $result = $basket-&gt;deleteBasketByUserID($fetch['user_id']);
                                {'}'}
                                {'}'}
                                {'}'}
                                {'}'}
                                {'}'}
                                ?&gt;
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
                  s            <span>Customer (sign)</span>
                              <div className="sign" />
                              <b>{/*?php if(ISSET($_SESSION['name'])) {echo $_SESSION['name'];} ?*/}</b>
                            </div>
                            <hr className="new2" />
                            <span className="thanks">Thank you for your reservation.</span>
                            <div className="btn-reservation">
                              <a className="btn-back btn" href="/reservation/3">PREVIOUS</a>
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
          </div>
    
        );
    }
}

export default Reservation4;