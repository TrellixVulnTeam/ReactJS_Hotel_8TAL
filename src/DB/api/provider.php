
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

	
	public function providers(){
		
		 
	} 
	function createRoom()
	{

		
		if ($this->method == 'POST') {
			try{
			
			if(empty($this->params)){
				$this->response(500,"Khong co thong tin");
			}
			else{
				
			$con =new Database;
			if(!isset($this->params['id_user'])|| empty($this->params['id_user']  )){
				$data['message']="Khong co id user";
				$this->response(200,$data);
			}
			if(!isset($this->params['roomtype_id']) ||empty($this->params['roomtype_id']  )){
				$data['message']="Khong co id id roomtype";
				$this->response(200,$data);
			}
			if( !isset($this->params['id_hotel']) || empty($this->params['id_hotel']  )){
				$data['message']="Khong co id hotel";
				$this->response(200,$data);
			}
			if( !isset($this->params['noroom']) || empty($this->params['noroom'] )){
				$data['message']=" Khong co noroom";
				$this->response(200,$data);
			}
		
			$user_id =$this->params['id_user'];
			$id_hotel =$this->params['id_hotel'];
			$roomtype_id =$this->params['roomtype_id'];

			$con->query("select * from providers where user_id= '$user_id'");
			$check=$con->getData();
			if($check==null){
				$this->response(403);
			}
			$con->query("select * from providers where id_hotel='$id_hotel' and user_id='$user_id' LIMIT 1 ");
			$check=$con->getData();
			if($check==null){
				$this->response(404);
			}

			$con->query("select * from roomtypes where roomtype_id='$roomtype_id' and hotel_id='$id_hotel' LIMIT 1");
			$check=$con->getData();
			if($check==null){
				$this->response(404);
			}


			// $roomtype_id=$this->params[''];
			// $noroom=$this->params['noroom'];
			// $img=$this->params['img'];	
			// $status= $this->params['status'];
			// $phone= $this->params['phones'];
			// $con->query("insert into rooms(roomtype_id,noroom,img,status,phone) values('$roomtype_id','$noroom','$img','$status','$phone')");
			 $data['message']="INSERT THANH CONG";
			$this->response(201,$data);
			}
		}catch(Throwable $error){
			$this->response(500);
		}
	}else{
		
		$this->response(405);
	}

		
}

}
?>