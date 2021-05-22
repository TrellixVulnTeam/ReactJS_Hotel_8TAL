<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>UPDATE</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">

    <!-- jQuery library -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>

    <!-- Popper JS -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>

    <!-- Latest compiled JavaScript -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
</head>

<body>
    <?php 
    // Kết nối Database
    require_once('connect.php');
    $id = $_GET['contact_id']; // lấy địa chỉ từ url 
    $laydulieu = mysqli_query($ket_noi, "select * from contacts where contact_id='$id'");  // tạo biến để lưu phương thức lấy tất cả thuộc tính của ID đó
    $row = mysqli_fetch_assoc($laydulieu); //lấy dữ liệu thành hàng của từng ID 
    ?>
    <div class="container">
        <form method="POST">

            <center>
                <h1 class="p-3 mb-2 bg-info text-white"> EDIT USER'S PROFILE </h1>
            </center>
            <td><?php echo $row['contact_id'] ?></td>


            <div>
                <label> Name </label>
                <input type="text" name="name" value="<?php echo $row['name'] ?>">
            </div>

            <br><br>
            <div>
                <label> Email </label>
                <input type="email" name="email" value="<?php echo $row['email'] ?>">
            </div>
            <br><br>
            <div>
                <label> Subject </label>
                <input type="text" name="subject" value="<?php echo $row['subject'] ?>">
            </div>
            <br><br>
            <div>
                <label> Content </label>
                <input type="text" name="content" value="<?php echo $row['content'] ?>">
            </div>
            <div>
                <input class="btn btn-success" type="submit" value="Update" name="update">
            </div>

        </form>
    </div>

    <?php
    $ket_noi = mysqli_connect('localhost', 'root', '', 'db_hotel');
    if (isset($_POST['update'])) {

        $name = $_POST['name'];
        $email = $_POST['email'];
        $subject = $_POST['subject'];
        $content = $_POST['content'];
       
        // Create connection      
        // Check connection
        if ($ket_noi->connect_error) {
            die("Connection failed: " . $ket_noi->connect_error);
        }

        $sql = "update contacts set  name='$name', email='$email', subject='$subject', content = '$content' where contact_id ='$id'";

        if ($ket_noi->query($sql) === TRUE) {
            echo "";
            //   tử động load trang 
            header("Location:main.php");
        } else {
            echo "Error updating record: " . $ket_noi->error;
        }
    }

    ?>
</body>

</html>