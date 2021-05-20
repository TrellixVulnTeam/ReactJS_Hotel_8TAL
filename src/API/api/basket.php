
<?php

require_once '../db/connect.php';
require_once 'restful_api.php';
header("Cache-Control: no-cache, no-store, must-revalidate"); // HTTP 1.1.
header("Pragma: no-cache"); // HTTP 1.0.
header("Expires: 0"); // Proxies.
header("Access-Control-Allow-Origin: *");
class Basket extends restful_api
{
	function __construct()
	{
		parent::__construct(); 
	}

	function roomtype()
	{
		if (empty($this->params)) {
			$con->query("SELECT * FROM `basket`");
			$data = $con->getAllData();
			//Lay tat ca cac thong tin gio hang
		} else {

			if(empty($this->params['basket_id'])){
				$user_id = $this->params['user_id'];
				$con->query("SELECT * from basket where user_id='$user_id'");
				// Lay tat  cac cac basket cua user nao do
			}
			else{
			$basket_id = $this->params['basket_id'];
			$con->query("SELECT * from basket where basket_id='$basket_id'");
			// Lay ra basket cu the nao do
			}
			$data= $con->getData();
		}
		$this->response(200, $data);		
		}elseif ($this->method == 'POST') {
			$data =array();
			$con = new Database();
			if(empty($this->params)){
				$this->response(500,"Khong co thong tin");	
                $data = $con->getAllData();
			}else{
				$data['message']="Vui Long nhap du thong tin";
				$user_id = $this->params['user_id'];
				$room_id = $this->params['room_id']

				if(empty($user_id|| $room_id)){
					$this->response(200,$data);
				}else{
					$user_id = $this->params['user_id'];
					$room_id = $this->params['room_id']
					$con =new Database;
					$con->query("SELECT * from basket where user_id =$user_id")
					$check=$con->getData();
					if($check==null){
						$con->query("INSERT INTO basket (user_id, room_id) VALUES ('$user_id', '$room_id')");
						$this->response(201);		

					}else{
						$data['message']="Da co trong gio hang cua ban"; 
						$con->close();
						$this->response(200,$data);
					}

				}
				$this->response(200, $data);   		
		} elseif ($this->method == 'PUT') {
			if (empty($id = $this->params['basket_id'])) {
				$this->response(404, "Khong tim thay id");
			} else {
				$con = new Database;
				$con ->query("SELECT * from basket where basket_id = $id")
				$check= $con->getData();
				if($check==null){
					$data['message']="San pham khong co trong gio hang";
					$con->close();
					$this->response(200,$data);
				}else{
				$user_id=$check['user_id'];
				$room_id=$check['room_id'];
					$con->query("UPDATE basket set user_id='$user_id',room_id='$room_id'	
					where user_id='$user_id' AND room_id ='$room_id'"); 
					$con->close();
					$this->response(200);		
				}
			}

		} elseif ($this->method == 'DELETE') {
				$id = $this->params['basket_id']; 
			if (empty($id)) {
				$this->response(500, "Khong tim thay id");
			} else {
				$con = new Database;
				$con->query("SELECT * from basket where basket_id='$basket_id'");
				$check= $con->getData();
				if($check==null){
					$data['message']="Khong co don hang"; // Muốn kiểm tra thử có trong giỏ hàng hay kh, nếu có thì xóa còn không thì báo lỗi
					$con->close();
					$this->response(200,$data);
				}
				else{	
					$user_id = $check['user_id'];
					$con->query("DELETE FROM basket WHERE user_id = '$user_id'");
					$con->close();
					$this->response(200,"$data");
					return;
			}
	}
}
	
}

?>
   
