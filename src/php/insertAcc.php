<?php
require 'connect.php';
header("Access-Control-Allow-Origin: http://localhost:3000");
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header("Access-Control-Allow-Headers: Content-type, Authorization");

$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata)) {
    $request = json_decode($postdata);

    $email = $request->email;
    $screenname = $request->screenname;
    $pass = password_hash($request->pass, PASSWORD_DEFAULT);
    $sql = "INSERT INTO accounts (email, screen_name, password) VALUES ('$email', '$screenname', '$pass')";
    if (mysqli_query($db, $sql)) {
        http_response_code(201);
    } else {
        http_response_code(422);
    }
}