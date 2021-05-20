
<?php

require_once '../db/connect.php';
require_once 'restful_api.php';
header("Cache-Control: no-cache, no-store, must-revalidate"); // HTTP 1.1.
header("Pragma: no-cache"); // HTTP 1.0.
header("Expires: 0"); // Proxies.
header("Access-Control-Allow-Origin: *");
class RoomBook extends restful_api
{
	function __construct()
	{
		parent::__construct();
	}
	function roomBooks()
	{
		try{

		
		if ($this->method == 'GET') {
			$con = new Database();
			if (empty($this->params)) {
				$con->query("SELECT * FROM `roombooks`");
				$data = $con->getAllData();
			} else {
				$id = $this->params['roombook_id'];
				$con->query("SELECT * FROM roombooks where roombook_id=$id");
				$data = $con->getData();
			}
			$this->response(200, $data);
		 
		}elseif ($this->method == 'POST') {

			
			if (empty($this->params)) {
				$this->response(500, "Khong co thong tin");
			} else {
				if (empty($this->params['user_id'] || empty($this->params['room_id'])) || empty($this->params['phone'])||empty($this->params['arrive']||empty($this->params['depart']))) {
					$data['message'] = "Vui Long nhap du thong tin";
					$this->response(200, $data);
					die();
				} else {
			
					$user_id=$this->params['user_id'];
					$room_id=$this->params['room_id'];
					$phone=$this->params['phone'];
					$arrive=$this->params['arrive'];
					$depart=$this->params['depart'];
				

					$con =new Database;
					$con->query("select * from users where user_id='$user_id'");
					$check= $con->getData();
					// check khong tim ra tuc la user nay chua ton tai
					if($check==null){
						$data['message']="USER NAY KHONG TON TAI";
						$con->close();
						$this->response(200,$data);
					}
					$con->query("select * from rooms where room_id ='$room_id'");
					$check= $con->getData();
					if($check==null){
						$data['message']="PHONG NAY KHONG TON TAI";
						$con->close();
						$this->response(200,$data);
					}
					if($check['status']!="available"){
						$data['message']="PHONG ROOM "+$check['room_id'] +"NOT available";
						$con->close();
						$this->response(200,$data);
					}
					$status="pending";
					$payment="unpaid";
					$con->query("INSERT INTO roombooks(user_id,room_id,phone,arrive,depart,status,payment) values('$user_id','$room_id','$phone','$arrive','$depart','$status','$payment')");
					// update khi da co nguoi dat phong
					$con->query("UPDATE ROOMS SET status='unavailable' where room_id='$room_id'");
					$data['message']="BOOKROOM Thanh cong";
					$this->response(200,);


				}

			}

		} elseif ($this->method == 'PUT') {
			$id = $this->params['roombook_id'];
			if (empty($id)) {
				$this->response(404, "Khong tim thay id");
			} else {
				if(empty($this->params['status'])||empty($this->params['payment'])){
					$data['message']="THIEU STATUS";
					$this->response(200,$data);
				}
				$status=$this->params['status'];
				$payment=$this->params['payment'];
				$con = new Database;
				$con->query("UPDATE roombooks set status='$status', payment='$payment' where roombook_id= '$id'");
				$con->close();
				$this->response(200);
			}
		} elseif ($this->method == 'DELETE') {

			$id = $this->params['roombook_id'];
			if (empty($id)) {
				$this->response(404, "Khong tim thay id");
			} else {
				$con = new Database;
				$con->query("DELETE from roombooks  where roombook_id='$id'");
			
				
				$this->response(200);
			}
		}
	}

	catch(Throwable $e) {

		$this->response(500, "ERROR");
	}
}

}
?>