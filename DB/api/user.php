
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
	
	function users()
	{
		if ($this->method == 'GET') {
			$con = new Database();
			if (empty($this->params)) {
				$con->query("SELECT * FROM `users`");
				$data = $con->getAllData();
			} else {
			
				$id =$this->params['user_id'];
				$con->query("select * from users where user_id='$id'");
				$data = $con->getData();
			}
			$this->response(200, $data);
		} elseif ($this->method == 'POST') {
			
			
			try{
			
			
			if(empty($this->params)){
				$this->response(500,"Khong co thong tin");
			}
			else{
				$data['message']="Vui Long nhap du thong tin";
				if(empty($this->params['email']||empty($this->params['name']))||empty($this->params['password'])){
					$this->response(200,$data);

				}
				else{
					$email= $this->params['email'];
					$password= $this->params['password'];
					$name= $this->params['name'];
					$con =new Database;
					//check co trong database chua
					$con->query("select * from users where email ='$email'");
					$check= $con->getData();
					// select bang null co nghia la ko trung voi user nao
					if($check==null){
					$con->query("insert into users(name,email,password) values('$name','$email','$password') ");
					$this->response(201);
					}
					else{
						$data['message']="Tai khoan hoac email da duoc dang ky";
						$this->response(200,$data);
					}

					
				}
			}
		}catch(Throwable $error){
			$this->response(500);
		}
		} elseif ($this->method == 'PUT') {
				
			if (empty( $this->params['user_id'])) {
				$this->response(500, "Thieu id");
			} else {
				$id = $this->params['user_id'];
				$con = new Database;
				$con->query("SELECT * from users where user_id='$id'");
				$check= $con->getData();
				if($check==null){
					$data['message']="Tai khoan khong ton tai";
					$con->close();
					$this->response(200,$data);
				}
			if(empty($this->params['role'])||empty($this->params['password']))
				{
				$this->response(200,"Nothing to update");
				}					
			$password = $this->params['password'];
			$role = $this->params['role'];
			
			$con->query("UPDATE users set password= '$password',role='$role' where user_id='$id'");
			$con->close();
			$data['message']="Update thành công";
			$this->response(200,$data);

			
		}

		} elseif ($this->method == 'DELETE') {
			$id = $this->params['user_id']; 
			if (empty($id)) {
				$this->response(500, "Thieu id");
			} else {
				$con = new Database;
				$con->query("SELECT * from users where user_id='$id'");
				$check= $con->getData();
				if($check==null){
					$data['message']="Tai khoan khong ton tai";
					$con->close();
					$this->response(200,$data);
				}
				else{				
				$name=$check['name'];
				$email=$check['email'];
				if( $name=='admin' ||$email=='admin@gmail.com'){
					$con->close();
					$this->response(200,"Khong the xoa tai khoan admin");
					return;
				}
			}
				$con->query("DELETE from users  where user_id='$id'");//ko status la block hay chua thoi
				$this->response(200);
		}
	}
}
	}


?>