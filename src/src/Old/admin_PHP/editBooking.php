<?php
  
  // Include database file
  require 'config.php';

  $roomObj = new Rooms();

  // Edit room record
  if(isset($_GET['editId'])) {
    $editId = $_GET['editId'];
    $room = $roomObj->displyaRecordById($editId);
  }

  // Update Record in room table
  if(isset($_POST['update'])) {
    $roomObj->updateRecord();
  }  
    
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
    <!-- Icons CSS-->
    <link href="assets/css/icons.css" rel="stylesheet" type="text/css" />
    <!-- Sidebar CSS-->
    <link href="assets/css/sidebar-menu.css" rel="stylesheet" />
    <!-- Custom Style-->
    <link href="assets/css/app-style.css" rel="stylesheet" />

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
                            <li class="dropdown-item" <i class="icon-power mr-2" >
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

                        <div class="card">
                            <div class="card-body">
                            <h2>Edit Booking</h2>
                            <div class="container">
                            <?php 
                                $id=$_GET['editId'];
                                $sql="select * from roombooks where roombook_id=$id";
                                $result=$roomObj->con->query($sql);
                                $room=mysqli_fetch_assoc($result);
                            ?>
                                <form action="" method="POST" enctype = "multipart/form-data">
                                    <div class="form-group">
                                        <label for="user_id">User ID:</label>
                                        <input type="user_id" readonly=true class="form-control" name="user_id" value="<?php echo $room['user_id']; ?>" required="">
                                    </div>

                                    <div class="form-group">
                                        <label for="room_id">Room ID:</label>
                                        <input type="room_id" readonly=true class="form-control" name="room_id" value="<?php echo $room['room_id']; ?>" required="">
                                    </div>
                                    <div class="form-group">
                                        <label for="phone">Phone:</label>
                                        <input type="phone" readonly=true class="form-control" name="phone" value="<?php echo $room['phone']; ?>"  required="">
                                    </div>
                                    <div class="form-group">
                                        <label for="arrive ">Arrive :</label>
                                        <input type="date" readonly=true class="form-control" name="arrive" value="<?php echo $room['arrive']?>"required="" >
                                    </div>
                                    <div class="form-group">
                                        <label for="depart">Depart  :</label>
                                        <input type="date" readonly=true class="form-control" name="depart" value="<?php echo $room['depart']?>"required="" >
                                    </div>
                                    <div class="form-group">
                                        <label for="status">Status:</label>
                                        <select name="status" class="form-control" id="" required="">
                                            <option value="pending">Pending</option>
                                            <option value="booking">Booking</option>
                                        </select>
                                    </div>
                                    
                                    <div class="form-group">
                                        <label for="payment">Payment :</label>
                                        <select name="payment" class="form-control" id="" required="">
                                            <option value="paid">Paid </option>
                                            <option value="unpaid">Unpaid</option>
                                        </select>
                                    </div>
                                
                    <button type="submit" name="updatebook" value="<?php echo $room['roombook_id']?>" class="btn btn-primary" style="float:right;">Submit</button>
                </form>
              </div>
            </div>
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