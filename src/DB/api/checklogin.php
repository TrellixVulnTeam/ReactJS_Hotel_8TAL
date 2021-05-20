
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

    function checklogin()
    {
        if ($this->method == 'GET') {
            $con = new Database();
            if (empty($this->params)) {
                $this->response(500);
            } else {
                if(empty($this->params['email'])){
                    $data['message']= "EMAIL KHONG DUOC TRONG";
                    $this->response(200,$data);
                }
                if(empty($this->params['password'])||strpos($this->params['password'],"")!=false||$this->params['password']==null){
                    $data['message']= "MAT KHAU KHONG DUNG DINH DANG";
                    $this->response(200,$data);
                }
                $email=$this->params['email'];
                $password=$this->params['password'];
                $con->query("select * from users where email='$email' AND '$password'");
                $check=$con->getData();
                if($check==null){
                    $data['message']="Tai khoan hoac mat khau khong chinh xac";
                }
                else{
                    $data['message'] = "OK";

                }
                $this->response(200,$data);
            }
            


        } elseif ($this->method == 'POST') {
            $this->response(405);
        } elseif ($this->method == 'PUT') {
            $this->response(405);
        } elseif ($this->method == 'DELETE') {
            $this->response(405);
        }
    }
}



?>