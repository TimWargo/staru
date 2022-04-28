<?php 
require_once('connect.php');
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-type, Authorization");
$id = null;
//$user = file_get_contents("php://input");
  //  $request = json_decode($user);

    $query = "SELECT * FROM games";
    
    $result = mysqli_query($db,$query);
  
    if(!$id) echo '[';
    for($i=0; $i<mysqli_num_rows($result); $i++){
        echo($i>0?',':'').json_encode(mysqli_fetch_object($result));
    }
    if(!$id) echo ']';
?>