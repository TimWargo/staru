<?php
require_once 'connect.php';
header("Access-Control-Allow-Origin: http://localhost:3000");
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header("Access-Control-Allow-Headers: Content-type, Authorization");
date_default_timezone_set('UTC');

$msg="";
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata)) {
    $request = json_decode($postdata);

    $today = date('Y-m-d H:i:s');              
    $title = $request->title;
    $review = $request->description;
    $gameid = $request->gameId;
   

    $email = $request->email;
    $sql2 = "SELECT accounts.id FROM accounts WHERE email='$email'";
    $result2 = mysqli_query($db, $sql2);

   $rs = mysqli_fetch_array($result2);

   $accid = $rs['id'];

    //INSERT INTO `reviews`(`id`, `account_id`, `game_id`, `title`, `description`, `rating`, `date`) VALUES ('[value-1]','[value-2]','[value-3]','[value-4]','[value-5]','[value-6]','[value-7]')
    $sql1 = "INSERT INTO reviews (account_id, game_id, title, description, rating, date) VALUES ('$accid','$gameid','$title','$review','5','$today')";
    $result1= mysqli_query($db, $sql1);
}
   