
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
				$con->query("SELECT * FROM `basket`");
				$data = $con->getAllData();
			} else {
				$id=$this->params['room_id'];
				$con->query("select * from room where room_id='$id'");
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
			$this->response(201,print_r($this->params));
			}
		}catch(Throwable $error){
			$this->response(500);
		}







		} elseif ($this->method == 'PUT') {
			if (empty($id = $this->params['id'])) {
				$this->response(404, "Khong tim thay id");
			} else {
				$con = new Database;


				// Tien hanh update ne Sen 

				// $con->query("update basket set name='$name',quantity='$quantity',
				// subtitle='$subtitle',summary='$summary',
				// type='$type',price='$price',discount='$discount'
				// where id='$id'"); 



				$con->close();
				$this->response(200);
			}
		} elseif ($this->method == 'DELETE') {

			$id = $this->params['id'];
			if (empty($id)) {
				$this->response(404, "Khong tim thay id");
			} else {
				//........
				$con = new Database;
				$con->query("select * from user where id='$id'");
				$data = $con->getData();
				if ($data['status'] == 1)
					$status = 0; // 0 tuc la bi block

				else
					$status = 1; // 1 tuc la van con hoat dong		
				$con->query("update user set status='$status' where id='$id'");
				$this->response(200);
			}
		}
	}catch(Throwable $e) {

		$this->response(500, "ERROR");
	}

	}
}
?>