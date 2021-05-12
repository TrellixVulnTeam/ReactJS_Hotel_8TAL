<?php
use PHPMailer\PHPMailer\PHPMailer;
require_once "signup-form/PHPMailer/PHPMailer.php";
require_once "signup-form/PHPMailer/SMTP.php";
require_once "signup-form/PHPMailer/Exception.php";
$email = "";
$name = "";
$errors = array();

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Reservation 4</title>
    <link rel="icon" href="images/favicon.ico" type="image/x-icon">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- GOOGLE FONT -->
    <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800" rel="stylesheet">
    <!-- CSS LIBRARY -->
    <link rel="stylesheet" type="text/css" href="bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="css/ionicons.min.css">
    <link rel="stylesheet" type="text/css" href="css/bootstrap-select.min.css">
    <!-- MAIN STYLE -->
    <link rel="stylesheet" href="css/styles.css">
</head>
<style>

</style>
<body>

    <div class="container-fluid">
        <!-- MENU -->
        <?php
            require_once "header.php";
        ?>
        <!-- END MENU -->
        <!-- RESERVATION -->
        <section class="section-reservation-page">
            <div class="container">
                <div class="reservation-page">
                    <!-- STEP -->
                    <div class="reservation_step">
                        <ul>
                            <li><span>1.</span> Choose Room</li>
                            <li><span>2.</span> Confirm Information</li>
                            <li><span>3.</span> Check Out</li>
                            <li class="active"><span>4.</span> Finish</li>
                        </ul>
                    </div>
                    <!-- END / STEP -->
                    <div class="row check-out">
                        <!--  SIDEBAR -->
                        <div class="col-lg-10 col-md-4 col-sm-12 col-xs-12">
                            <div class="sidebar">
                                <!-- WIDGET CHECK AVAILABILITY -->
                                <div class="widget widget_check_availability widget-1">
                                <?php $total = $_SESSION['total'];
                                ?>
                                    <form class="check_availability bill" action="" method="post">
                                        <div class="bill-header">
                                            <div class="name-hotel">
                                                <img src="images/logo-icon.png" alt="">
                                                <b><h3>HTK Queen Hotel</h3></b>
                                            </div>
                                            <div class="infor-hotel">
                                                <span>99 To Hien Thanh, Son Tra, Da Nang</span>
                                                <span>hktqueenhotel@gmail.com</span>
                                                <span>(+84) 337 965 469</span>
                                            </div>
                                        </div>
                                        <div class="bill-title">
                                            <b>RESERVATION BILL</b>
                                        </div>
                                        <div class="bill-content">
                                            <div class="bill-content-infor">
                                                <div>
                                                    <span>Name: <b><?php if(ISSET($_SESSION['name'])) {echo $_SESSION['name'];} ?></b></span>
                                                </div>
                                                <div>
                                                    <span>Email: <b><?php if(ISSET($_SESSION['email'])) {echo $_SESSION['email'];} ?></b></span>
                                                </div>
                                                <div>
                                                    <span>Phone: <b><?php if(ISSET($_SESSION['phone'])) {echo $_SESSION['phone'];} ?></b></span>
                                                </div>
                                            </div>

                                            <div class="bill-content-room">
                                            <span><?php echo $date = date("d-m-Y");?></span>
                                                <table class="table table-responsive-lg table-responsive-xl">
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
                                                    <?php
                                                        if(ISSET($_SESSION['email'])) {
                                                            include_once "signup-form/connection.php";
                                                            $user = new User();
                                                            $room = new Room();
                                                            $roomType = new RoomType();
                                                            $basket = new Basket();
                                                            $roomBook = new RoomBook();
                                                            $_SESSION['total'] = 0;
                                                            $check = false;
                                                            $sendMail="BẢNG HÓA ĐƠN</br>
                                                                        <tr>
                                                                        <td>No room</td>
                                                                        <td>Arrive</td>
                                                                        <td>Depart</td>
                                                                        <td>Price</td>
                                                                        </tr>
                                                                        ";
                                                            $query = $user->getUserByEmail($_SESSION['email']);//get User
                                                            if(mysqli_num_rows($query) > 0) {
                                                                $fetch = mysqli_fetch_assoc($query);
                                                                $query1 = $basket->getBasketByUserID($fetch['user_id']);//get basket_id, 
                                                                if(mysqli_num_rows($query1) > 0) {
                                                                    $i = 1;
                                                                    while($fetch1 = mysqli_fetch_assoc($query1)) {
                                                                        $query2 = $room->getRoomByRoomID($fetch1['room_id']);//get roomtype_id, noroom
                                                                        if(mysqli_num_rows($query2) > 0) {
                                                                            $fetch2 = mysqli_fetch_assoc($query2);
                                                                            $query3 = $roomType->getRoomTypeByID($fetch2['roomtype_id']);//get rent, roomtype
                                                                            if(mysqli_num_rows($query3) > 0) {
                                                                                $fetch3 = mysqli_fetch_assoc($query3);
                                                                                $first_date = strtotime($_SESSION['depart']);
                                                                                $second_date = strtotime($_SESSION['arrive']);
                                                                                $datediff = abs($first_date - $second_date);
                                                                                $_SESSION['day'] = ceil($datediff/(60*60*24));
                                                                                $_SESSION['rent'] = $_SESSION['day'] * $fetch3['rent'];
                                                                                $_SESSION['total'] += $_SESSION['rent'];
                                                                                ?>
                                                                                    <tr>
                                                                                        <td><?php echo $i; ?></td>
                                                                                        <td><?php echo $fetch2['noroom']; ?></td>
                                                                                        <td><?php echo $fetch3['roomtype']; ?></td>
                                                                                        <td><?php echo $_SESSION['arrive']; ?></td>
                                                                                        <td><?php echo $_SESSION['depart']; ?></td>
                                                                                        <td>$<?php echo $fetch3['rent'].' X '.$_SESSION['day'].'d'; ?></td>
                                                                                    </tr>
                                                                                <?php
                                                                                if(isset($_POST['confirm'])){
                                                                                    if($roomBook->insertRoomBook($fetch['user_id'], $fetch1['room_id'], $_SESSION['phone'], $_SESSION['arrive'], $_SESSION['depart'])){
                                                                                        $roomstatus = new RoomStatus();
                                                                                        $roomstatus->insertRoomStatus($fetch1['room_id'], $_SESSION['arrive'], $_SESSION['depart']);
                                                                                        $check=true;
                                                                                        $sendMail = $sendMail."
                                                                                        <tr>
                                                                                            <td>".$fetch2['noroom']."\n</td>
                                                                                            <td>".$_SESSION['arrive']."</td>
                                                                                            <td>".$_SESSION['depart']."</td>
                                                                                            <td> $".$fetch3['rent'].' X '.$_SESSION['day'].'d'."</td>
                                                                                        </tr>";
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                        $i++;
                                                                    }
                                                                    if($check) {
                                                                        $mail = new PHPMailer();
                                                                        $subject = "Hotel reservation invoice";
                                                                        $body = "Dear Mr./Ms. ".$_SESSION['name'].", </br>
                                                                        <p>Thank you for your reservation at HKT Queen.</br>
                                                                        And here is a list of the rooms you have booked: </p>
                                                                        <p>$sendMail</p>
                                                                        <h2>Total: $".$total."</h2></br>
                                                                        <p>If you have any questions please contact us by email: hktqueenhotel@gmail.com
                                                                        or phone number: (+84) 337 965 469</p>
                                                                        <p>Have a nice day.</p>
                                                                        Best regards,</br>
                                                                        HKT Queen Hotel";
                                                        
                                                                        //SMTP Settings
                                                                        $mail->isSMTP();
                                                                        $mail->Host = "smtp.gmail.com";
                                                                        $mail->SMTPAuth = true;
                                                                        $mail->Username = "dinhkhakl01@gmail.com"; //enter you email address
                                                                        $mail->Password = 'Luly041101'; //enter you email password
                                                                        $mail->Port = 465;
                                                                        $mail->SMTPSecure = "ssl";
                                                        
                                                                        //Email Settings
                                                                        $mail->isHTML(true);
                                                                        $mail->setFrom($_SESSION['email'], "HKT Queen Hotel");
                                                                        $mail->addAddress($_SESSION['email']); //enter you email address
                                                                        $mail->Subject = ($subject);
                                                                        $mail->Body = $body;
                                                                        if($mail->send()) {
                                                                            $result = $basket->deleteBasketByUserID($fetch['user_id']);
                                                                        }
                                                                    }
                                                                    
                                                                }
                                                            }
                                                        }
                                                    ?>
                                                        <tr>
                                                            <td><b>Total</b></td>
                                                            <td style="visibility: hidden;"></td>
                                                            <td style="visibility: hidden;"></td>
                                                            <td style="visibility: hidden;"></td>
                                                            <td style="visibility: hidden;"></td>
                                                            <td><b>$<?php echo $_SESSION['total']; ?></b></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <hr class="new1">
                                        <div class="bill-footer">
                                            <span>Customer (sign)</span>
                                            <div class="sign"></div>
                                            <b><?php if(ISSET($_SESSION['name'])) {echo $_SESSION['name'];} ?></b>
                                        </div>
                                        <hr class="new2">
                                        <span class="thanks">Thank you for your reservation.</span>
                                        <div class="btn-reservation">
                                            <a class="btn-back btn" href="reservation3.php">PREVIOUS</a>
                                            <button type="submit" class="btn-room btn" name="confirm">CONFIRM</button>
                                        </div>
                                    </form>
                                </div>
                                <!-- END / WIDGET CHECK AVAILABILITY -->
                            </div>
                        </div>
                        <!--  END/SIDEBAR -->
                    </div>
                </div>
            </div>
        </section>
        <!-- END / RESERVATION -->
        <div style="background-size:0vmax; background-color:#363636; color: #fff; " class="footer">
            <div class="container">
                <div class="row2">
                    <div class="col-5">
                        <p>
                            <h5>CONTACT</h5>
                        </p>
                        <hr>
                        <p>
                            Hotline:
                            <a href="# ">0396 567 451</a>
                        </p>
                        <p>
                            Email:
                            <a href="# ">hktqueenhotel@gmail.com</a>
                        </p>
                        <p>
                            Address:
                            <a href="https://www.google.com/maps/place/99+T%C3%B4+Hi%E1%BA%BFn+Th%C3%A0nh,+Ph%C6%B0%E1%BB%9Bc+M%E1%BB%B9,+S%C6%A1n+Tr%C3%A0,+%C4%90%C3%A0+N%E1%BA%B5ng+550000,+Vi%E1%BB%87t+Nam/@16.059758,108.2414633,17z/data=!3m1!4b1!4m5!3m4!1s0x3142177f2ced6d8b:0xeac35f2960ca74a4!8m2!3d16.0597966!4d108.2434978?hl=vi-VN"> 99 To Hien Thanh, Da Nang, Vietnam</a>
                        </p>
                        <p>
                            <a href="https://www.facebook.com/"><i class="fa fa-facebook-f"></i></a>
                            <a href="https://twitter.com/"><i class="fa fa-twitter-square"></i></a>
                            <a href="https://google.com/"><i class="fa fa-google-plus"></i></a>
                            <a href="https://instagram.com/"><i class="fa fa-instagram" style="background-color: none;"></i></a>
                        </p>
                    </div>
                    <div class="col-2">
                        <p>
                            <h5>SUPPORT</h5>
                        </p>
                        <hr>
                        <p>
                            <a href="#">Support</a>
                        </p>
                        <p>
                            <a href="#">Contribute</a>
                        </p>
                    </div>
                    <div class="col-5">
                        <p>
                            <h5>FOLLOW US</h5>
                        </p>
                        <hr>
                        <p>
                            Enter email to subscribe to receive useful information about learning from HKT Queen Hotel
                        </p>
                        <input type="email" name="" id=" " placeholder="Your email..." class="form-control ">
                        <br>
                        <button type="button" class="btn btn-secondary ">Registation</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- LOAD JQUERY -->
        <script type="text/javascript" src="js/jquery-1.12.4.min.js"></script>
        <script type="text/javascript" src="js/owl.carousel.min.js"></script>
        <script type="text/javascript" src="js/bootstrap.min.js"></script>
        <script type="text/javascript" src="js/bootstrap-select.js"></script>
        <script type="text/javascript" src="js/jquery.littlelightbox.js"></script>
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.7.1/js/bootstrap-datepicker.js"></script>
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBDyCxHyc8z9gMA5IlipXpt0c33Ajzqix4"></script>
        <!-- Custom jQuery -->
        <script type="text/javascript" src="js/sky.js"></script>
</body>

</html>