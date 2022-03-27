<?php
require_once 'connect.php';
header("Access-Control-Allow-Origin: http://localhost:3000");
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header("Access-Control-Allow-Headers: Content-type, Authorization");

$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata)) {
    $request = json_decode($postdata);

    $email = $request->email;
    $sql = "SELECT * FROM accounts WHERE email='$email'";
    $result = mysqli_query($db, $sql);
    if ($result->num_rows === 1) {
        http_response_code(409);
    }
    $screenname = $request->screenName;
    $hash = password_hash($request->password, PASSWORD_DEFAULT);
    $sql = "INSERT INTO accounts (email, screen_name, password) VALUES ('$email', '$screenname', '$hash')";
    if (mysqli_query($db, $sql)) {
        http_response_code(201);
    } else {
        http_response_code(422);
    }
}