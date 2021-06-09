
<?php

require_once '../db/connect.php';
require_once 'restful_api.php';
header("Cache-Control: no-cache, no-store, must-revalidate"); // HTTP 1.1.
header("Pragma: no-cache"); // HTTP 1.0.
header("Expires: 0"); // Proxies.
header("Access-Control-Allow-Origin: *");
header('Content-type: application/json; charset=utf-8');
class Admin extends restful_api
{
	function __construct()
	{
		parent::__construct();
	}
    public function verify(){
		    $con=new Database;
				if (!isset($this->params['id_user']) || empty($this->params['id_user'])) {
					$data['message'] = "Khong co id user";
					$this->response(200, $data);
				}

					$user_id = $this->params['id_user'];
					
					$con->query("select * from users where user_id= '$user_id' and role='admin'");
					$check = $con->getAllData();
					if ($check == null) {
						$this->response(403);
					}
			

	}
    public function admins(){
        $this->verify();

    }
	 public function viewProvider(){
        

        if($this->method='GET'){
            $this->verify();
            $con= new Database;
            $sql="SELECT provider.* FROM `history`
            INNER JOIN rooms on rooms.room_id=history.room_id
            INNER JOIN roomtypes on roomtypes.roomtype_id=rooms.roomtype_id
            INNER JOIN hotel on hotel.id=roomtypes.hotel_id
            INNER JOIN providers on providers.id_hotel=hotel.id";


        }
        else{
            $this->response(405);
        }
    }

    public function createProviderAccount(){
        
        if($this->method=='POST'){
            $this->verify();

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
                        $con->query("select * from users where email ='$email'");
                        $check= $con->getData();
                        if($check==null){
                        $con->query("insert into users(name,email,password,role) values('$name','$email','$password','provider') ");
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
        }
        else{
            $this->response(405);
        }
    }

    public function statistical(){
        
        if($this->method='GET'){
            $this->verify();
            $con= new Database;
            $sql=" select payment.* from payment";
            $con->query($sql);
            $data=$con->getAllData();
            $this->response(200,$data);
        }
        else{
            $this->response(405);
        }
    }


}   

?>