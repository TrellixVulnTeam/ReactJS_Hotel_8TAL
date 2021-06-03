<?php

header("Cache-Control: no-cache, no-store, must-revalidate"); // HTTP 1.1.
header("Pragma: no-cache"); // HTTP 1.0.
header("Expires: 0"); // Proxies.
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");
header('Content-type: application/json; charset=utf-8');



class Restful_api
{
    protected $method   = '';
    protected $endpoint = '';
    protected $params;
    protected $file     = null;
    protected $query_string;

    public function __construct()
    {
        $this->_input();
        $this->_process_api();
    }

    protected function _input()
    {

        if (!empty($_SERVER['PATH_INFO'])) {

            $this->endpoint = trim($_SERVER['PATH_INFO'], '/');
        }


        $this->query_string = $_SERVER['QUERY_STRING'];

        $method  = $_SERVER['REQUEST_METHOD'];
        if ($method=="POST") {
            if (isset( $_POST['method'] )){
            if ($_POST['method'] == 'PUT' || $_POST['method'] == 'put')
                $method = 'PUT';
              
            if ($_POST['method'] == 'DELETE' || $_POST['method'] == 'delete')
                $method = 'DELETE';
            }
        }

        $allow_method   = array('GET', 'POST', 'PUT', 'DELETE');

        if (in_array($method, $allow_method)) {
            $this->method = $method;
        }
        // Nhận thêm dữ liệu tương ứng theo từng loại method
        switch ($this->method) {
            case 'POST':
                //lay tu $_POST
                $this->params = $_POST;
                break;

            case 'GET':
                $this->params = $_GET;
                break;

            case 'PUT':
                $this->params = $_POST;
                //$this->parse_raw_http_request($this->params);
                break;

            case 'DELETE':

                $this->params =$_POST;
                break;

            default:
                $this->response(500, "Invalid Method");
                break;
        }
    }

    protected function _process_api()
    {
        if (method_exists($this, $this->endpoint)) {
            $this->{$this->endpoint}();
        } else {

            $this->response(500, "Unknown endpoint");
        }
    }
    protected function response($status_code, $data = NULL)
    {
        header($this->_build_http_header_string($status_code));
        header("Content-Type: application/json");
        echo json_encode($data);
        die();
    }
    protected function _build_http_header_string($status_code)
    {
        $status = array(
            200 => 'OK',
            201 => "Created",
            403 => "Forbidden",
            404 => 'Not Found',
            405 => 'Method Not Allowed',
            500 => 'Internal Server Error'
        );
        return "HTTP/1.1 " . $status_code . " " . $status[$status_code];
    }
    protected function getQuery()
    {
        $arr = array();
        for ($i = 0; $i < count(explode('&', $this->query_string)); $i++) {
            $slice = explode('=', explode('&', $this->query_string)[$i]);
            $arr[$slice[0]] = $slice[1];
        }
        return $arr;
    }
    protected function parse_raw_http_request(array &$a_data)
    {
        // read incoming data
        $input = file_get_contents('php://input');

        // grab multipart boundary from content type header
        preg_match('/boundary=(.*)$/', $_SERVER['CONTENT_TYPE'], $matches);
        $boundary = $matches[1];

        // split content by boundary and get rid of last -- element
        $a_blocks = preg_split("/-+$boundary/", $input);
        array_pop($a_blocks);

        // loop data blocks
        foreach ($a_blocks as $id => $block) {
            if (empty($block))
                continue;

            // you'll have to var_dump $block to understand this and maybe replace \n or \r with a visibile char

            // parse uploaded files
            if (strpos($block, 'application/octet-stream') !== FALSE) {
                // match "name", then everything after "stream" (optional) except for prepending newlines 
                preg_match("/name=\"([^\"]*)\".*stream[\n|\r]+([^\n\r].*)?$/s", $block, $matches);
            }
            // parse all other fields
            else {
                // match "name" and optional value in between newline sequences
                preg_match('/name=\"([^\"]*)\"[\n|\r]+([^\n\r].*)?\r$/s', $block, $matches);
            }
            $a_data[$matches[1]] = $matches[2];
        }
    }
}
