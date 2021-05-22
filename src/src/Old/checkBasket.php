<?php 
    if(ISSET($_SESSION['user_id'])) {
        $basket = new Basket();
        $_SESSION['room_id'] = array();
        $query1 = $basket->getBasketByUserID($_SESSION['user_id']);
        if(mysqli_num_rows($query1) > 0) {
            while($fetch1 = mysqli_fetch_assoc($query1)) {
                array_push($_SESSION['room_id'], $fetch1['room_id']);
            }
        }
    }
?>