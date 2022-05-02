<?php
require_once 'connect.php';
header("Access-Control-Allow-Origin: http://localhost:3000");
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header("Access-Control-Allow-Headers: Content-type, Authorization");

$msg="";
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata)) {
    $request = json_decode($postdata);              
    $title = $request->title;
    $review = $request->description;
    $gameid = $request->gameId;
   

    $email = $request->email;
    $sql2 = "SELECT accounts.id FROM accounts WHERE email='$email'";
    $result2 = mysqli_query($db, $sql2);

   $rs = mysqli_fetch_array($result2);

   $accid = $rs['id'];

    $sql1 = "INSERT INTO reviews (account_id, game_id, title, description, rating) VALUES ('$accid','$gameid','$title','$review','5')";
    $result1= mysqli_query($db, $sql1);
}
   