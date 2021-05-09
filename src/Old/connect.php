<?php
    $ket_noi = mysqli_connect('localhost', 'root','', 'db_hotel')  or die(" ket noi that bai ");
    $sql = " select * from contacts";
    $truyvan = mysqli_query($ket_noi, $sql);
    if (!$truyvan) {
        die('Câu truy thất bại ');
    } else {
        echo ("");
    }
    ?>