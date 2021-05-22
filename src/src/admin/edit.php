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
        <div id="sidebar-wrapper" d ata-simplebar="" data-simplebar-auto-hide="true">
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
              <h2>Edit Room</h2>
              <div class="container">
                <form action="" method="POST" enctype = "multipart/form-data">
                  <!-- <div class="form-group">
                    <label for="roomtype_id">Roomtype ID :</label>
                    <input type="text" class="form-control" name="roomtype_id" value="<?php echo $room['roomtype_id']; ?>" required="">
                  </div> -->

                  <div class="form-group">
                    <label for="roomtype_id">Roomtype ID :</label>
                    <!-- <input type="text" class="form-control" name="roomtype_id" placeholder="Enter roomtype_id " required=""> -->
                    <select name="roomtype_id" class="form-control" id="" required="">
                        <?php $result = $roomObj->con->query("select roomtype_id,roomtype  from roomtypes");
                        while ($row = $result->fetch_assoc()) {
                        ?>
                        <option value="<?php echo $row['roomtype_id'] ?>"><?php echo $row['roomtype'] ?></option>
                        <?php }?>
                    </select>
                </div>

                  <div class="form-group">
                    <label for="noroom">No room:</label>
                    <input type="noroom" class="form-control" name="noroom" value="<?php echo $room['noroom']; ?>" required="">
                  </div>
                  <div class="form-group">
                    <label for="img">Img:</label>
                    <input type="file" class="form-control" name="img" value="<?php echo $room['img']; ?> " >
                  </div>
                  <div class="form-group">
                    <label for="status">Status:</label>
                    <select name="status" class="form-control" id="" required="">
                        <option value="available">Available</option>
                        <option value="unavailable">Unavailable</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label for="phone">Phone:</label>
                    <input type="phone" class="form-control" name="phone" value="<?php echo $room['phone']; ?>"  required="">
                  </div>
                  <input type="submit" name="update" class="btn btn-primary" style="float:right;" value="Submit">
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