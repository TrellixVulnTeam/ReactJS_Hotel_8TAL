
<?php

require_once '../db/connect.php';
require_once 'restful_api.php';
header("Cache-Control: no-cache, no-store, must-revalidate"); // HTTP 1.1.
header("Pragma: no-cache"); // HTTP 1.0.
header("Expires: 0"); // Proxies.
header("Access-Control-Allow-Origin: *");
class Room extends restful_api
{
	function __construct()
	{
		parent::__construct();
	}
	function rooms()
	{
		try{

		
		if ($this->method == 'GET') {

			$con = new Database();
			if (empty($this->params)) {
				$con->query("SELECT * FROM `rooms`");
				$data = $con->getAllData();
			} else {
				$id=$this->params['room_id'];
				$con->query("select * from rooms where room_id='$id'");
				$data = $con->getData();
			}
			$this->response(200, $data);
		 
		}elseif ($this->method == 'POST') {
			$data=array();
			try{
			
			if(empty($this->params)){
				$this->response(500,"Khong co thong tin");
			}
			else{
				
			$con =new Database;
			$roomtype_id=$this->params['roomtype_id'];
			$noroom=$this->params['noroom'];
			$img=$this->params['img'];	
			$status= $this->params['status'];
			$phone= $this->params['phones'];
			$con->query("insert into rooms(roomtype_id,noroom,img,status,phone) values('$roomtype_id','$noroom','$img','$status','$phone')");
			$data['message']="INSERT THANH CONG";
			$this->response(201,$data);
			}
		}catch(Throwable $error){
			$this->response(500);
		}

		} elseif ($this->method == 'PUT') {
				$id=$this->params['room_id'];
				$noroom=$this->params['noroom'];
				$phone=$this->params['phone'];
				$type=$this->params['roomtype_id'];
				
				$img=$this->params['img'];
			if (empty($id)) {
				$this->response(404, "Khong tim thay id");
			} else {
				$con = new Database;	
				$con->query("update rooms set noroom='$noroom',img='$img',phone='$phone',roomtype_id='$type' where room_id='$id'"); 
				$con->close();
				$data['message']="UPDATE ".$id." THANH CONG";
				$this->response(200,$data);
			}
		} elseif ($this->method == 'DELETE') {
			
			$con = new Database;
                        $id = $this->params['room_id'];
			if (empty($id)) {
				$this->response(404, "Khong tim thay id a");
			} else {		
				$status="delete at".date(" d/m/Y");
				$con->query("UPDATE rooms set status='$status' where room_id='$id'");
				$data['message']="DELETE room ".$id." THANH CONG";
				$this->response(200,$data);
			}
		}
	}catch(Throwable $e) {

		$this->response(500, "ERROR");
	}

	}
}
?>