<?php
    include_once 'signup-form/connection.php';
//     session_start();
    $user = new User();
        if(ISSET($_POST['kha'])) {
                // if(ISSET($_SESSION['email'])){
                        // if(EMPTY($_SESSION['phone']) && EMPTY($_SESSION['arrive']) && EMPTY($_SESSION['depart'])) {
                        //         header('location: reservation1.php');
                        // }
                        // exit();
                        $phone = mysqli_real_escape_string($user->connect(), $_POST['phone']);
                        $arrive = mysqli_real_escape_string($user->connect(), $_POST['arrive']);
                        $depart = mysqli_real_escape_string($user->connect(), $_POST['depart']);
                        
                        // header('location: reservation2.php');
                        // echo $_SESSION['phone'];
                        // echo $_SESSION['arrive'];
                        // echo $_SESSION['depart'];
                        echo $phone;
                        echo $arrive;
                        echo $depart;
                // }
        }
        // else {
        //         header('location: signup-form/login-user.php');
        // }
        // echo "KL01";
?>