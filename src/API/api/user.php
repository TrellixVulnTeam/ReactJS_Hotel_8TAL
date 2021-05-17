
<?php

require_once '../db/connect.php';
require_once 'restful_api.php';
header("Cache-Control: no-cache, no-store, must-revalidate"); // HTTP 1.1.
header("Pragma: no-cache"); // HTTP 1.0.
header("Expires: 0"); // Proxies.
header("Access-Control-Allow-Origin: *");
class User extends restful_api
{
	function __construct()
	{
		parent::__construct(); 
	}
	function user()
	{
		if ($this->method == 'GET') {
			$con = new Database();
			if (empty($this->params)) {
				$con->query("SELECT * FROM `users`");
				$data = $con->getAllData(); 
			} else {
				$data = $con->getData(); 
			}
			$this->response(200, $data);
		 
		}elseif ($this->method == 'POST') {
			$conn = new Database();
			if(empty($this->params)){
					$this->response(500,"Khong co thong tin");
			}else{	
				$con->query("INSERT INTO users (name, email, password)
				             values('$name', '$email', '$password'");
			}
			$this->response(200,$data);

		} elseif ($this->method == 'PUT') {
			if (empty($id = $this->params['user_id'])) {
				$this->response(404, "Khong tim thay id");
			} else {
				$con = new Database;
				 $con->query("UPDATE users set name='$name',email='$email',password='$password'			
				 where user_id='$id'");
				$con->close();
				$this->response(200);
			}

		} elseif ($this->method == 'DELETE') {
				$id = $this->params['user_id']; 
			if (empty($id)) {
				$this->response(404, "Khong tim thay id");
			} else {
				$con = new Database;
				$con->query("SELECT * from users where user_id='$id'");
				$data = $con->getData();
				if ($data['status'] == 1){
					$status = 0; // 0 tuc la bi block
				}else{
					$status = 1; // 1 tuc la van con hoat dong		
				$con->query("DELETE * from users where status='$status' where user_id='$id'");// Còn hoạt động nên mới xóa đc pk?
				$this->response(200);
				}
			}
		}
	}
}
$User = new User(); 
    
?>
   
