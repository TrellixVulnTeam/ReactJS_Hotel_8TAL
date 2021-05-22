<?php
    class ConnectDataBase {
        private $servername = "localhost";
        private $username = "root";
        private $password = "";
        private $dbname = "db_hotel";
        
        // public function __construct() {
        //     $this->conn = new mysqli($this->servername, $this->username, $this->password, $this->dbname);
        // }

        public function connect() {
            $conn = new mysqli($this->servername, $this->username, $this->password, $this->dbname);
            // return $conn;
            if(mysqli_connect_error()) {
                trigger_error("Failed to connect to MySQL: " . mysqli_connect_error());
               }else{
                return $conn;
               }
        }
    }

    class User extends ConnectDataBase{
        public function getAllUsers() {
            $result = $this->connect()->query("SELECT * FORM users");
            return $result;
        }

        public function insertUser($name, $email, $password, $code, $status) {
            $result = $this->connect()->query("INSERT INTO users (name, email, password, code, status, role)
            values('$name', '$email', '$password', '$code', '$status', 'admin')");
            return $result;
        }

        public function getUserByEmail($email) {
            $result = $this->connect()->query("SELECT * FROM users WHERE email = '$email'");
            return $result;
        }

        public function checkCode($code) {
            $result = $this->connect()->query("SELECT * FROM users WHERE code = $code");
            return $result;
        }

        public function updateOtp($code) {
            $result = $this->connect()->query("UPDATE users SET code = 0, status = 'verified' WHERE code = $code");
            return $result;
        }
        public function setOtp($code, $email) {
            $result = $this->connect()->query("UPDATE users SET code = '$code' WHERE email = '$email'");
            return $result;
        }

        public function updatePassword($password, $email) {
            $result = $this->connect()->query("UPDATE users SET code = 0, password = '$password' WHERE email = '$email'");
            return $result;
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

        public function getRoomByRoomID($room_id) {
            $result = $this->connect()->query("SELECT * FROM rooms WHERE room_id = '$room_id'");
            return $result;
        }
        
        public function getIdRoom($noroom) {
            $result = $this->connect()->query("SELECT room_id FROM rooms WHERE noroom = '$noroom'");
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
            $result = $this->connect()->query("SELECT * FROM rooms 
                                                    WHERE room_id NOT IN (SELECT room_id FROM roomstatus WHERE arrive < '$date' OR  depart > '$date')
                                                    -- AND ()
                                                    AND roomtype_id IN (SELECT roomtype_id FROM rooms WHERE roomtype_id = '$roomType') ORDER BY noroom ASC");
            return $result;
        }

        public function getRoomAvailable1($date, $roomType) {
            $result = $this->connect()->query("SELECT * FROM rooms 
                                                    WHERE room_id IN (SELECT room_id FROM roomstatus WHERE arrive > '$date' OR  depart < '$date')
                                                    -- AND ()
                                                    AND roomtype_id IN (SELECT roomtype_id FROM rooms WHERE roomtype_id = '$roomType') ORDER BY noroom ASC");
            return $result;
        }

        public function getRoomAvailable2($arrive, $depart, $roomType) {
            $result = $this->connect()->query("SELECT * FROM rooms 
                                                    WHERE room_id NOT IN (SELECT room_id FROM roomstatus WHERE '$arrive' < arrive OR '$arrive' > depart)
                                                    AND room_id NOT IN (SELECT room_id FROM roomstatus WHERE '$depart' < arrive OR '$depart' > depart)
                                                    AND roomtype_id IN (SELECT roomtype_id FROM rooms WHERE roomtype_id = '$roomType') ORDER BY noroom ASC");
            return $result;
        }

        public function getRoomAvailable3($arrive, $depart, $roomType) {
            $result = $this->connect()->query("SELECT * FROM rooms 
                                                    WHERE room_id IN (SELECT room_id FROM roomstatus WHERE '$arrive' < arrive OR '$arrive' > depart)
                                                    AND room_id IN (SELECT room_id FROM roomstatus WHERE '$depart' < arrive OR '$depart' > depart)
                                                    AND roomtype_id IN (SELECT roomtype_id FROM rooms WHERE roomtype_id = '$roomType') ORDER BY noroom ASC");
            return $result;
        }
    }

    class RoomType extends ConnectDataBase {
        public function getRoomTypeByID($roomType_id) {
            $result = $this->connect()->query("SELECT * FROM roomtypes WHERE roomtype_id = '$roomType_id'");
            return $result;
        }
    }

    // class RoomBook extends ConnectDataBase{
    //     public function insertRoomBook() {
    //         $result = $this->connect()->query("");
    //         return $result;
    //     }
    // }

    class Basket extends ConnectDataBase {
        public function insertBasket($user_id, $room_id) {
            $result = $this->connect()->query("INSERT INTO basket (user_id, room_id) VALUES ('$user_id', '$room_id')");
            return $result;
        }

        public function getBasketByUserID($user_id) {
            $result = $this->connect()->query("SELECT * FROM basket WHERE user_id = '$user_id'");
            return $result;
        }

        public function deleteBasket($basket_id) {
            $result = $this->connect()->query("DELETE FROM basket WHERE basket_id = '$basket_id'");
            return $result;
        }

        public function getBasketByID($basket_id) {
            $result = $this->connect()->query("SELECT * FROM basket WHERE room_id = '$basket_id'");
            return $result;
        }
    }
?>