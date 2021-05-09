<?php
    include_once 'signup-form/connection.php';
    session_start();
    if(ISSET($_SESSION['email'])) {
        $basket = new Basket();
        $basket_id = mysqli_real_escape_string($basket->connect(), $_GET['basket_id']);
        if($basket->getBasketByID($basket_id)) {
            $fetch = mysqli_fetch_assoc($basket->getBasketByID($basket_id));
            if($basket->deleteBasket($basket_id)) {
                header('location: reservation1.php');
            }
        }
    }
    else {
        header('location: signup-form/login-user.php');
    }
?>