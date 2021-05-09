<?php
    class ConnectDataBase {
        private $servername = "localhost";
        private $username = "root";
        private $password = "";
        private $dbname = "db_hotel";

        public function connect() {
            try {
                $conn = new mysqli($this->servername, $this->username, $this->password, $this->dbname);
                return $conn;
            } catch (Exception $e) {
				echo "Connection failed" . $e->getMessage();
            }
        }
    }

    class Room extends ConnectDataBase{

        public function getAllRooms() {
            $result = $this->connect()->query("SELECT * FORM rooms");
            return $result;
        }

        public function getRoomByRoomType($roomType) {
            $result = $this->connect()->query("SELECT * FROM rooms WHERE roomtype_id = '$roomType' ORDER BY noroom ASC");
            return $result;
        }
    }

    class RoomStatus extends ConnectDataBase{
        public function getAllRoomsStatus() {
            $result = $this->connect()->query("SELECT * FROM rooms INNER JOIN roomstatus
                                                    ON rooms.room_id = roomstatus.room_id");
            return $result;
        }

        public function getRoomAvailable($date, $roomType) {
            $result = $this->connect()->query("SELECT room_id FROM roomstatus WHERE arrive < '$date' OR  depart > '$date'");
            return $result;
        }

        // public function getRoomAvailable2($arrive, $depart, $roomType) {
        //     $result = $this->connect()->query("SELECT * FROM rooms 
        //                                             WHERE room_id NOT IN (SELECT room_id FROM roomstatus WHERE '$arrive' < arrive OR '$arrive' > depart)
        //                                             AND room_id NOT IN (SELECT room_id FROM roomstatus WHERE '$depart' < arrive OR '$depart' > depart)
        //                                             AND roomtype_id IN (SELECT roomtype_id FROM rooms WHERE roomtype_id = '$roomType') ORDER BY noroom ASC");
        //     return $result;
        // }
        public function getRoomAvailable1($date, $roomType) {
            $result = $this->connect()->query("SELECT noroom FROM rooms 
                                                    WHERE room_id IN (SELECT room_id FROM roomstatus WHERE arrive > '$date' OR  depart < '$date')
                                                    -- AND ()
                                                    AND roomtype_id IN (SELECT roomtype_id FROM rooms WHERE roomtype_id = '$roomType') ORDER BY noroom ASC");
            return $result;
        }

        public function getRoomAvailable2($arrive, $depart, $roomType) {
            $result = $this->connect()->query("SELECT noroom FROM rooms 
                                                    WHERE room_id IN (SELECT room_id FROM roomstatus WHERE '$arrive' < arrive OR '$arrive' > depart)
                                                    AND room_id IN (SELECT room_id FROM roomstatus WHERE '$depart' < arrive OR '$depart' > depart)
                                                    AND roomtype_id IN (SELECT roomtype_id FROM rooms WHERE roomtype_id = '$roomType') ORDER BY noroom ASC");
            return $result;
        }

        public function getRoomAvailable3($arrive, $depart, $roomType) {
            $result = $this->connect()->query("SELECT noroom FROM rooms 
                                                    WHERE room_id NOT IN (SELECT room_id FROM roomstatus WHERE arrive >= '$arrive' AND depart <= '$depart')

                                                    AND room_id NOT IN (SELECT room_id FROM roomstatus WHERE arrive between '$arrive' AND '$depart' OR depart between '$arrive' and '$depart')
                                                    -- AND room_id IN (SELECT room_id FROM roomstatus WHERE arrive > '$arrive' OR  depart < '$arrive')
                                                    -- AND room_id IN (SELECT room_id FROM roomstatus WHERE arrive > '$depart' OR  depart < '$depart')
                                                    AND roomtype_id IN (SELECT roomtype_id FROM rooms WHERE roomtype_id = '$roomType') ORDER BY noroom ASC");
            return $result;
        }
    }

    // $room = new RoomStatus();
    // $a = array(505, 510);
    // $sql = "SELECT noroom FROM rooms WHERE noroom NOT IN (505, 510)";
    // $result = "Good morning";
    // $result .= getRoom2('2021/03/27', '2021/04/03', 1);
    // echo "Kha <br>";
    // echo "<pre>";
    // print_r($result);
    // // while($row = mysqli_fetch_assoc($result)) {
    // //     print_r($row);


    // function getRoom2($arrive, $depart, $roomType) {
    //     $roomStatus = new RoomStatus();
    //     $amountRoom = "";
    //     $result = $roomStatus->getRoomAvailable3($arrive, $depart, $roomType);
    //     if(mysqli_num_rows($result) > 0) {
    //         while ($fetch_data = mysqli_fetch_assoc($result)) {
    //             echo "inside 2 not null";
    //             $amountRoom .= '<form class="reservation-package_item">
    //                 <b>Room '.$fetch_data['noroom'].'</b>
    //                 <button class="btn btn-room" onclick="window.location.href=save-roombook.php?user_id='.$fetch_data['noroom'].'">BOOK</button>
    //             </form>';
    //         }
    //         $amountRoom .= '</div> </div>';
    //         return $amountRoom;
    //     }
    //     return "";
    // }

        // function getRoom($date, $roomType) {
        //     $roomStatus = new RoomStatus();
        //     $amountRoom = "";
        //     $result = $roomStatus->getRoomAvailable1($date, $roomType);
        //     // echo "oneNull";  
        //     if(mysqli_num_rows($result) > 0) {
        //         while ($fetch_data = mysqli_fetch_assoc($result)) {
        //             $amountRoom .= '<form class="reservation-package_item">
        //                 <b>Room '.$fetch_data['noroom'].'</b>
        //                 <button class="btn btn-room" onclick="window.location.href=save-roombook.php?user_id='.$fetch_data['noroom'].'">BOOK</button>
        //             </form>';
        //         }
        //         return $amountRoom;
        //     }
        //     return "";
        // }

    // }
    // $a = ("Y-m-d H:i:s", $phptime);
    // $arrive = ("Y-m-d H:i:s", $phptime);

    // $a = date("Y-m-d H:i:s", 2021/03/25);
    // $b = date("Y-m-d H:i:s", 2021/03/30);
    // $result = bothNotNull('2021/03/28',1);
    // echo $result;
    // function bothNotNull($arrive, $roomType) {
    //     $roomStatus = new RoomStatus();
    //     $amountRoom = "";
    //     $result = $roomStatus->getRoomAvailable($arrive, $roomType);
    //     echo "2NotNull"; 
    //     if(mysqli_num_rows($result) > 0) {
    //         while ($fetch_data = mysqli_fetch_assoc($result)) {
    //             echo "inside 2 not null";
    //             $amountRoom .= '<form class="reservation-package_item">
    //                 <b>Room '.$fetch_data['room_id'].'</b>
    //                 <button class="btn btn-room" onclick="window.location.href=save-roombook.php?user_id='.$fetch_data['room_id'].'">BOOK</button>
    //             </form>';
    //         }
    //         $amountRoom .= '</div> </div>';
    //         return $amountRoom;
    //     }
    //     echo "false ...";
    //     return false;
    // }

    $arr = array(1, 3, 5);
    echo array_search(3, $arr);

    echo "<pre>";
    print_r($arr);
    array_splice($arr, array_search(3, $arr), 1);
    print_r($arr);
?>