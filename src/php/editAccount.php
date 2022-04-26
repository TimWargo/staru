<?php
require_once 'connect.php';
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-type, Authorization");

$user = file_get_contents("php://input");
if (isset($user) && !empty($user)) {
    $request = json_decode($user);
    $email = $request->email;
    $screen_name = $request->screen_name;

        $query = "UPDATE accounts SET screen_name = '$screen_name' WHERE email = '$email'";
    if($query){
        if (mysqli_query($db, $query)) {
            $check=mail($email,"Your screen Name has been changed", "your Screen Name has been changed", "From: staru4300@gmail.com" );
            http_response_code(201);
            

        } else {
           http_response_code(422);
        }
    }
}