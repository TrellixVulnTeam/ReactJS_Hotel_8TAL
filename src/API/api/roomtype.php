
<?php

require_once '../db/connect.php';
require_once 'restful_api.php';
header("Cache-Control: no-cache, no-store, must-revalidate"); // HTTP 1.1.
header("Pragma: no-cache"); // HTTP 1.0.
header("Expires: 0"); // Proxies.
header("Access-Control-Allow-Origin: *");
class RoomType extends restful_api
{
	function __construct()
	{
		parent::__construct(); 
	}

	function roomtype()
	{
		if ($this->method == 'GET') {
			$data = array();
			$con = new Database();
			if (empty($this->params)) {
				$con->query("SELECT * FROM `roomtypes`");
				$data = $con->getAllData(); 
			} else {
				$data = $con->getData(); 
			}
			$this->response(200, $data);
		 
		}elseif ($this->method == 'POST') {
			$data =array();
			$con = new Database();
			if(empty($this->params)){
				$this->response(500,"Khong co thong tin");	
                $data = $con->getAllData();
			}else{
				$con->query("INSERT INTO roomtypes(roomtype, rent, quantity) VALUES ('$roomtype', '$rent', '$quantity')");
			}
			$this->response(200, $data);
			
		} elseif ($this->method == 'PUT') {
			if (empty($id = $this->params['roomtype_id'])) {
				$this->response(404, "Khong tim thay id");
			} else {
				$con = new Database;
				$con->query("UPDATE roomtypes set romtype='$roomtype',rent='$rent',quantity='$quantity'	
				where roomtype_id='$roomtype_id'"); 
				$con->close();
				$this->response(200);		
			}

		} elseif ($this->method == 'DELETE') {
				$id = $this->params['roomtype_id']; 
			if (empty($id)) {
				$this->response(404, "Khong tim thay id");
			} else {
				$con = new Database;
				$con->query("SELECT * from roomtypes where roomtype='$roomtype_id'");
				$data = $con->getData();
				$con->query("DELETE * from roomtypes where roomtype='$roomtype_id'");
				$this->response(200);
			}
		}
	}
}
$Roomtype = new RoomType(); 
    
?>
   
