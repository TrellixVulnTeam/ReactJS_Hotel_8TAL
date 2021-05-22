<?php require_once('connect.php'); ?>

<!DOCTYPE html>

<head>
    <title> QUAN LY USERS </title>
    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">

    <!-- jQuery library -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>

    <!-- Popper JS -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>

    <!-- Latest compiled JavaScript -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
</head>

<body>

    <div class="container">
        <div class="panel panel-primary">
            <div class="panel-heading">
                <center style="color: blue;">
                    <h1 class="p-3 mb-2 bg-info text-white"> FROFILE USERS </h1>
                </center>
            </div>
            <div class="panel-body">

                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th> CONTACT_ID </th>
                            <th> NAME </th>
                            <th> EMAIL </th>
                            <th> SUBJECT </th>
                            <th> CONTENT </th>
                            <th> </th>
                            <th> </th>
                        </tr>
                    </thead>

                    <button type="button" class="btn btn-success" data-toggle="modal" data-target="#dialog1">
                        ADD
                    </button><br><br>
                    <div class="modal fade" id="dialog1" role="dialog" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <center>
                                        <h5 class="p-3 mb-2 bg-gradient-info text-white"> MANAGERMENT USERS </h5>
                                    </center>
                                </div>
                                <form action="" method="POST">
                                    <br><br>
                                    <div>
                                        <label> Name </label>
                                        <input type="text" name="name" placeholder="Name....">
                                    </div>
                                 
                                    <br><br>
                                    <div>
                                        <label> Email </label>
                                        <input type="email" name="email" placeholder="Email....">
                                    </div>
                                    <br><br>
                                    <div>
                                        <label> Subject </label>
                                        <input type="text" name="subject" placeholder="Subject....">
                                    </div>
                                    <br><br>
                                    <div>
                                        <label> Content </label>
                                        <input type="text" name="content" placeholder="Content....">
                                    </div>
                                    <div class="modal-footer">

                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                        <button type="submit" name="btn" class="btn btn-success	">Save</button>

                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                    <!-- Thêm users -->
                    <?php

                    // $ket_noi = mysqli_connect('localhost', 'root', '', 'quanlysinhvien')  or die(" ket noi that bai ");
                    if (isset($_POST['btn'])) {
                        if (empty($_POST['name']) && empty($_POST['email']) && empty($_POST['subject'] && empty($_POST['content']))) {
                            echo " Please insert, Something is an empty ";
                        } else {

                            $name = $_POST['name'];
                            $email = $_POST['email'];
                            $subject = $_POST['subject'];
                            $content = $_POST['content'];
                            $sql = "INSERT into contacts (name,email,subject,content) values ('$name','$email','$subject','$content')";
                            if (mysqli_query($ket_noi, $sql)) {
                                echo "";
                                header("Location:main.php"); //   tử động load trang 
                            } else {
                                echo "Không thanh công được";
                            }
                        }
                    }
                    $query = mysqli_query($ket_noi, "select * from contacts");
                    ?>

                    <!-- thêm users -->

                    <!-- In ra Thành bảng  -->
                    <?php
                    while ($row = mysqli_fetch_assoc($truyvan)) {
                    ?>

                        <tbody>

                            <tr>
                                <td><?php echo $row['contact_id'] ?></td>
                                <td><?php echo $row['name'] ?></td>
                                <td><?php echo $row['email'] ?></td>
                                <td><?php echo $row['subject'] ?></td>
                                <td><?php echo $row['content'] ?></td>
                                <td><a class="btn btn-warning" href="edit.php?contact_id=<?php echo $row['contact_id'] ?>">Edit</a></td>
                                <td><a class="btn btn-danger" href="delete.php?contact_id=<?php echo $row['contact_id'] ?>">Delete</a></td>
                            </tr>
                        <?php } ?>

                        </tbody>
                </table>
            </div>
        </div>
    </div>
</body>

</html>