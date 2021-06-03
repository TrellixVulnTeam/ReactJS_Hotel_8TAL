
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

}
?>