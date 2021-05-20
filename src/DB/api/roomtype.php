
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
	function roomTypes()
	{
		try {


			if ($this->method == 'GET') {
				$con = new Database();
				if (empty($this->params)) {
					$con->query("SELECT * FROM roomTypes ");
					$data = $con->getAllData();
				} else {
					$id = $this->params['roomtype_id'];
					$con->query("SELECT * FROM roomtypes where roomtype_id=$id ");
					$data = $con->getData();
				}
				$this->response(200, $data);
			} elseif ($this->method == 'POST') {

				if (empty($this->params)) {
					$this->response(500, "Khong co thong tin");
				} else {
					$data['message'] = "Vui Long nhap du thong tin";
					if (empty($this->params['roomtype'] || empty($this->params['rent'])) || empty($this->params['quantity'])) {
						$this->response(200, $data);
						die();
					} else {

						$roomtype = $this->params['roomtype'];
						$rent = $this->params['rent'];
						$quantity = $this->params['quantity'];
						$con = new Database;
						//check co loai roomtype nao trung ten chua
						$con->query("select * from roomtypes where roomtype ='$roomtype'");
						$check = $con->getData();
						// select bang null co nghia la ko trung voi user nao
						if ($check == null) {
							if (!is_integer($rent) && !is_integer($quantity)) {
								$con->query("insert into roomTypes(roomtype,rent,quantity) values('$roomtype','$rent','$quantity')");
								$this->response(201);		
								$data['message'] = "TAO PHONG THANH CONG";
							} else {
								$data['message'] = "VUI LONG NHAP VAO MOT SO NGUYEN";
							}
						
						} else {
							$data['message'] = "TEN ROOM TYPE NAY DA CO ROI";
							$this->response(200, $data);
						}
					}
				}
			} elseif ($this->method == 'PUT') {
				$id = $this->params['roomtype_id'];
				if (empty($id)) {
					$this->response(404, "Khong tim thay id");
				} else {
					$con = new Database;
					if (empty($this->params['roomtype']) || empty($this->params['rent']) || empty($this->params['subject']) || empty($this->params['quantity'])) {
						$data['message'] = "Thieu thong tin";
						$this->response(500, $data);
					}

					$roomtype = $this->params['roomtype'];
					$rent = $this->params['rent'];
					$quantity = $this->params['quantity'];

					if (!is_integer($rent) && !is_integer($quantity)) {
						$con = new Database;
						$con->query("UPDATE roomtypes SET roomtype='$roomtype',rent='$rent',quantity='$quantity' where roomtype_id='$id')");

						$data['message'] = "CAP NHAT THANH CONG";
					} else {
						$data['message'] = "VUI LONG NHAP VAO MOT SO NGUYEN";
					}



					$con->close();
					$this->response(201, $data);
				}
			} elseif ($this->method == 'DELETE') {

				$id = $this->params['roomtype_id'];
				if (empty($id)) {
					$this->response(404, "Khong tim thay id");
				} else {
					$con = new Database;
					$status="delete at" +date("d/m/Y");
					$con->query("UPDATE roomtypes set status='$status' where roomtype_id='$id'");
					$data['message']="DELETE room "+$id +" THANH CONG";
					$this->response(200,$data);
				}
				$this->response(500);
			}
		} catch (Throwable $e) {

			$this->response(500, "ERROR");
		}
	}
}
?>