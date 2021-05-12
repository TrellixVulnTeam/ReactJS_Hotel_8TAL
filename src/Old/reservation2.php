
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Reservation 2</title>
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
                            <li class="active"><span>2.</span> Confirm Information</li>
                            <li><span>3.</span> Check Out</li>
                            <li><span>4.</span> Finish</li>
                        </ul>
                    </div>
                    <!-- END / STEP -->
                    <div class="row check-out">
                        <!--  SIDEBAR -->
                        <div class="col-lg-9 col-md-4 col-sm-12 col-xs-12">
                            <div class="sidebar">
                                <!-- WIDGET CHECK AVAILABILITY -->
                                <div class="widget widget_check_availability widget-1">
                                    <h4 class="widget-title">YOUR Information</h4>
                                    <form class="check_availability">
                                        <div class="check_availability-field booking-information">
                                            <div class="col-lg-10"><b>Name:</b> <span><?php if(ISSET($_SESSION['name'])) {echo $_SESSION['name'];} ?></span></div>
                                            <div class="col-lg-10"><b>Email:</b> <span><?php echo $_SESSION['email'] ?></span></div>
                                            <div class="col-lg-10"><b>Phone:</b> <span><?php if(ISSET($_SESSION['phone'])) {echo $_SESSION['phone'];} ?></span></div>
                                            <button class="edit-information-booking" data-toggle="modal" type="button" data-target="#update_modal" name="edit-infor-booking"><i class="fa fa-edit "></i></button>
                                        </div>
                                        <br>
                                        <div>
                                            <br>
                                            <table class="table table-hover table-responsive-lg">
                                                <thead>
                                                    <tr>
                                                        <th>Room</th>
                                                        <th>Type</th>
                                                        <th>Arrive</th>
                                                        <th>Depart</th>
                                                        <th>Rent/day</th>
                                                    </tr>
                                                </thead>

                                                <tbody>
                                                <!-- //////////////////////////////////////////////////////////////////////////////////////////////////// -->
                                                <?php 
                                                    if(ISSET($_SESSION['email'])) {
                                                        include_once "signup-form/connection.php";
                                                        $user = new User();
                                                        $room = new Room();
                                                        $roomType = new RoomType();
                                                        $basket = new Basket();
                                                        $_SESSION['total'] = 0;
                                                        $query = $user->getUserByEmail($_SESSION['email']);//get User_id
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
                                                                                <tr> 
                                                                                    <td><?php echo $fetch2['noroom']?></td> 
                                                                                    <td><?php echo $fetch3['roomtype'];?></td>
                                                                                    <td><?php echo $_SESSION['arrive']?></td>
                                                                                    <td><?php echo $_SESSION['depart']?></td>
                                                                                    <td><?php echo "$".$fetch3['rent']. " X " .$_SESSION['day'] ."d";?></td>
                                                                                </tr>
                                                                            <?php
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                ?>
                                                <!-- //////////////////////////////////////////////////////////////////////////////////////////////////// -->
                                                    
                                                    <tr>
                                                        <td><b>Total</b></td>
                                                        <td style="visibility: hidden; "></td>
                                                        <td style="visibility: hidden; "></td>
                                                        <td style="visibility: hidden; "></td>
                                                        <td><b>$<?php echo $_SESSION['total']; ?></b></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div class="btn-reservation ">
                                            <a class="btn-back btn" href="reservation1.php">PREVIOUS</a>
                                            <a class="btn-room btn" href="reservation3.php">CONTINUE</a>
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
        <!-- Modal Update -->
        <div class="modal fade" id="update_modal" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <form method="" action="">
                        <div class="modal-header">
                            <h3 class="modal-title">Update Item</h3>
                        </div>
                        <div class="modal-body">
                            <div class="col-md-2"></div>
                            <div class="col-md-8">
                                <div class="form-group">
                                    <input type="hidden" name="id" value="" />
                                </div>
                                <div class="form-group">
                                    <label>Name</label>
                                    <input type="text" name="name" value="Nguyen Dinh Kha" class="form-control" required="required" />
                                </div>
                                <div class="form-group">
                                    <label>Email</label>
                                    <input type="text" name="quantity" value="dinhkhakl01@gmail.com" class="form-control" required="required" />
                                </div>
                                <div class="form-group">
                                    <label>Phone</label>
                                    <input type="text" name="quantity" value="0337965469" class="form-control" required="required" />
                                </div>
                            </div>
                        </div>
                        <div style="clear:both;"></div>
                        <div class="modal-footer">
                            <button name="update" class="btn btn-warning">Update</button>
                            <button class="btn btn-danger" type="button" data-dismiss="modal">Close</button>
                        </div>
                </div>
                </form>
            </div>
        </div>
        <!-- Modal Update End -->

        <!-- END / RESERVATION -->
        <div style="background-size:0vmax; background-color:#363636; color: #fff; " class="footer ">
            <div class="container ">
                <div class="row2 ">
                    <div class="col-5 ">
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
                            <a href="https://www.google.com/maps/place/99+T%C3%B4+Hi%E1%BA%BFn+Th%C3%A0nh,+Ph%C6%B0%E1%BB%9Bc+M%E1%BB%B9,+S%C6%A1n+Tr%C3%A0,+%C4%90%C3%A0+N%E1%BA%B5ng+550000,+Vi%E1%BB%87t+Nam/@16.059758,108.2414633,17z/data=!3m1!4b1!4m5!3m4!1s0x3142177f2ced6d8b:0xeac35f2960ca74a4!8m2!3d16.0597966!4d108.2434978?hl=vi-VN "> 99 To Hien Thanh, Da Nang, Vietnam</a>
                        </p>
                        <p>
                            <a href="https://www.facebook.com/ "><i class="fa fa-facebook-f "></i></a>
                            <a href="https://twitter.com/ "><i class="fa fa-twitter-square "></i></a>
                            <a href="https://google.com/ "><i class="fa fa-google-plus "></i></a>
                            <a href="https://instagram.com/ "><i class="fa fa-instagram " style="background-color: none; "></i></a>
                        </p>
                    </div>
                    <div class="col-2 ">
                        <p>
                            <h5>SUPPORT</h5>
                        </p>
                        <hr>
                        <p>
                            <a href="# ">Support</a>
                        </p>
                        <p>
                            <a href="# ">Contribute</a>
                        </p>
                    </div>
                    <div class="col-5 ">
                        <p>
                            <h5>FOLLOW US</h5>
                        </p>
                        <hr>
                        <p>
                            Enter email to subscribe to receive useful information about learning from HKT Queen Hotel
                        </p>
                        <input type="email " name=" " id=" " placeholder="Your email... " class="form-control ">
                        <br>
                        <button type="button " class="btn btn-secondary ">Registation</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- LOAD JQUERY -->
        <!-- <script type="text/javascript " src="js/jquery-1.12.4.min.js "></script> -->
        <script src="bootstrap/js/jquery-3.3.1.min.js "></script>
        <script src="bootstrap/js/bootstrap.js "></script>
        <script type="text/javascript " src="js/owl.carousel.min.js "></script>
        <script type="text/javascript " src="js/jquery.appear.min.js "></script>
        <script type="text/javascript " src="js/isotope.pkgd.min.js "></script>
        <script type="text/javascript " src="js/bootstrap-select.js "></script>
        <script type="text/javascript " src="js/jquery.littlelightbox.js "></script>
        <script type="text/javascript " src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.7.1/js/bootstrap-datepicker.js "></script>
        <!-- Custom jQuery -->
        <script type="text/javascript " src="js/sky.js "></script>
</body>

</html>