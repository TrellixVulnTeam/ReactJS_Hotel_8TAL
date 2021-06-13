
<?php

require_once '../db/connect.php';
require_once 'restful_api.php';
header("Cache-Control: no-cache, no-store, must-revalidate"); // HTTP 1.1.
header("Pragma: no-cache"); // HTTP 1.0.
header("Expires: 0"); // Proxies.
header("Access-Control-Allow-Origin: *");
class Contact extends restful_api
{
	function __construct()
	{
		parent::__construct();
	}
	function contacts()
	{
		try {


			if ($this->method == 'GET') {
				$con = new Database();
				if (empty($this->params)) {
					$con->query("SELECT * FROM `contacts`");
					$data = $con->getAllData();
				} else {
					$id = $this->params['contact_id'];
					$con->query("select * from room where contact_id='$id'");
					$data = $con->getData();
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