<?php

require_once 'connect.php';
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-type, Authorization");

$user = file_get_contents("php://input");
$id = null;
$method= $_SERVER['REQUEST_METHOD'];
if(!$db){
    die("something went wrong");
}
$NAME = $_GET['email'];

switch($method){
    case'GET':
        $sql="select * from accounts where email='$NAME'";
        break;
}
$result = mysqli_query($db, $sql);
if(!$result){
    http_response_code(404);
}

if($method == 'GET'){
    if(!$id) echo '[';
    for($i=0; $i<mysqli_num_rows($result); $i++){
        echo($i>0?',':'').json_encode(mysqli_fetch_object($result));
    }if(!$id) echo ']';
}

