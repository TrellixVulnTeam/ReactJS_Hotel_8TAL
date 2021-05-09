<!DOCTYPE html>
<html>

<head>
    <title>HKTQueen</title>
    <meta charset="utf-8">
    <link rel="icon" href="images/favicon.ico" type="image/x-icon">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="css/input.css">
    <link rel="stylesheet" type="text/css" href="css/style.css">
</head>

<body>
    <div class="container-fluid">
        <!-- HEADER -->
        <!-- MENU START -->
        <?php
            require_once "header.php";
        ?>
        <!-- MENU END -->
        <!-- slide -->
        <div id="slider1" class="carousel slide mt-1" data-ride="carousel">
            <ol class="carousel-indicators ">
                <li data-target="#slider1" data-slide-to="0" class="active"></li>
                <li data-target="#slider1" data-slide-to="1"></li>
                <li data-target="#slider1" data-slide-to="2"></li>
                <li data-target="#slider1" data-slide-to="3"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img class="d-block w-100 slider_1" src="images/home/slide1.jpg" alt="First slide ">
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100 slider_1" src="images/home/slide2.jpg" alt="Second slide ">
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100 slider_1 " src="images/home/slide3.jpg" alt="Third slide ">
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100 slider_1 " src="images/home/slide4.jpg" alt="Four slide ">
                </div>
            </div>
            <a class="carousel-control-prev" href="#slider1" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon " aria-hidden="true "></span>
                <span class="sr-only ">Previous</span>
            </a>
            <a class="carousel-control-next" href="#slider1" role="button" data-slide="next">
                <span class="carousel-control-next-icon " aria-hidden="true "></span>
                <span class="sr-only ">Next</span>
            </a>
        </div>
        <!-- end slide -->
        <div class="container">
            <form class="booking-form">
                <div class="arrive">
                    <label for="arrive">Arrive</label>
                    <input id="arrive" type="date">
                </div>
                <div class="departure">
                    <label for="departure">Departure</label>
                    <input id="departure" type="date">
                </div>



                <div class="select-book">
                    <label>Person</label>
                    <select name="book" id="person" class="">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                </div>
                <div class="select-book">
                    <label>Type room</label>
                    <select name="book" class="">
                            <option value="luxury">Luxury</option>
                            <option value="family">Family</option>
                            <option value="couple">Couple </option>
                            <option value="standard">Standard </option>
                        </select>
                </div>

                <div class="submit-form">
                    <input type="submit" value="Check Availability">
                </div>
            </form>
        </div>
        <p>
            <div class="container ">
                <center>
                    <h1 style="font-family:Didot;color: #CC6600;">WELCOME TO HKTQUEEN HOTEL</h1>
                </center><br>
                <div class="row infor_1 ">
                    <div class="col-md-5 " style="font-size: 22px; font-family: Optima;color: #003300;">HKT Queen Hotel Đà Nẵng City is a world-class 5-star hotel, located at the intersection of four main districts, which is considered the heart and center of the city Đà Nẵng. It takes you only 35 minutes drive from the hotel to Đà Nẵng
                        airport, 8 minutes to the commercial and entertainment center of the city. With 300 elegantly designed and elegant standard rooms and suites with attention to every detail, it will bring the utmost comfort and comfort to you whether
                        it is a relaxing time or a business trip. </div>
                    <div class="col-md-7 ">
                        <div class="thumbnail">
                            <img class="card-img-top " src="images/home/introduction1.jpg" alt="HKTQueen">
                        </div>
                    </div>
                </div>
            </div>
        </p>
        <br>

        <hr>

        <div class="container ">
            <div class="row mt-5 ">
                <h2 class="list-product-title ">
                    <center>
                        <h1 style="font-family:Didot;color: #CC6600;">ROOM</h1>
                    </center>
                </h2>
            </div>
            <br>
        </div>
        <!-- slide room -->
        <div class="container ">
            <div id="slider2" class="carousel slide mt-1 " data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div class="row ">
                            <div class="col-md-3 col-sm-6 col-12">
                                <div class="card card-product mb-3 ">
                                    <div class="thumbnail">
                                        <img class="card-img-top " src="images/home/Presidential1.jpg " alt="HKTQueen">
                                    </div>
                                    <div class="card-body ">
                                        <h5 class="card-title ">Presidential Room</h5>
                                        <p class="card-text ">Luxurious design, noble, comfortably.</p>
                                        <center>
                                            <a href="ViewDetailsPresidential.php" class="btn btn-primary ">View Details</a>
                                        </center>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-3 col-sm-6 col-12">
                                <div class="card card-product mb-3 ">
                                    <div class="thumbnail">
                                        <img class="card-img-top " src="images/Deluxe/Deluxe2.jpg " alt="HKTQueen">
                                    </div>
                                    <div class="card-body ">
                                        <h5 class="card-title ">Deluxe Room</h5>
                                        <p class="card-text ">The room is quite large, fully equipped and comfortable.</p>
                                        <center>
                                            <a href="ViewDetailsDeluxe.php" class="btn btn-primary ">View Details</a>
                                        </center>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-3 col-sm-6 col-12">
                                <div class="card card-product mb-3 ">
                                    <div class="thumbnail">
                                        <img class="card-img-top " src="images/Superior/Superior1.jpg " alt="HKTQueen">
                                    </div>
                                    <div class="card-body ">
                                        <h5 class="card-title ">Superior Room</h5>
                                        <p class="card-text ">Full device and comfort, balcony overlooking the pool.</p>
                                        <center>
                                            <a href="ViewDetailsSuperior.php" class="btn btn-primary ">View Details</a>
                                        </center>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-3 col-sm-6 col-12">
                                <div class="card card-product mb-3 ">
                                    <div class="thumbnail">
                                        <img class="card-img-top " src="images/Standard/Standard1.jpg " alt="HKTQueen">
                                    </div>

                                    <div class="card-body ">
                                        <h5 class="card-title ">Standard Room</h5>
                                        <p class="card-text ">Reasonable price, simple design, suitable.</p>
                                        <center>
                                            <a href="ViewDetailsStandard.php" class="btn btn-primary ">View Details</a>
                                        </center>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="carousel-item room2">
                        <div class="row ">
                            <div class="col-md-3 col-sm-6 col-12">
                                <div class="card card-product mb-3 ">
                                    <div class="thumbnail">
                                        <img class="card-img-top " src="images/Presidential/Presidential2.webp " alt="HKTQueen">
                                    </div>
                                    <div class="card-body ">
                                        <h5 class="card-title ">Presidential Room</h5>
                                        <p class="card-text ">Luxurious design, noble, comfortably.</p>
                                        <center>
                                            <a href="ViewDetailsPresidential.php" class="btn btn-primary ">View Details</a>
                                        </center>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-3 col-sm-6 col-12">
                                <div class="card card-product mb-3 ">
                                    <div class="thumbnail">
                                        <img class="card-img-top " src="images/Deluxe/Deluxe2.jpg " alt="HKTQueen">
                                    </div>

                                    <div class="card-body ">
                                        <h5 class="card-title ">Deluxe Room</h5>
                                        <p class="card-text ">The room is quite large, fully equipped and comfortable.</p>
                                        <center>
                                            <a href="ViewDetailsDeluxe.php" class="btn btn-primary ">View Details</a>
                                        </center>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-3 col-sm-6 col-12">
                                <div class="card card-product mb-3 ">
                                    <div class="thumbnail">
                                        <img class="card-img-top " src="images/Superior/Superior2.jpg " alt="HKTQueen">
                                    </div>

                                    <div class="card-body ">
                                        <h5 class="card-title ">Superior Room</h5>
                                        <p class="card-text ">Full device and comfort, balcony overlooking the pool.</p>
                                        <center>
                                            <a href="ViewDetailsSuperior.php" class="btn btn-primary ">View Details</a>
                                        </center>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-3 col-sm-6 col-12">
                                <div class="card card-product mb-3 ">
                                    <div class="thumbnail">
                                        <img class="card-img-top " src="images/Standard/Standard2.jpg " alt="HKTQueen">
                                    </div>

                                    <div class="card-body ">
                                        <h5 class="card-title ">Standard Room</h5>
                                        <p class="card-text ">Reasonable price, simple design, suitable.</p>
                                        <center>
                                            <a href="ViewDetailsStandard.php" class="btn btn-primary ">View Details</a>
                                        </center>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <a class="carousel-control-prev room2" href="#slider2" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon " aria-hidden="true "></span>
                    <span class="sr-only ">Previous</span>
                </a>
                <a class="carousel-control-next room2" href="#slider2" role="button" data-slide="next">
                    <span class="carousel-control-next-icon " aria-hidden="true "></span>
                    <span class="sr-only ">Next</span>
                </a>
            </div>

        </div>
        <!-- end slide room-->
        <!-- Load jquery trước khi load bootstrap js -->
        </br>
        <hr>
        <div class="container ">
            <center>
                <h1 style="font-family:Didot;color: #CC6600;">DERVICES</h1>
            </center>
            <br>
            <div class="row infor_2 ">
                <div class="col-md-7 ">
                    <img class="card-img-top " src="images/home/introduction2.jpg" alt="HKTQueen">
                </div>
                <div class="col-md-5 " style="font-size: 22px; font-family: Optima; color: #003300;">The hotel has Orientica Seafood Restaurant & Bar and Café Chat. Modern quality facilities of meeting and conference rooms can accommodate up to 1250 people. In addition, the hotel also has a world-class sports center with outdoor temperatures
                    (floating bars on the water), shaping services, spa and massage. Hotel HTK Queen Đà Nẵng City with excellent facilities and services is the ideal choice for clients on jobs and vacations before visiting the most vibrant and rhythmic
                    city in Vietnam.</div>
            </div><br>
            <div class="row infor_2">
                <div class="col-sm-3">
                    <div class="thumbnail">
                        <img class="card-img-top " src="images/home/restaurant.jpg" alt="HKTQueen">
                    </div>
                </div>
                <div class="col-sm-3">
                    <div class="thumbnail">
                        <img class="card-img-top " src="images/home/spa.jpg" alt="HKTQueen">
                    </div>
                </div>
                <div class="col-sm-3">
                    <div class="thumbnail">
                        <img class="card-img-top " src="images/home/hoboi.jpg" alt="HKTQueen">
                    </div>
                </div>
                <div class="col-sm-3">
                    <div class="thumbnail">
                        <img class="card-img-top " src="images/home/gym.jpg" alt="HKTQueen">
                    </div>
                </div>
            </div>
        </div>
        <br>
        <hr>

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
                        <input type="email" name="" id=" " placeholder="Your email... " class="form-control ">
                        <br>
                        <button type="button" class="btn btn-secondary ">Registation</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script src="bootstrap/js/jquery-3.3.1.min.js "></script>
    <script src="bootstrap/js/bootstrap.min.js "></script>
    <!-- <script src="form-signup/js/login-user.js"></script> -->

</body>

</html>