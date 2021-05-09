
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Reservation 3</title>
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

<body>
    <div class="container-fluid">
        <!-- MENU -->
        <?php
            require_once "header.php";
            if(!ISSET($_SESSION['email'])){
                header("Location: signup-form/login-user.php");
            }
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
                            <li class="active"><span>3.</span> Check Out</li>
                            <li><span>4.</span> Finish</li>
                        </ul>
                    </div>
                    <!-- END / STEP -->
                    <div class="row check-out">
                        <!--  SIDEBAR -->
                        <div class="col-lg-12 col-md-4 col-sm-12 col-xs-12">
                            <div class="sidebar check-out-2">
                                <div class="col-lg-8 widget widget_check_availability widget-1">
                                    <h4 class="widget-title">Check Out</h4>
                                    <form class="check_availability">
                                        <h6 class="check_availability_title">your stay dates</h6>
                                        <div class="check_availability-field">
                                            <label>Name on Card</label>
                                            <input class="form-control wrap-box" type="text" placeholder="EX: NGUYEN DINH KHA">
                                            <br>
                                            <label>Credit card number</label>
                                            <input class="form-control wrap-box" type="text" placeholder="EX: 4304  2052 10741">
                                            <br>
                                            <label>CVV (Card Verification Value)</label>
                                            <input class="form-control wrap-box" type="text" placeholder="EX: 04/25">
                                        </div>
                                        <div class="btn-reservation">
                                            <a class="btn-back btn" href="reservation2.php">PREVIOUS</a>
                                            <a class="btn-room btn" href="reservation4.php">CONTINUE</a>
                                        </div>
                                    </form>
                                </div>
                                <div class="col-lg-3 widget widget_check_availability widget-1">
                                    <h4 class="widget-title">Basket</h4>
                                    <!-- Booking Summary -->
                                    <form class="check_availability booking-summary">
                                    <?php 
                                        if(ISSET($_SESSION['email'])) {
                                            include_once "signup-form/connection.php";
                                            $user = new User();
                                            $room = new Room();
                                            $roomType = new RoomType();
                                            $basket = new Basket();
                                            $_SESSION['total'] = 0;
                                            $query = $user->getUserByEmail($_SESSION['email']);//get User
                                            if(mysqli_num_rows($query) > 0) {
                                                $fetch = mysqli_fetch_assoc($query);
                                                $query1 = $basket->getBasketByUserID($fetch['user_id']);//get basket_id, 
                                                if(mysqli_num_rows($query1) > 0) {
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
                                                                    <div class="booking-summary-room-type">
                                                                        <h6 class="check_availability_title"><?php echo $fetch3['roomtype']; ?></h6>
                                                                        <div class="booking-summary-detail">
                                                                            <p>Room <?php echo $fetch2['noroom']; ?></p>
                                                                            <p>$<?php echo $fetch3['rent'].' x '.$_SESSION['day'].'d'; ?></p>
                                                                            <a href="delete-roombook.php?basket_id=<?php echo $fetch1['basket_id']; ?>"><i class="fa fa-trash"></i></a>
                                                                        </div>
                                                                    </div>
                                                                <?php
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                            ?>
                                                <div class="booking-summary-total">
                                                    <b>Total</b>
                                                    <p><b>$<?php echo $_SESSION['total']; ?></b></p>
                                                </div>
                                            <?php
                                        }
                                    ?>
                                    </form>
                                    <!-- Booking Summary End -->
                                </div>
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

        <button class="open-button" onclick="openForm()">Chat</button>
        <div class="chat-popup" id="myForm">
            <form class="form-container">
                <h1>Chat</h1>
                <label for="msg"><b>Message</b></label>
                <textarea placeholder="Type message.." name="msg" required></textarea>
                <button type="submit" class="btn">Send</button>
                <button type="button" class="btn cancel" onclick="closeForm()">Close</button>
            </form>
        </div>
    </div>
    <!-- LOAD JQUERY -->
    <script type="text/javascript" src="js/jquery-1.12.4.min.js"></script>
    <script type="text/javascript" src="js/owl.carousel.min.js"></script>
    <script type="text/javascript" src="js/bootstrap.min.js"></script>
    <script type="text/javascript" src="js/bootstrap-select.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.7.1/js/bootstrap-datepicker.js"></script>
    <!-- Custom jQuery -->
    <script type="text/javascript" src="js/sky.js"></script>
</body>

</html>