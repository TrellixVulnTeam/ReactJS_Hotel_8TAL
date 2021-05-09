<?php
    session_start();
    include_once '../signup-form/connection.php';
    $roomStatus = new RoomStatus();
    $room = new Room();
    

    $phone = mysqli_real_escape_string($roomStatus->connect(), $_POST['phone']);
    $arrive = mysqli_real_escape_string($roomStatus->connect(), $_POST['arrive']);
    $depart = mysqli_real_escape_string($roomStatus->connect(), $_POST['depart']);
    $roomType = mysqli_real_escape_string($roomStatus->connect(), $_POST['roomType']);
    $_SESSION['arrive'] = $arrive;
    $_SESSION['depart'] = $depart;
    $_SESSION['phone'] = $phone;
    



    $output = "";
    switch($roomType) {
        case 0:
            $luxury = '<div class="reservation-room_item">
            <h2 class="reservation-room_name"><a href="#">Luxury room</a></h2>
            <div class="reservation-room_img">
                <a href="#"><img src="images/luxury.jpg" alt="#" class="img-responsive"></a>
            </div>
            <div class="reservation-room_text">
                <div class="reservation-room_desc">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type...</p>
                    <ul>
                        <li>1 King Bed</li>
                        <li>Free Wi-Fi in all guest rooms</li>
                        <li>Separate sitting area</li>
                    </ul>
                </div>
                <div class="clear"></div>
                <p class="reservation-room_price">
                    <span class="reservation-room_amout">$590</span> / day
                </p>
            </div>
            <div class="reservation-room_package">';
            $family = '<div class="reservation-room_item">
            <h2 class="reservation-room_name"><a href="#">FAMILY room</a></h2>
            <div class="reservation-room_img">
                <a href="#"><img src="images/family.jpg" alt="#" class="img-responsive"></a>
            </div>
            <div class="reservation-room_text">
                <div class="reservation-room_desc">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type ...</p>
                    <ul>
                        <li>1 King Bed</li>
                        <li>Free Wi-Fi in all guest rooms</li>
                        <li>Separate sitting area</li>
                    </ul>
                </div>
                <div class="clear"></div>
                <p class="reservation-room_price">
                    <span class="reservation-room_amout">$490</span> / day
                </p>
            </div>
            <div class="reservation-room_package">';
            $couple = '<div class="reservation-room_item">
            <h2 class="reservation-room_name"><a href="#">COUPLE room</a></h2>
            <div class="reservation-room_img">
                <a href="#"><img src="images/couple.jpg" alt="#" class="img-responsive"></a>
            </div>
            <div class="reservation-room_text">
                <div class="reservation-room_desc">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type ...</p>
                    <ul>
                        <li>1 King Bed</li>
                        <li>Free Wi-Fi in all guest rooms</li>
                        <li>Separate sitting area</li>
                    </ul>
                </div>
                <div class="clear"></div>
                <p class="reservation-room_price">
                    <span class="reservation-room_amout">$390</span> / day
                </p>
            </div>
            <div class="reservation-room_package">';
            $standard = '<div class="reservation-room_item">
            <h2 class="reservation-room_name"><a href="#">STANDARD room</a></h2>
            <div class="reservation-room_img">
                <a href="#"><img src="images/standard.jpg" alt="#" class="img-responsive"></a>
            </div>
            <div class="reservation-room_text">
                <div class="reservation-room_desc">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type ...</p>
                    <ul>
                        <li>1 King Bed</li>
                        <li>Free Wi-Fi in all guest rooms</li>
                        <li>Separate sitting area</li>
                    </ul>
                </div>
                <div class="clear"></div>
                <p class="reservation-room_price">
                    <span class="reservation-room_amout">$290</span> / day
                </p>
            </div>
            <div class="reservation-room_package">';
            $check = false;
            if(!empty($arrive) && empty($depart)) {
                // DEPART NULL
                $date = $arrive;
                $check = true;
            }
            else if(empty($arrive) && !empty($depart)) {
                // ARRIVE NULL
                $date = $depart;
                $check = true;
            }
            else if(!empty($arrive) && !empty($depart)) {
                // BOTH ARRIVE AND DEPART NOT NULL
                // call function $roomStatus->getRoomAvailable2($arrive, $depart, $roomType) X 4
                if(bothNotNull($arrive, $depart, 1)) {
                    $luxury .= bothNotNull($arrive, $depart, 1);
                }
                else {
                    $luxury .= '</div> </div>';
                }

                if(bothNotNull($arrive, $depart, 2)) {
                    $family .= bothNotNull($arrive, $depart, 2);
                }
                else {
                    $family .= '</div> </div>';
                }

                if(bothNotNull($arrive, $depart, 3)) {
                    $couple .= bothNotNull($arrive, $depart, 3);
                }
                else {
                    $couple .= '</div> </div>';
                }

                if(bothNotNull($arrive, $depart, 4)) {
                    $standard .= bothNotNull($arrive, $depart, 4);
                }
                else {
                    $standard .= '</div> </div>';
                }
                $output .= $luxury;
                $output .= $family;
                $output .= $couple;
                $output .= $standard;
            }
            else {
                // BOTH ARRIVE AND DEPART NULL
                // call function $room->getRoomByRoomType($roomType) X 4
                if(bothNull(1)) {
                    $luxury .= bothNull(1);
                }
                else {
                    $luxury .= '</div> </div>';
                }

                if(bothNull(2)) {
                    $family .= bothNull(2);
                }
                else {
                    $family .= '</div> </div>';
                }

                if(bothNull(3)) {
                    $couple .= bothNull(3);
                }
                else {
                    $couple .= '</div> </div>';
                }

                if(bothNull(4)) {
                    $standard .= bothNull(4);
                }
                else {
                    $standard .= '</div> </div>';
                }
                $output .= $luxury;
                $output .= $family;
                $output .= $couple;
                $output .= $standard;
            }
            if($check) {
                // call function $roomStatus->getRoomAvailable($date, $roomType) X 4
                if(oneNull($date, 1)) {
                    $luxury .= oneNull($date, 1);
                }
                else {
                    $luxury .= '</div> </div>';
                }

                if(oneNull($date, 2)) {
                    $family .= oneNull($date, 2);
                }
                else {
                    $family .= '</div> </div>';
                }

                if(oneNull($date, 3)) {
                    $couple .= oneNull($date, 3);
                }
                else {
                    $couple .= '</div> </div>';
                }

                if(oneNull($date, 4)) {
                    $standard .= oneNull($date, 4);
                }
                else {
                    $standard .= '</div> </div>';
                }

                $output .= $luxury;
                $output .= $family;
                $output .= $couple;
                $output .= $standard;
            }
            echo $output;
            break;
        case 1:
            $output = '<div class="reservation-room_item">
                            <h2 class="reservation-room_name"><a href="#">Luxury room</a></h2>
                            <div class="reservation-room_img">
                                <a href="#"><img src="images/luxury.jpg" alt="#" class="img-responsive"></a>
                            </div>
                            <div class="reservation-room_text">
                                <div class="reservation-room_desc">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type...</p>
                                    <ul>
                                        <li>1 King Bed</li>
                                        <li>Free Wi-Fi in all guest rooms</li>
                                        <li>Separate sitting area</li>
                                    </ul>
                                </div>
                                <p class="reservation-room_price">
                                    <span class="reservation-room_amout">$590</span> / day
                                </p>
                            </div>
                        <div class="reservation-room_package">';

            $check = false;
            if(!empty($arrive) && empty($depart)) {
                // DEPART NULL
                $date = $arrive;
                $check = true;
            }
            elseif(empty($arrive) && !empty($depart)) {
                $date = $depart;
                $check = true;
            }
            
            elseif(!empty($arrive) && !empty($depart)) {
                // BOTH ARRIVE AND DEPART NOT NULL
                if(bothNotNull($arrive, $depart, $roomType)) {
                    $output .= bothNotNull($arrive, $depart, $roomType);
                }
                else {
                    $output .= '</div> </div>';
                }
            }
            else {
                // BOTH ARRIVE AND DEPART NULL
                if(bothNull($roomType)) {
                    $output .= bothNull($roomType);
                }
                else {
                    $output .= '</div> </div>';
                }
            }
            if($check) {
                if(oneNull($date, $roomType)) {
                    $output .= oneNull($date, $roomType);
                }
                else {
                    $output .= '</div> </div>';
                }
            }
            echo $output;
            break;
        case 2:
            $output = '<div class="reservation-room_item">
            <h2 class="reservation-room_name"><a href="#">FAMILY room</a></h2>
            <div class="reservation-room_img">
                <a href="#"><img src="images/family.jpg" alt="#" class="img-responsive"></a>
            </div>
            <div class="reservation-room_text">
                <div class="reservation-room_desc">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type ...</p>
                    <ul>
                        <li>1 King Bed</li>
                        <li>Free Wi-Fi in all guest rooms</li>
                        <li>Separate sitting area</li>
                    </ul>
                </div>
                <div class="clear"></div>
                <p class="reservation-room_price">
                    <span class="reservation-room_amout">$490</span> / day
                </p>
            </div>
            <div class="reservation-room_package">';
            $check = false;
            if(!empty($arrive) && empty($depart)) {
                // DEPART NULL
                $date = $arrive;
                $check = true;
            }
            elseif(empty($arrive) && !empty($depart)) {
                $date = $depart;
                $check = true;
            }
            
            elseif(!empty($arrive) && !empty($depart)) {
                // BOTH ARRIVE AND DEPART NOT NULL
                // call function $roomStatus->getRoomAvailable2($arrive, $depart, $roomType)
                if(bothNotNull($arrive, $depart, $roomType)) {
                    $output .= bothNotNull($arrive, $depart, $roomType);
                }
                else {
                    $output .= '</div> </div>';
                }
            }
            else {
                // BOTH ARRIVE AND DEPART NULL
                // call function $room->getRoomByRoomType($roomType)
                if(bothNull($roomType)) {
                    $output .= bothNull($roomType);
                }
                else {
                    $output .= '</div> </div>';
                }
            }
            if($check) {
                // call function $roomStatus->getRoomAvailable($date, $roomType)
                if(oneNull($date, $roomType)) {
                    $output .= oneNull($date, $roomType);
                }
                else {
                    $output .= '</div> </div>';
                }
            }
            echo $output;
            break;
        case 3:
            $output = '<div class="reservation-room_item">
            <h2 class="reservation-room_name"><a href="#">COUPLE room</a></h2>
            <div class="reservation-room_img">
                <a href="#"><img src="images/couple.jpg" alt="#" class="img-responsive"></a>
            </div>
            <div class="reservation-room_text">
                <div class="reservation-room_desc">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type ...</p>
                    <ul>
                        <li>1 King Bed</li>
                        <li>Free Wi-Fi in all guest rooms</li>
                        <li>Separate sitting area</li>
                    </ul>
                </div>
                <div class="clear"></div>
                <p class="reservation-room_price">
                    <span class="reservation-room_amout">$390</span> / day
                </p>
            </div>
            <div class="reservation-room_package">';
            $check = false;
            if(!empty($arrive) && empty($depart)) {
                // DEPART NULL
                $date = $arrive;
                $check = true;
            }
            elseif(empty($arrive) && !empty($depart)) {
                $date = $depart;
                $check = true;
            }
            
            elseif(!empty($arrive) && !empty($depart)) {
                // BOTH ARRIVE AND DEPART NOT NULL
                // call function $roomStatus->getRoomAvailable2($arrive, $depart, $roomType)
                if(bothNotNull($arrive, $depart, $roomType)) {
                    $output .= bothNotNull($arrive, $depart, $roomType);
                }
                else {
                    $output .= '</div> </div>';
                }
            }
            else {
                // BOTH ARRIVE AND DEPART NULL
                // call function $room->getRoomByRoomType($roomType)
                if(bothNull($roomType)) {
                    $output .= bothNull($roomType);
                }
                else {
                    $output .= '</div> </div>';
                }
            }
            if($check) {
                // call function $roomStatus->getRoomAvailable($date, $roomType)
                if(oneNull($date, $roomType)) {
                    $output .= oneNull($date, $roomType);
                }
                else {
                    $output .= '</div> </div>';
                }
            }
            echo $output;
            break;
        case 4:
            $output = '<div class="reservation-room_item">
            <h2 class="reservation-room_name"><a href="#">STANDARD room</a></h2>
            <div class="reservation-room_img">
                <a href="#"><img src="images/standard.jpg" alt="#" class="img-responsive"></a>
            </div>
            <div class="reservation-room_text">
                <div class="reservation-room_desc">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type ...</p>
                    <ul>
                        <li>1 King Bed</li>
                        <li>Free Wi-Fi in all guest rooms</li>
                        <li>Separate sitting area</li>
                    </ul>
                </div>
                <div class="clear"></div>
                <p class="reservation-room_price">
                    <span class="reservation-room_amout">$290</span> / day
                </p>
            </div>
            <div class="reservation-room_package">';
            $check = false;
            if(!empty($arrive) && empty($depart)) {
                // DEPART NULL
                $date = $arrive;
                $check = true;
            }
            elseif(empty($arrive) && !empty($depart)) {
                $date = $depart;
                $check = true;
            }
            
            elseif(!empty($arrive) && !empty($depart)) {
                // BOTH ARRIVE AND DEPART NOT NULL
                // call function $roomStatus->getRoomAvailable2($arrive, $depart, $roomType)
                if(bothNotNull($arrive, $depart, $roomType)) {
                    $output .= bothNotNull($arrive, $depart, $roomType);
                }
                else {
                    $output .= '</div> </div>';
                }
            }
            else {
                // BOTH ARRIVE AND DEPART NULL
                // call function $room->getRoomByRoomType($roomType)
                if(bothNull($roomType)) {
                    $output .= bothNull($roomType);
                }
                else {
                    $output .= '</div> </div>';
                }
            }
            if($check) {
                // call function $roomStatus->getRoomAvailable($date, $roomType)
                if(oneNull($date, $roomType)) {
                    $output .= oneNull($date, $roomType);
                }
                else {
                    $output .= '</div> </div>';
                }
            }
            echo $output;
            break;
    }

    function oneNull($date, $roomType) {
        $roomStatus = new RoomStatus();
        $amountRoom = "";
        include "../checkBasket.php";
        $result = $roomStatus->getRoomAvailable($date, $roomType);
        if(mysqli_num_rows($result) > 0) {
            while ($fetch_data = mysqli_fetch_assoc($result)) {
                if(in_array($fetch_data['room_id'], $_SESSION['room_id']) === false) {
                $amountRoom .= '<form class="reservation-package_item">
                    <b>Room '.$fetch_data['noroom'].'</b>
                    <a class="btn btn-room" href="save-roombook.php?room_id='.$fetch_data['room_id'].'">BOOK</a>
                </form>';
                }
            }
            $amountRoom .= getRoom($date, $roomType);
            $amountRoom .= '</div> </div>';
            return $amountRoom;
        }
        return false;
    }

    function getRoom($date, $roomType) {
        $roomStatus = new RoomStatus();
        $amountRoom = "";

        include "../checkBasket.php";

        $result = $roomStatus->getRoomAvailable1($date, $roomType);
        if(mysqli_num_rows($result) > 0) {
            while ($fetch_data = mysqli_fetch_assoc($result)) {
                if(in_array($fetch_data['room_id'], $_SESSION['room_id']) === false) {
                    $amountRoom .= '<form class="reservation-package_item">
                        <b>Room '.$fetch_data['noroom'].'</b>
                        <a class="btn btn-room" href="save-roombook.php?room_id='.$fetch_data['room_id'].'">BOOK</a>
                    </form>';
                }
            }
            return $amountRoom;
        }
        return "";
    }

    function bothNotNull($arrive, $depart, $roomType) {
        $roomStatus = new RoomStatus();
        $amountRoom = "";
        include "../checkBasket.php";
        $result = $roomStatus->getRoomAvailable2($arrive, $depart, $roomType);
        if(mysqli_num_rows($result) > 0) {
            while ($fetch_data = mysqli_fetch_assoc($result)) {
                if(in_array($fetch_data['room_id'], $_SESSION['room_id']) === false) {
                $amountRoom .= '<form class="reservation-package_item">
                    <b>Room '.$fetch_data['noroom'].'</b>
                    <a class="btn btn-room" href="save-roombook.php?room_id='.$fetch_data['room_id'].'">BOOK</a>
                </form>';
                }
            }
            $amountRoom .= getRoom2($arrive, $depart, $roomType);
            $amountRoom .= '</div> </div>';
            return $amountRoom;
        }
        return false;
    }

    function getRoom2($arrive, $depart, $roomType) {
        $roomStatus = new RoomStatus();
        $amountRoom = "";
        include "../checkBasket.php";
        $result = $roomStatus->getRoomAvailable3($arrive, $depart, $roomType);
        if(mysqli_num_rows($result) > 0) {
            while ($fetch_data = mysqli_fetch_assoc($result)) {
                if(in_array($fetch_data['room_id'], $_SESSION['room_id']) === false) {
                $amountRoom .= '<form class="reservation-package_item">
                    <b>Room '.$fetch_data['noroom'].'</b>
                    <a class="btn btn-room" href="save-roombook.php?room_id='.$fetch_data['room_id'].'">BOOK</a>
                </form>';
                }
            }
            return $amountRoom;
        }
        return "";
    }

    function bothNull($roomType) {
        $room = new Room();
        $amountRoom = "";
        include "../checkBasket.php";
        $result = $room->getRoomByRoomType($roomType);
        if(mysqli_num_rows($result) > 0) {
            while ($fetch_data = mysqli_fetch_assoc($result)) {
                if(in_array($fetch_data['room_id'], $_SESSION['room_id']) === false) {
                $amountRoom .= '<form class="reservation-package_item">
                    <b>Room '.$fetch_data['noroom'].'</b>
                    <a class="btn btn-room" href="save-roombook.php?room_id='.$fetch_data['room_id'].'">BOOK</a>
                </form>';
                }
            }
            $amountRoom .= '</div> </div>';
            return $amountRoom;
        }
        return false;
    }
?>