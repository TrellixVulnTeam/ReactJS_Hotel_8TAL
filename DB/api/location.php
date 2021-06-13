
<?php

require_once '../db/connect.php';
require_once 'restful_api.php';
header("Cache-Control: no-cache, no-store, must-revalidate"); // HTTP 1.1.
header("Pragma: no-cache"); // HTTP 1.0.
header("Expires: 0"); // Proxies.
header("Access-Control-Allow-Origin: *");
class Location extends restful_api
{
	function __construct()
	{
		parent::__construct();
	}
	function locations()
	{
		
		if ($this->method == 'GET') {
			$con = new Database();
            if (empty($this->params)) {
                $con->query("SELECT * FROM `hotel_location`");
                $data = $con->getAllData();
            } else {
               
                if(isset($this->params['location'])&&!empty($this->params['location'])){
                    $location=$this->params['location'];
                    $con->query("select * from hotel_location where location='$location'");
                    $data = $con->getData();
                }
                
                }
                
            }
			$this->response(200, $data);
	
	

    }
    function hotels()
	{
		
		if ($this->method == 'GET') {
			$con = new Database();
            if (empty($this->params)) {
                $con->query("SELECT * FROM `hotel`");
                $data = $con->getAllData();
                $this->response(200,$data);

            } else {
               
                if(isset($this->params['location'])&&!empty($this->params['location'])){

                    $location=$this->params['location'];
                    $con->query("select hotel.* from hotel
                    inner JOIN hotel_location on hotel_location.id=hotel.id_location
                    where location='$location'");
                    $data = $con->getAllData();
                    $this->response(200,$data);
                }
                if(isset($this->params['id_hotel'])&&!empty($this->params['id_hotel'])){
                    $hotel=$this->params['id_hotel'];
                    $con->query("select roomtypes.* from roomtypes
                    inner JOIN hotel on roomtypes.roomtype_id=hotel.id
                    where hotel_id='$hotel'");
                    $data = $con->getAllData();
                    $this->response(200, $data);

                }
                
                }
                
            }
	
	

    }

}
?>