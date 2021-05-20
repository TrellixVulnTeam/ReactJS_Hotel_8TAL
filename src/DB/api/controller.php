<?php

require 'user.php';
require 'room.php';
require 'contact.php';
require 'basket.php';
require 'roomtype.php';
require 'roombook.php';

header("Cache-Control: no-cache, no-store, must-revalidate"); // HTTP 1.1.
header("Pragma: no-cache"); // HTTP 1.0.
header("Expires: 0"); // Proxies.
header("Access-Control-Allow-Origin: *");
header('Content-type: application/json; charset=utf-8');

try{

if(empty($_SERVER['PATH_INFO'])){
    $data['message']="UNKNOWN SOURCE";
    echo json_encode($data);
    die();
}
if ($_SERVER['PATH_INFO'] == '/users')
    $user = new User();
    if ($_SERVER['PATH_INFO'] == '/checklogin')
    $user = new User();
if ($_SERVER['PATH_INFO'] == '/rooms')
    $room = new Room();
if ($_SERVER['PATH_INFO'] == '/contacts')
    $Contact = new Contact();
if ($_SERVER['PATH_INFO'] == '/baskets')
    $Basket = new Basket();
if ($_SERVER['PATH_INFO'] == '/roombooks')
    $RoomBook = new RoomBook();
if ($_SERVER['PATH_INFO'] == '/roomtypes')
    $RoomType = new RoomType();
}
catch(Throwable $e){
    $data['message']="UNKNOWN SOURCE";
    echo json_encode($data);
    die();
}
