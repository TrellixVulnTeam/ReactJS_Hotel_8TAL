
<?php require_once "controllerBookingData.php"; ?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Reservation 1</title>
    <link rel="icon" href="images/favicon.ico" type="image/x-icon">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- GOOGLE FONT -->
    <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800" rel="stylesheet">
    <!-- CSS LIBRARY -->
    <link rel="stylesheet" type="text/css" href="bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
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
        ?>
        <!-- END MENU -->
        <!-- RESERVATION -->
        <section class="section-reservation-page">
            <div class="container">
                <div class="reservation-page">
                    <!-- STEP -->
                    <div class="reservation_step">
                        <ul>
                            <li class="active"><span>1.</span> Choose Room</li>
                            <li><span>2.</span> Confirm Information</li>
                            <li><span>3.</span> Check Out</li>
                            <li><span>4.</span> Finish</li>
                        </ul>
                    </div>
                    <!-- END / STEP -->
                    <div class="row">
                        <div class="col-lg-3 col-md-4 col-sm-12 col-xs-12">
                            <div class="sidebar">
                                <!-- WIDGET CHECK AVAILABILITY -->
                                <div class="widget widget_check_availability form-reservation">
                                    <h4 class="widget-title">YOUR RESERVATION</h4>
                                    <!-- onclick="window.location.href='controllerBookingData.php'" -->
                                    <form class="check_availability" action="controllerBookingData.php" method="POST">
                                        <div class="check_availability-field">
                                            <label>Phone</label>
                                            <div class="input-group date">
                                                <input class="form-control wrap-box" type="number" name="phone" placeholder="Phone" required>
                                            </div>
                                        </div>
                                        <h6 class="check_availability_title">your stay dates</h6>
                                        <div class="check_availability-field">
                                            <label>Arrive</label>
                                            <div class="input-group">
                                                <input class="form-control wrap-box" id="arriveDate" type="date" name="arrive" placeholder="Arrival Date" required>
                                            </div>
                                        </div>
                                        <div class="check_availability-field">
                                            <label>Depature</label>
                                            <div class="input-group">
                                                <input class="form-control wrap-box" id="departDate" type="date" name="depart" placeholder="Departure Date" required>
                                            </div>
                                        </div>

                                        <h6 class="check_availability_title">ROOMS &amp; GUest</h6>
                                        <div class="check_availability-field">
                                            <label>Person</label>
                                            <select class="awe-select" name="numbPerson">
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                            </select>
                                        </div>
                                        <div class="check_availability-field">
                                            <label>Type Room</label>
                                            <select class="awe-select roomType" name="roomType" onchange="showRoomType()">
                                                <option value="0">All</option>
                                                <option value="1">Luxury</option>
                                                <option value="2">Family</option>
                                                <option value="3">Couple</option>
                                                <option value="4">Standard</option>
                                            </select>
                                        </div>
                                        <!-- <button type="submit" class="btn-room btn" name="kha">SEARCH</button> -->
                                    </form>
                                </div>

                                <!-- END / WIDGET CHECK AVAILABILITY -->

                                <div class="widget widget_check_availability">
                                    <h4 class="widget-title">BOOKING SUMMARY</h4>
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
                                                    $_SESSION['user_id'] = $fetch['user_id'];
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
                                                                                <p>$<?php echo $fetch3['rent'], ' X '.$_SESSION['day'].'d' ; ?></p>
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
                                        
                                        <button type="button" class="btn-room btn" name="kha" onclick="window.location.href='reservation2.php'">CONTINUE</button>

                                    </form>
                                    <!-- Booking Summary End -->
                                </div>
                            </div>
                        </div>
                        <!-- CONTENT -->
                        <div class="col-lg-9 col-md-12 col-sm-12 col-xs-12">
                            <div class="reservation_content">
                                <!-- RESERVATION ROOM -->
                                <div class="reservation-room" id="rooms-list">
                                    <!-- ITEM -->
                                    <!-- ####################################################################################### -->
                                    <!-- LUXURY ROOM -->
                                    <div class="reservation-room_item">
                                        <h2 class="reservation-room_name"><a href="#">Luxury room</a></h2>
                                        <div class="reservation-room_img">
                                            <a href="#"><img src="images/luxury.jpg" alt="#" class="img-responsive"></a>
                                        </div>
                                        <div class="reservation-room_text">
                                            <div class="reservation-room_desc">
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type...</p>
                                                <ul>
                                                    <li>1 King Bed</li>
                                                    <li>Free Wi-Fi in all guest rooms</li>
                                                    <li>Separate sitting area</li>
                                                </ul>
                                            </div>
                                            <!-- <div class="clear"></div> -->
                                            <p class="reservation-room_price">
                                                <span class="reservation-room_amout">$590</span> / day
                                            </p>
                                        </div>
                                        <div class="reservation-room_package">
                                            <?php 
                                                include_once 'signup-form/connection.php';
                                                $room = new Room();
                                                $result = $room->getRoomByRoomType(1);
                                                
                                                include "checkBasket.php";

                                                if(ISSET($_SESSION['email'])) {
                                                    if(mysqli_num_rows($result) > 0) {
                                                        while($fetch_data = mysqli_fetch_assoc($result)) {
                                                            if(in_array($fetch_data['room_id'], $_SESSION['room_id']) === false) {
                                                                ?>
                                                                <form class="reservation-package_item">
                                                                    <b>Room <?php echo $fetch_data['noroom']; ?> </b>
                                                                    <a class="btn btn-room" href="save-roombook.php?room_id=<?php echo $fetch_data['room_id'];?>">BOOK</a>
                                                                </form>
                                                            <?php
                                                            }
                                                        }
                                                    }
                                                }
                                                else {
                                                    while($fetch_data = mysqli_fetch_assoc($result)) {
                                                            ?>
                                                            <form class="reservation-package_item">
                                                                <b>Room <?php echo $fetch_data['noroom']; ?> </b>
                                                                <a class="btn btn-room" href="save-roombook.php?room_id=<?php echo $fetch_data['room_id'];?>">BOOK</a>
                                                            </form>
                                                        <?php
                                                    }
                                                }
                                            ?>
                                        </div>
                                    </div>

                                    <!-- LUXURY ROOM END -->
                                    <!-- ####################################################################################### -->
                                    <!-- FAMILY ROOM -->
                                    <div class="reservation-room_item">
                                        <h2 class="reservation-room_name"><a href="#">FAMILY room</a></h2>
                                        <div class="reservation-room_img">
                                            <a href="#"><img src="images/family.jpg" alt="#" class="img-responsive"></a>
                                        </div>
                                        <div class="reservation-room_text">
                                            <div class="reservation-room_desc">
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type ...</p>
                                                <ul>
                                                    <li>1 King Bed</li>
                                                    <li>Free Wi-Fi in all guest rooms</li>
                                                    <li>Separate sitting area</li>
                                                </ul>
                                            </div>
                                            <div class="clear"></div>
                                            <p class="reservation-room_price">
                                                <span class="reservation-room_amout">$490</span> / day
                                            </p>
                                        </div>
                                        <div class="reservation-room_package">
                                            <?php 
                                                include_once 'signup-form/connection.php';
                                                $room = new Room();
                                                $result = $room->getRoomByRoomType(2);
                                                
                                                include "checkBasket.php";

                                                if(ISSET($_SESSION['email'])) {
                                                    if(mysqli_num_rows($result) > 0) {
                                                        while($fetch_data = mysqli_fetch_assoc($result)) {
                                                            if(in_array($fetch_data['room_id'], $_SESSION['room_id']) === false) {
                                                                ?>
                                                                <form class="reservation-package_item">
                                                                    <b>Room <?php echo $fetch_data['noroom']; ?> </b>
                                                                    <a class="btn btn-room" href="save-roombook.php?room_id=<?php echo $fetch_data['room_id'];?>">BOOK</a>
                                                                </form>
                                                            <?php
                                                            }
                                                        }
                                                    }
                                                }
                                                else {
                                                    while($fetch_data = mysqli_fetch_assoc($result)) {
                                                            ?>
                                                            <form class="reservation-package_item">
                                                                <b>Room <?php echo $fetch_data['noroom']; ?> </b>
                                                                <a class="btn btn-room" href="save-roombook.php?room_id=<?php echo $fetch_data['room_id'];?>">BOOK</a>
                                                            </form>
                                                        <?php
                                                    }
                                                }
                                            ?>
                                        </div>
                                    </div>
                                    <!-- FAMILY ROOM END-->
                                    <!-- ####################################################################################### -->
                                    <!-- CUOPLE ROOM -->
                                    <div class="reservation-room_item">
                                        <h2 class="reservation-room_name"><a href="#">COUPLE room</a></h2>
                                        <div class="reservation-room_img">
                                            <a href="#"><img src="images/couple.jpg" alt="#" class="img-responsive"></a>
                                        </div>
                                        <div class="reservation-room_text">
                                            <div class="reservation-room_desc">
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type ...</p>
                                                <ul>
                                                    <li>1 King Bed</li>
                                                    <li>Free Wi-Fi in all guest rooms</li>
                                                    <li>Separate sitting area</li>
                                                </ul>
                                            </div>
                                            <div class="clear"></div>
                                            <p class="reservation-room_price">
                                                <span class="reservation-room_amout">$390</span> / day
                                            </p>
                                        </div>
                                        <div class="reservation-room_package">
                                            <?php 
                                                include_once 'signup-form/connection.php';
                                                $room = new Room();
                                                $result = $room->getRoomByRoomType(3);
                                                
                                                include "checkBasket.php";

                                                if(ISSET($_SESSION['email'])) {
                                                    if(mysqli_num_rows($result) > 0) {
                                                        while($fetch_data = mysqli_fetch_assoc($result)) {
                                                            if(in_array($fetch_data['room_id'], $_SESSION['room_id']) === false) {
                                                                ?>
                                                                <form class="reservation-package_item">
                                                                    <b>Room <?php echo $fetch_data['noroom']; ?> </b>
                                                                    <a class="btn btn-room" href="save-roombook.php?room_id=<?php echo $fetch_data['room_id'];?>">BOOK</a>
                                                                </form>
                                                            <?php
                                                            }
                                                        }
                                                    }
                                                }
                                                else {
                                                    while($fetch_data = mysqli_fetch_assoc($result)) {
                                                            ?>
                                                            <form class="reservation-package_item">
                                                                <b>Room <?php echo $fetch_data['noroom']; ?> </b>
                                                                <a class="btn btn-room" href="save-roombook.php?room_id=<?php echo $fetch_data['room_id'];?>">BOOK</a>
                                                            </form>
                                                        <?php
                                                    }
                                                }
                                            ?>
                                        </div>
                                    </div>
                                    <!-- CUOPLE ROOM END -->
                                    <!-- ####################################################################################### -->
                                    <!-- STANDARD ROOM -->
                                    <div class="reservation-room_item">
                                        <h2 class="reservation-room_name"><a href="#">STANDARD room</a></h2>
                                        <div class="reservation-room_img">
                                            <a href="#"><img src="images/standard.jpg" alt="#" class="img-responsive"></a>
                                        </div>
                                        <div class="reservation-room_text">
                                            <div class="reservation-room_desc">
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type ...</p>
                                                <ul>
                                                    <li>1 King Bed</li>
                                                    <li>Free Wi-Fi in all guest rooms</li>
                                                    <li>Separate sitting area</li>
                                                </ul>
                                            </div>
                                            <div class="clear"></div>
                                            <p class="reservation-room_price">
                                                <span class="reservation-room_amout">$290</span> / day
                                            </p>
                                        </div>
                                        <div class="reservation-room_package">
                                            <?php 
                                                include_once 'signup-form/connection.php';
                                                $room = new Room();
                                                $result = $room->getRoomByRoomType(4);
                                                
                                                include "checkBasket.php";

                                                if(ISSET($_SESSION['email'])) {
                                                    if(mysqli_num_rows($result) > 0) {
                                                        while($fetch_data = mysqli_fetch_assoc($result)) {
                                                            if(in_array($fetch_data['room_id'], $_SESSION['room_id']) === false) {
                                                                ?>
                                                                <form class="reservation-package_item">
                                                                    <b>Room <?php echo $fetch_data['noroom']; ?> </b>
                                                                    <a class="btn btn-room" href="save-roombook.php?room_id=<?php echo $fetch_data['room_id'];?>">BOOK</a>
                                                                </form>
                                                            <?php
                                                            }
                                                        }
                                                    }
                                                }
                                                else {
                                                    while($fetch_data = mysqli_fetch_assoc($result)) {
                                                            ?>
                                                            <form class="reservation-package_item">
                                                                <b>Room <?php echo $fetch_data['noroom']; ?> </b>
                                                                <a class="btn btn-room" href="save-roombook.php?room_id=<?php echo $fetch_data['room_id'];?>">BOOK</a>
                                                            </form>
                                                        <?php
                                                    }
                                                }
                                            ?>
                                        </div>
                                    </div>
                                    <!-- STANDARD ROOM END-->
                                    <!-- ####################################################################################### -->
                                </div>
                                <!-- END / RESERVATION ROOM -->
                            </div>
                        </div>
                        <!-- END / CONTENT -->
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
    </div>
    <!-- LOAD JQUERY -->
    <script type="text/javascript" src="js/jquery-1.12.4.min.js"></script>
    <script type="text/javascript" src="js/owl.carousel.min.js"></script>
    <script type="text/javascript" src="js/bootstrap.min.js"></script>
    <script type="text/javascript" src="js/bootstrap-select.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.7.1/js/bootstrap-datepicker.js"></script>
    <!-- Custom jQuery -->
    <script type="text/javascript" src="js/sky.js"></script>
    <script src="js/reservation.js"></script>
    
</body>

</html>