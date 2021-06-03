
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
                if(!isset($this->params['room_id'])&&isset($this->params['roomtype_id'])){
                    $id=$this->params['roomtype_id'];
                    $con->query("select * from rooms where roomtype_id='$id'");
                    $data = $con->getAllData();
                }
                else{
                $id=$this->params['room_id'];
                $con->query("select * from rooms where room_id='$id'");
                $data = $con->getData();
                }
                
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
			if (empty($this->params['room_id'])) {
				$this->response(404, "Khong tim thay id");
			} else {
				$con = new Database;
				
				
				$noroom=$this->params['noroom'];
				$phone=$this->params['phone'];
				$type=$this->params['roomtype_id'];
				$id=$this->params['room_id'];
				$img=$this->params['img'];
				$con->query("update rooms set noroom='$noroom',img='$img',phone='$phone',roomtype_id='$type' where room_id='$id'"); 
				$con->close();
				$data['message']="UPDATE ".$id." THANH CONG";
				$this->response(200,$data);
			}
		} elseif ($this->method == 'DELETE') {

			if (empty( $this->params['room_id'])) {
				$this->response(404, "Khong tim thay id");
			} else {		
				$id = $this->params['room_id'];

				$con = new Database;
				$status="delete at ".date("d/m/Y");
				$con->query("UPDATE rooms set status='$status' where room_id='$id'");
				$data['message']="DELETE room ".$id." THANH CONG";
				$this->response(200,$data);
			}
		}
	}catch(Throwable $e) {

		$this->response(500, "ERROR");
	}

	}

	function searchRoom(){

		try{	
			if ($this->method == 'GET') {
				$con = new Database();
				if(isset( $this->params['room_id']))
					$id=$this->params['room_id'];
					$con->query("SELECT *
					FROM rooms
					INNER JOIN roomtypes
					ON rooms.roomtype_id = roomtypes.roomtype_id
					WHERE status='available'");
					$data = $con->getAllData();
				}
				$this->response(200, $data);
			 
			}catch(Throwable $e) {

				$this->response(500, "ERROR");
			}
			

	}
	function searchLocation()
	{
		try {


			if ($this->method == 'GET') {
					$con = new Database();
					if(!empty($this->params['location']))$location=$this->params['location'];
					else{
						$data='Khong tim thay dia diem can tim kiem';
						$this->response(200, $data);
					}
					$con->query("SELECT COUNT(*) as totalOfProperties from rooms 
					INNER JOIN roomtypes on roomtypes.roomtype_id=rooms.roomtype_id
					INNER JOIN hotel on hotel.id=roomtypes.hotel_id
					INNER JOIN  hotel_location on hotel_location.id=hotel.id_location
					WHERE hotel_location.location='$location'");
					$data['totalOfProperties'] = $con->getData()['totalOfProperties'];

					$con->query("SELECT MIN(roomtypes.rent) as rentFrom  from roomtypes 
					INNER JOIN hotel on hotel.id=roomtypes.hotel_id 
					inner JOIN hotel_location on hotel_location.id=hotel.id_location 
					WHERE hotel_location.location='$location'");

					$data['rentFrom'] = $con->getData()['rentFrom'];

					$con->query("SELECT AVG(roomtypes.rent) as average from roomtypes 
					INNER JOIN hotel on hotel.id=roomtypes.hotel_id 
					inner JOIN hotel_location on hotel_location.id=hotel.id_location 
					WHERE hotel_location.location='$location'");
					$data['average'] = $con->getData()['average'];
					$data['location'] = $location;
					$con->query("SELECT image from hotel_location where location='$location'");
					$data['image'] = $con->getData()['image'] ;
					$con->query("SELECT hotel.id,hotel.hotel_name from hotel inner JOIN hotel_location on hotel_location.id=hotel.id_location WHERE hotel_location.location='$location'");	
					
					$data['hotel']=$con->getAllData();	
					foreach ($data['hotel'] as $key=> $value) {
						$id=$value['id'];
						$con->query("SELECT roomtypes.roomtype_id,roomtypes.roomtype,roomtypes.rent from roomtypes 
						inner JOIN hotel on hotel.id=roomtypes.hotel_id
						WHERE hotel.id='$id'");	
						$data['hotel'][$key]['roomtypes']= $con->getAllData();					
					}
				$this->response(200, $data);
			} 
        }	
        catch (Throwable $error) {
			$this->response(500);
		}	

    }
}
?>