<?php
  
  // Include database file
  include 'config.php';
  ?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <meta name="description" content="" />
    <meta name="author" content="" />
    <title>Admin HKTQueen</title>
    <!--favicon-->
    <link rel="icon" href="../images/favicon.ico" type="image/x-icon">
    <!-- Bootstrap core CSS-->
    <link href="assets/css/bootstrap.min.css" rel="stylesheet" />
    <!-- animate CSS-->
    <link href="assets/css/animate.css" rel="stylesheet" type="text/css" />
    <!-- Sidebar CSS-->
    <link href="assets/css/sidebar-menu.css" rel="stylesheet" />
    <!-- Custom Style-->
    <link href="assets/css/app-style.css" rel="stylesheet" />
    <!-- Awesome -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">

</head>

<body class="bg-theme bg-theme1">
    <!-- Start wrapper-->
    <div id="wrapper">
        <!--Start sidebar-wrapper-->
        <div id="sidebar-wrapper" data-simplebar="" data-simplebar-auto-hide="true">
            <div class="brand-logo">
                <a href="index.php">
                    <img src="assets/images/logo.png" class="logo-icon" alt="logo icon">
                    <h5 class="logo-text">HKTQueen Hotel</h5>
                </a>
            </div>
            <ul class="sidebar-menu do-nicescrol">
                <li>
                    <a href="index.php">
                        <i class="fa fa-tachometer" aria-hidden="true"></i> <span>Dashboard</span>
                    </a>
                </li>

                <li>
                    <a href="booking.php">
                        <i class="fa fa-shopping-cart" aria-hidden="true"></i> <span>Booking</span>
                    </a>
                </li>

                <li>
                    <a href="rooms.php">
                        <i class="fa fa-bed" aria-hidden="true"></i> <span>Rooms</span>
                    </a>
                </li>

                <li>
                    <a href="users.php">
                        <i class="fa fa-user" aria-hidden="true"></i> <span>Users</span>
                    </a>
                </li>

                <li>
                    <a href="./signup-form/login-user.php" target="_blank">
                        <i class="fa fa-sign-out" aria-hidden="true"></i> <span>Log Out</span>
                    </a>
                </li>
            </ul>
        </div>
        <!--End sidebar-wrapper-->

        <!--Start topbar header-->
        <header class="topbar-nav">
            <nav class="navbar navbar-expand fixed-top">
                <ul class="navbar-nav mr-auto align-items-center">
                    <li class="nav-item">
                        <a class="nav-link toggle-menu" href="javascript:void();">
                            <i class="menu-icon fa fa-bars"></i>
                        </a>
                    </li>
                    <li class="nav-item">
                        <form class="search-bar">
                            <input type="text" class="form-control" placeholder="Enter keywords">
                            <a href="javascript:void();"><i class="fa fa-search"></i></a>
                        </form>
                    </li>
                </ul>

                <ul class="navbar-nav align-items-center right-nav-link">
                    <li class="nav-item">
                        <a class="nav-link dropdown-toggle dropdown-toggle-nocaret" data-toggle="dropdown" href="#">
                            <span class="user-profile"><img src="assets/images/user.png" class="img-circle" alt="user avatar"></span>
                        </a>
                        <ul class="dropdown-menu dropdown-menu-right">
                            <li class="dropdown-item" <i class="icon-power mr-2">
                            <a href="./signup-form/login-user.php">Logout </a>
                            </i> 
                        </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </header>
        <!--End topbar header-->

        <div class="clearfix"></div>

        <div class="content-wrapper">
            <div class="container-fluid">

                <!--Start Dashboard Content-->

                <div class="card mt-3">
                    <div class="card-content">
                        <div class="row row-group m-0">
                            <div class="col-12 col-lg-6 col-xl-3 border-light">
                                <div class="card-body">
                                    <h5 class="text-white mb-0">9526 <span class="float-right"><i class="fa fa-shopping-cart"></i></span></h5>
                                    <div class="progress my-3" style="height:3px;">
                                        <div class="progress-bar" style="width:55%"></div>
                                    </div>
                                    <p class="mb-0 text-white small-font">Total Orders <span class="float-right">+4.2% <i class="zmdi zmdi-long-arrow-up"></i></span></p>
                                </div>
                            </div>
                            <div class="col-12 col-lg-6 col-xl-3 border-light">
                                <div class="card-body">
                                    <h5 class="text-white mb-0">8323 <span class="float-right"><i class="fa fa-usd"></i></span></h5>
                                    <div class="progress my-3" style="height:3px;">
                                        <div class="progress-bar" style="width:55%"></div>
                                    </div>
                                    <p class="mb-0 text-white small-font">Total Revenue <span class="float-right">+1.2% <i class="fa fa-long-arrow-up" aria-hidden="true"></i></span></p>
                                </div>
                            </div>
                            <div class="col-12 col-lg-6 col-xl-3 border-light">
                                <div class="card-body">
                                    <h5 class="text-white mb-0">6200 <span class="float-right"><i class="fa fa-eye"></i></span></h5>
                                    <div class="progress my-3" style="height:3px;">
                                        <div class="progress-bar" style="width:55%"></div>
                                    </div>
                                    <p class="mb-0 text-white small-font">Visitors <span class="float-right">+5.2% <i class="zmdi zmdi-long-arrow-up"></i></span></p>
                                </div>
                            </div>
                            <div class="col-12 col-lg-6 col-xl-3 border-light">
                                <div class="card-body">
                                    <h5 class="text-white mb-0">5630 <span class="float-right"><i class="fa fa-envira"></i></span></h5>
                                    <div class="progress my-3" style="height:3px;">
                                        <div class="progress-bar" style="width:55%"></div>
                                    </div>
                                    <p class="mb-0 text-white small-font">Messages <span class="float-right">+2.2% <i class="zmdi zmdi-long-arrow-up"></i></span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--End Row-->

                <div class="row">
                    <div class="col-12 col-lg-12">
                        <div class="card">
                            <div class="card-header"> <h1>Booking Details</h>
                                <div class="card-action">
                                    <div class="dropdown">
                                        <a href="javascript:void();" class="dropdown-toggle dropdown-toggle-nocaret" data-toggle="dropdown">
                                            <i class="icon-options"></i>
                                        </a>
                                        <div class="dropdown-menu dropdown-menu-right">
                                            <a class="dropdown-item" href="javascript:void();">Action</a>
                                            <a class="dropdown-item" href="javascript:void();">Another action</a>
                                            <a class="dropdown-item" href="javascript:void();">Something else here</a>
                                            <div class="dropdown-divider"></div>
                                            <a class="dropdown-item" href="javascript:void();">Separated link</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="table-responsive">
                            <table class="table align-items-center table-flush table-borderless table-hover">
                                            <thead>
                                                <tr>
                                                <th>ID</th>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>Phone</th>
                                                <th>Room</th>
                                                <th>Arrive </th>
                                                <th>Depart </th>
                                                <th>Status </th>
                                                <th>Payment </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <?php 
                                                    $roomObj = new Rooms();

                                                    $result=mysqli_query($roomObj->con, "SELECT * FROM roombooks");
                                                    while ($row=mysqli_fetch_assoc($result)) {
                                                        $user_id = $row['user_id'];
                                                        $query = mysqli_query($roomObj->con, "SELECT * FROM users WHERE user_id = $user_id");
                                                        if(mysqli_num_rows($query) > 0) {
                                                            $fetch = mysqli_fetch_assoc($query);
                                                            $room_id = $row['room_id'];
                                                            $query2 = mysqli_query($roomObj->con, "SELECT * FROM rooms WHERE room_id = $room_id");
                                                            if(mysqli_num_rows($query2) > 0) {
                                                                $fetch2 = mysqli_fetch_assoc($query2);
                                                                ?>
                                                                    <tr>
                                                                    <td><?php echo $row['roombook_id'] ?></td>
                                                                    <td><?php echo $fetch['name'] ?></td>
                                                                    <td><?php echo $fetch['email'] ?></td>          
                                                                    <td><?php echo $row['phone'] ?></td>
                                                                    <td><?php echo $fetch2['noroom'] ?></td>
                                                                    <td><?php echo $row['arrive'] ?></td>
                                                                    <td><?php echo $row['depart'] ?></td>
                                                                    <td><?php echo $row['status'] ?></td>
                                                                    <td><?php echo $row['payment'] ?></td>
                                                                    </tr>
                                                                <?php
                                                            }
                                                        }
                                                        
                                                    }
                                                ?>
                                            </tbody>
                                        </table>
                            </div>
                        </div>
                    </div>
                </div>
                <!--End Row-->

                <!--End Dashboard Content-->

                <!--start overlay-->
                <div class="overlay toggle-menu"></div>
                <!--end overlay-->

            </div>
            <!-- End container-fluid-->

        </div>
        <!--End content-wrapper-->
        <!--Start Back To Top Button-->
        <a href="javaScript:void();" class="back-to-top"><i class="fa fa-angle-double-up"></i> </a>
        <!--End Back To Top Button-->
    </div>
    <!--End wrapper-->

    <!-- Bootstrap core JavaScript-->
    <script src="assets/js/jquery.min.js"></script>
    <script src="assets/js/popper.min.js"></script>
    <script src="assets/js/bootstrap.min.js"></script>
    <!-- sidebar-menu js -->
    <script src="assets/js/sidebar-menu.js"></script>
    <!-- Custom scripts -->
    <script src="assets/js/app-script.js"></script>
</body>

</html>