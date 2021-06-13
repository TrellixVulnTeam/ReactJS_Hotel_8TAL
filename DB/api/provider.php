
<?php

require_once '../db/connect.php';
require_once 'restful_api.php';
header("Cache-Control: no-cache, no-store, must-revalidate"); // HTTP 1.1.
header("Pragma: no-cache"); // HTTP 1.0.
header("Expires: 0"); // Proxies.
header("Access-Control-Allow-Origin: *");
class Provider extends restful_api
{
	function __construct()
	{
		parent::__construct();
	}


	public function verify(){
		$con=new Database;
				if (!isset($this->params['id_user']) || empty($this->params['id_user'])) {
					$data['message'] = "Khong co id user";
					$this->response(200, $data);
				}

					$user_id = $this->params['id_user'];
					// $con->query("select * from providers where user_id= '$user_id'");
					// $check = $con->getAllData();
					// if ($check == null) {
					// 	$this->response(403);
					// }
					$con->query("select * from users where user_id= '$user_id' and role='provider'");
					$check = $con->getAllData();
					if ($check == null) {
						$this->response(403);
					}
			

	}
	public function view()
	{
		if ($this->method == 'GET') {
		try {

				$con=new Database;
				$this->verify();
				$user_id = $this->params['id_user'];

				$sql="SELECT request.*,request.id as id_request,hotel.*,roomtypes.* FROM request
				INNER JOIN rooms on rooms.room_id=request.room_id
				INNER JOIN roomtypes on rooms.roomtype_id=roomtypes.roomtype_id
				INNER JOIN  hotel on roomtypes.hotel_id=hotel.id
				INNER join providers on providers.id_hotel=hotel.id
				WHERE providers.user_id='$user_id'";
				$con->query($sql);
				$data=$con->getAllData();
				$this->response(200,$data);
				
			
		} catch (Throwable $error) {
			$this->response(500,$error);
		}
	}else {

			$this->response(405);
		}
	

	}


	public function checkInKey(){
		if($this->method == 'GET') {
			try {
				$this->verify();
				$con=new Database;
				if (!isset($this->params['key']) || empty($this->params['key'])) {
					$data['message'] = "Khong co key";
					$this->response(200, $data);
				}
				$user_id=$this->params['id_user'];
				$con->query("select * from providers where user_id= '$user_id'");
				$check = $con->getAllData();
				if ($check == null) {
					$data['message'] = "Ban chua tao lien ket voi hotel";
					$this->response(200,$data);
				}

				$key=$this->params['key'];

				$sql="SELECT checkInKey('$key') as checkIn";
				$con->query($sql);
				$check=$con->getData();
				if($con->show_errors){
					$data['message']=$con->getError();
				}
				else{	
						if($check['checkIn']== 1){
							$data['message']="KEY VALID -> success";
						}
						else{
							$data['message']="KEY IS INVALID or NOT FOUND ";
						}
					}
				$this->response(200,$data);
				

			} catch (Throwable $error) {
				$this->response(500,$error);
			}
		} else {

			$this->response(405);
		}
	}
	public function updateRequestStatus(){
		if($this->method == 'PUT') {
			try {
				$this->verify();
				if (!isset($this->params['id_request']) || empty($this->params['id_request'])) {
					$data['message'] = "Khong co id request";
					$this->response(200, $data);
				}
				if (!isset($this->params['status']) || empty($this->params['status'])) {
					$data['message'] = "Khong co status";
					$this->response(200, $data);
				}
				$status=$this->params['status'];
				$id_request=$this->params['id_request'];

				$con=new Database;
				$sql="UPDATE request set request.status='$status' where id='$id_request'";
				$con->query($sql);
				if($con->show_errors){
					$data['message']=$con->getError();
				}
				else{
					$data['message']="CAP NHAT THANH CONG";
				}
				$this->response(200,$data);
				

			} catch (Throwable $error) {
				$this->response(500,$error);
			}
		} else {

			$this->response(405);
		}

	}
	public function getIDRoomType(){
		if($this->method == 'GET') {
			try {
				$this->verify();
				
				$user_id = $this->params['id_user'];

				$con=new Database;
				$sql="SELECT roomtypes.roomtype_id FROM roomtypes
				INNER JOIN  hotel on roomtypes.hotel_id=hotel.id
				INNER join providers on providers.id_hotel=hotel.id
				WHERE providers.user_id='$user_id'";	
				$con->query($sql);
				if($con->show_errors){
					$data['message']=$con->getError();
				}
				else{
					$data=$con->getAllData();
				}
				$this->response(200,$data);
				

			} catch (Throwable $error) {
				$this->response(500,$error);
			}
		} else {

			$this->response(405);
		}

	}
	public function providers()
	{
	}
	function createRoom()
	{


		if ($this->method == 'POST') {
			try {
				if (empty($this->params)) {
					$this->response(500, "Khong co thong tin");
				} else {

					$con = new Database;
					if (!isset($this->params['id_user']) || empty($this->params['id_user'])) {
						$data['message'] = "Khong co id user";
						$this->response(200, $data);
					}
					if (!isset($this->params['roomtype_id']) || empty($this->params['roomtype_id'])) {
						$data['message'] = "Khong co id id roomtype";
						$this->response(200, $data);
					}
				
					if (!isset($this->params['noroom']) || empty($this->params['noroom'])) {
						$data['message'] = " Khong co noroom";
						$this->response(200, $data);
					}

					$user_id = $this->params['id_user'];
				//	$id_hotel = $this->params['id_hotel'];
					$roomtype_id = $this->params['roomtype_id'];

					$con->query("select * from providers where user_id= '$user_id'");
					$check = $con->getData();
					if ($check == null) {
						$this->response(403);
					}
					// $con->query("select * from providers where id_hotel='$id_hotel' and user_id='$user_id' LIMIT 1 ");
					// $check = $con->getData();
					// if ($check == null) {
					// 	$this->response(404);
					// }

					// $con->query("select * from roomtypes where roomtype_id='$roomtype_id' and hotel_id='$id_hotel' LIMIT 1");
					// $check = $con->getData();
					// if ($check == null) {
					// 	$this->response(404);
					// }

					$noroom = $this->params['noroom'];
					$img = isset($this->params['img']) ?  $this->params['img'] :  '';
					$phone = isset($this->params['phone']) ? $this->params['phone'] : '';


					$con->query("insert into rooms(roomtype_id,noroom,img,phone) values('$roomtype_id','$noroom','$img','$phone')");
					if ($con->show_errors) {
						$data['message'] = $con->getError();
						$this->response(200, $data);
					} else {
						$data['message'] = "INSERT THANH CONG";
						$this->response(201, $data);
					}
				}
			} catch (Throwable $error) {
				$this->response(500,$error);
			}
		} else {

			$this->response(405);
		}
	}
}
?>