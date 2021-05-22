<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DELETE</title>
</head>
<body>
    <?php
         require_once('connect.php');
        if(isset($_GET['contact_id'])) //  LẤY GIÁ TRỊ TỪ SOURCE ĐƯỢC GỬI
        {
            $id = $_GET['contact_id']; // sử dụng $_GET để lấy giá trị từ source 
            $sql = "DELETE from contacts where contact_id ='$id'"; // tạo biến để lưu phương thức xóa với where
        if (mysqli_query($ket_noi,$sql)) 
        {           
            header("Location:main.php");      
        } 
        else 
        {
            echo "Error updating record:". $ket_noi -> error;
        }
        
       
        }
    ?>
</body>
</html>