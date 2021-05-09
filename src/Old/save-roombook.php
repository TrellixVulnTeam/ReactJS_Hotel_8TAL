<?php
    include_once 'signup-form/connection.php';
    session_start();
    if(ISSET($_SESSION['email'])) {
        $user = new User();
        $basket = new Basket();
        $room_id = intval($_GET['room_id']);
        $query = $user->getUserByEmail($_SESSION['email']);
        if(mysqli_num_rows($query) > 0) {
            $fetch_data = mysqli_fetch_assoc($query);
            if($basket->insertBasket($fetch_data['user_id'], $room_id)) {
                $_SESSION['user_id'] = $fetch_data['user_id'];
                $_SESSION['name'] = $fetch_data['name'];
                header("location: reservation1.php");
            }
            else {
                echo "Something went wrong. please, try again!";
            }
        }
    }
    else {
        header('location: signup-form/login-user.php');
    }

    
?>