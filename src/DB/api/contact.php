
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
			elseif ($this->method == 'POST') {

				if (empty($this->params['name']) || empty($this->params['email'])|| empty($this->params['subject'])||empty($this->params['content']) ) 
				{
					$data['message']="Thieu thong tin";
					$this->response(500,$data);
				}
					$name = $this->params['name'];+
					$email = $this->params['email'];				
					$subject = $this->params['subject'];				
					$content = empty($this->params['content']);				
					$con = new Database;
					$con->query("INSERT INTO CONTACTS VALUES('$name','$email','$subject','$content')");
					
					$data['message']="INSERT THANH CONG";
					$this->response(201,$data);
			}
			
			elseif ($this->method == 'PUT') {				
					$this->response(405);
				

			}
			elseif ($this->method == 'DELETE') {

				// $id = $this->params['id'];
				// if (empty($id)) {
				// 	$this->response(404, "Khong tim thay id");
				// } else {
				// 	//........
				// 	$con = new Database;
				// 	$con->query("select * from user where id='$id'");
				// 	$data = $con->getData();
				// 	if ($data['status'] == 1)
				// 		$status = 0; // 0 tuc la bi block

				// 	else
				// 		$status = 1; // 1 tuc la van con hoat dong		
				// 	$con->query("update user set status='$status' where id='$id'");
				// 	$this->response(200);
				// }
				$this->response(405);
				
			}
		} 
		catch (Throwable $error) {
			$this->response(500);
		}
	}
}
?>