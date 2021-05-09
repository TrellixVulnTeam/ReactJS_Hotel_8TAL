<?php
    session_start();
?>
<!-- MENU -->
<nav class="navbar navbar-expand-lg navbar-dark" style="background-color: #363636; color: #fff;">
    <a class="navbar-brand" href="index.php">
        <img src="images/logo-icon.png" alt="HKT Queen" class="logo">
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav">
            <li class="nav-item active">
                <a class="nav-link" href="index.php">HOME</a>
            </li>
            <li class="nav-item active">
                <a class="nav-link" href="room.php">ROOMS</a>
            </li>
            <li class="nav-item active">
                <div class="--dropdown">
                    <button class="--dropbtn">SERVICES 
                    <i class="fa fa-caret-down"></i>
                    </button>
                    <div class="--dropdown-content">
                        <a href="restaurant.php">RESTAURANT</a>
                        <a href="spa.php">SPA</a>
                        <a href="pool.php">POOL</a>
                    </div>
                </div>
            </li>
            <li class="nav-item active">
                <a class="nav-link" href="reservation1.php">RESERVATION</a>
            </li>

            <li class="nav-item active">
                <a class="nav-link" href="gallery.php">GALLERY</a>
            </li>
            <li class="nav-item active">
                <a class="nav-link" href="contact.php">CONTACT</a>
            </li>
            <li class="nav-item active">
                <a class="nav-link" href="about.php">ABOUT US</a>
            </li>
            <li class="nav-item active">
                <div class="social" style="<?php if(ISSET($_SESSION['email'])) {echo "display: none;";}?>">
                    <button class="register signIn" id="signin" data-toggle="modal" data-target="#login">
                            <a href="signup-form/login-user.php">SIGN IN</a>
                            </button>
                    <button class="register signUp" id="signup" data-toggle="modal" data-target="#register">
                            <a href="signup-form/signup-user.php">SIGN UP</a>
                        </button>
                </div>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle user-management" style="<?php if(ISSET($_SESSION['email'])) {echo "display: block;";}?>" id="userDropdown" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fa fa-user fa-fw user"></i></a>
                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
                    <a class="dropdown-item" href="history-booking.php">Booking History</a>
                    <a class="dropdown-item" href="logout-user.php">Logout</a>
                </div>
            </li>
        </ul>
    </div>
</nav>
<!-- END MENU -->