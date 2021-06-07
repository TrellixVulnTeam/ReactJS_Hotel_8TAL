<?php

require 'config.php';
$config;

class Database{   
        private $host;
        private $user;
        private $pass;
        private $dbname;
        private $charset;
        public $connection;
        private $result;
        private $show_errors = false;
        public $query_count = 0;
    

        public function __construct(  ) {
            global $config;
            $this->host=$config['DB']['host'];
            $this->user=$config['DB']['user'];
            $this->pass=$config['DB']['pass'];
            $this->dbname=$config['DB']['schema'];
            $this->charset=$config['DB']['charset'];
            $this->connection = new mysqli($this->host, $this->user, $this->pass, $this->dbname); 
            $this->connection->set_charset($this->charset);      
            if ($this->connection->connect_error) { 
                $this->error('Failed to connect to MySQL - ' . $this->connection->connect_error);
            }
        }
        public function getDBName(){ return $this->dbname;}
        public function setDBName($dbname ){$this->dbname=$dbname;}
    
      
        public function query($query) {
     
            try{
               $this->result= $this->connection->query($query);
               if(!$this->result){
                   $this->show_errors=true;
               }
               else{
                $this->show_errors=true;

               }
            }
          
             catch(Throwable $e) {
                $this->error('Unable to prepare MySQL statement (check your syntax) - ' . $e);
            }
          
            return $this->result;
        }
    
        public function getError(){
            return $this->connection-> error;
        }
        public function getAllData() {
           
            $result = array();
            while ($row= $this->result->fetch_assoc()) {
                    $result[] = $row;
                }       
            return $result;
        }
    
        public function getData() {  
             try{

                if(gettype($this->result)=="bool") 
                {
              
  				 $result =null;

                } 
                else{
                     $result =$this->result->fetch_assoc();
                 

                }
              
            }      
            catch( Throwable $e)
            {
                $result=null;
            }

            return $result;
        }
    
        public function close() {
            return $this->connection->close();
        }
    
        // public function numRows() {
        //     $this->query->store_result();
        //     return $this->query->num_rows;
        // }
    
        // public function affectedRows() {
        //     return $this->query->affected_rows;
        // }
    
        // public function lastInsertID() {
        //     return $this->connection->insert_id;
        // }
    
        public function error($error) {
            if ($this->show_errors) {
                exit($error);
            }
        }
    
        private function _gettype($var) {
            if (is_string($var)) return 's';
            if (is_float($var)) return 'd';
            if (is_int($var)) return 'i';
            return 'b';
        }
    
    

}



?>