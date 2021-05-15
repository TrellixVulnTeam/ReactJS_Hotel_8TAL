<?php

require 'user.php';
require 'room.php';
require 'contact.php';
require 'basket.php';
require 'roomtype.php';
require 'roombook.php';





if ($_SERVER['PATH_INFO'] == '/users')
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
