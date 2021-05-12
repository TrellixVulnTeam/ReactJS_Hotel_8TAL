<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>History Booking</title>
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
        ?>
        <!-- END MENU -->

        <!-- CONTENT START -->
        <div class="container">
            <b class="history-booking__error"><h4>sory you have not made any reservations!</h4></b>
            <b class="history-booking__header"><h4>YOUR HISTORY BOOKING</h4></b>
            <table class="table table-hover table-bordered table-responsive-lg">
                <thead class="table-primary">
                    <tr>
                        <th>#</th>
                        <th>No Room</th>
                        <th>Type</th>
                        <th>Arrive</th>
                        <th>Depart</th>
                        <th>Status</th>
                        <th>Date Book</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>411</td>
                        <td>Luxury</td>
                        <td>01/04/2021</td>
                        <td>04/04/2021</td>
                        <td>Approved</td>
                        <td>01/04/2021</td>
                    </tr>
                    <!-- <tr>
                        <td>2</td>
                        <td>411</td>
                        <td>Luxury</td>
                        <td>01/04/2021</td>
                        <td>04/04/2021</td>
                        <td>Approved</td>
                        <td>01/04/2021</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>411</td>
                        <td>Luxury</td>
                        <td>01/04/2021</td>
                        <td>04/04/2021</td>
                        <td>Approved</td>
                        <td>01/04/2021</td>
                    </tr> -->
                </tbody>
            </table>
        </div>
        <!-- CONTENT END -->
        <!-- FOOTER START -->
        <div style="background-size:0vmax; background-color:#363636; color: #fff; " class="footer footer__history">
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
</body>

</html>