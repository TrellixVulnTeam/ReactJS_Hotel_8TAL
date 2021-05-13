rcc
	class Rooms
	{
		private $servername = "localhost";
		private $username   = "root";
		private $password   = "";
		private $database   = "db_hotel";
		public  $con;


		// Database Connection 
		public function __construct()
		{
		    $this->con = new mysqli($this->servername, $this->username,$this->password,$this->database);
		    if(mysqli_connect_error()) {
			 trigger_error("Failed to connect to MySQL: " . mysqli_connect_error());
		    }else{
			return $this->con;
		    }
		}

		// Insert rooms data into rooms table
		public function insertData()
		{
			$roomtype_id = $_POST['roomtype_id'];
			$noroom = $this->con->real_escape_string($_POST['noroom']);
			$status = $this->con->real_escape_string($_POST['status']);
            $phone = $this->con->real_escape_string($_POST['phone']);
			if(isset($_FILES['img'])){
				$file_name = $_FILES['img']['name'];
				$file_size = $_FILES['img']['size'];
				$file_tmp = $_FILES['img']['tmp_name'];
				$file_ext=strtolower(end(explode('.',$file_name)));
				$expensions= array("jpeg","jpg","png");
				
				if(in_array($file_ext,$expensions)===false){
					echo "File chỉ hỗ trợ .jpeg, .jpg, .png";
				}
				else
				if($file_size > 2097152) {
					echo 'Kích thước file không được lớn hơn 2MB';
				}
				else{
					unset($_SESSION['err']);
					move_uploaded_file($file_tmp,"C:/xampp/htdocs/Image/".$file_name); 
					$image='/Image/'.$file_name;
					$query="INSERT INTO rooms(roomtype_id,noroom,img,status,phone) VALUES($roomtype_id,$noroom,'$image','$status', '$phone')";
					$sql = $this->con->query($query);

					if ($sql==true) {
						header("Location:rooms.php?msg1=insert");
					}else{
						echo "Registration failed try again!";
					}
				}
			}
		}

		// Fetch rooms records for show listing
		public function displayData()
		{
		    $query = "SELECT * FROM rooms";
		    $result = $this->con->query($query);
		if ($result->num_rows > 0) {
		    $data = array();
		    while ($row = $result->fetch_assoc()) {
		           $data[] = $row;
		    }
			 return $data;
		}else{
			 echo "No found records";
		    }
		}

		// Fetch single data for edit from rooms table
		public function displyaRecordById($room_id)
		{
		    $query = "SELECT * FROM rooms WHERE room_id = $room_id";
		    $result = $this->con->query($query);
		if ($result->num_rows > 0) {
			$row = $result->fetch_assoc();
			return $row;
		}else{
			// echo "Record not found";
		    }
		}

		// Update room data into rooms table
		public function updateRecord()
		{
			$room_id=$_GET['editId'];
			$file_name=$_FILES['img']['name'];
			
			$roomtype_id = $_POST['roomtype_id'];
			$noroom = $_POST['noroom'];
			
            $status = $this->con->real_escape_string($_POST['status']);
            $phone = $this->con->real_escape_string($_POST['phone']);
		if (!empty($room_id)){
			if(strlen($file_name)>0){
				$file_size = $_FILES['img']['size'];
				$file_tmp = $_FILES['img']['tmp_name'];
				$file_ext=strtolower(end(explode('.',$file_name)));
				$expensions= array("jpeg","jpg","png");
				
				if(in_array($file_ext,$expensions)===false){
					echo "File chỉ hỗ trợ .jpeg, .jpg, .png";
				}
				else
				if($file_size > 2097152) {
					echo 'Kích thước file không được lớn hơn 2MB';
				}
				else{
					move_uploaded_file($file_tmp,"C:/xampp/htdocs/Image/".$file_name);
					$image='/Image/'.$file_name;
					$query = "UPDATE rooms SET roomtype_id = $roomtype_id, noroom = $noroom, img = '$image', status= '$status',phone ='$phone'  WHERE room_id  = $room_id";
					$sql = $this->con->query($query);
					if ($sql==true) {
						header("Location:rooms.php?msg2=update");
					}else{
						echo "Registration updated failed try again!";
					}
					}
				}
		else{
				$query = "UPDATE rooms SET roomtype_id = $roomtype_id, noroom = $noroom,  status= '$status',phone ='$phone'  WHERE room_id  = $room_id";

				$sql = $this->con->query($query);
				if ($sql==true) {
					header("Location:rooms.php?msg2=update");
				}else{
					echo "Registration updated failed try again!";
				}
			}
			
		}
	}

		// Delete room data from rooms table
		public function deleteRecord($room_id )
		{
		    $query = "DELETE FROM rooms WHERE room_id  = $room_id";
		    $sql = $this->con->query($query);
		if ($sql==true) {
			header("Location:rooms.php?msg3=delete");
		}else{
			echo "Record does not delete try again";
		    }
		}
		}
		if(array_key_exists('delete', $_POST)){
			$roomObj = new Rooms();
			$id=explode('-',$_POST['delete']) ;
			$room_id=$id[0];
			if($id[1]=="true"){
				$roomObj->deleteRecord($room_id);
			}

			
		}
		if(array_key_exists('deletebooking', $_POST)){
			$roomObj = new Rooms();
			$id=$_POST['deletebooking'];
			$sql="delete from roombooks where roombook_id=$id";
				$roomObj->con->query($sql);
		}

		if(array_key_exists('deleteUser', $_POST)){
			$roomObj = new Rooms();
			$id=$_POST['deleteUser'];
			$sql="delete from users where user_id=$id";
			
			$roomObj->con->query($sql);
		}

		if(array_key_exists('updatebook', $_POST)){
			$roomObj = new Rooms();
			$id=$_POST['updatebook'];
			$status=$_POST['status'];
			$payment=$_POST['payment'];
			$sql="update roombooks set status='$status', payment='$payment' where roombook_id=$id";
			echo $sql;
			if($roomObj->con->query($sql))
			header("location: booking.php");
		}
		if(array_key_exists('updateuser', $_POST)){
			$roomObj = new Rooms();
			$id=$_POST['updateuser'];
			$role=$_POST['role'];
			$password=$_POST['password'];
			$status=$_POST['status'];
		
				$sql="update users set status='$status', password='$password' where user_id=$id";
				if($roomObj->con->query($sql))
				header("location: users.php");
		}
		
?>