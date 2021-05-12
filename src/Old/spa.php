<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Spa</title>
    <link rel="icon" href="images/favicon.ico" type="image/x-icon">
    <script src="bootstrap/js/jquery-3.3.1.min.js "></script>
    <script src="bootstrap/js/bootstrap.min.js "></script>
    <link rel="stylesheet" type="text/css" href="bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="css/services.css">
    <script src="js/services.js"></script>
</head>

<body>
    <div class="container-fluid">
        <!-- HEADER -->
        <!-- MENU -->
        <?php
            require_once "header.php";
        ?>
        <!-- END MENU -->
        <!-- END HEADER -->
        <!-- BODY -->
        <div class="container">
            <main class="main">
                <div class="slider-wrapper">
                    <div class="slider-panel-controller">
                        <a href="" class="slider-left-ctrl slider-ctrl" data-move="left"><i class="fa fa-chevron-right"></i></a>
                        <div class="slider-panel">
                            <div class="slider-image">
                                <img src="images/services/spa/Spa1.jpg" />
                            </div>
                            <div class="slider-image">
                                <img src="images/services/spa/Spa2.jpg" />
                            </div>
                            <div class="slider-image">
                                <img src="images/services/spa/Spa3.jpg" />
                            </div>
                        </div>
                        <a href="" class="slider-right-ctrl slider-ctrl" data-move="right"><i class="fa fa-chevron-right"></i></a>
                    </div>
                </div>
                <div class="slider-content col-5">
                    <h3>SPA</h3>
                    <div>
                        <p>Temporarily put aside the chaos of life to come to HKT Queen Hotel. A peaceful space imbued with a local cultural identity and a relaxing herb scent like embracing your body and awakening your mind. After a long day of visiting
                            the faint mountain town, soaking in the pot of medicinal leaves typical of Red Dao ethnic people will definitely help you find the balance, dispel fatigue.</p>
                    </div>
                </div>
            </main>
        </div>
        <!-- END BODY -->
        <!-- FOOTER -->
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
        <!-- END FOOTER -->
    </div>
</body>

</html>