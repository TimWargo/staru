<?php
require_once 'connect.php';
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-type, Authorization");

$user = file_get_contents("php://input");
if (isset($user) && !empty($user)) {
    $request = json_decode($user);
    $email = $request->email;
    $password = $request->password;
    $hash = password_hash($password, PASSWORD_DEFAULT);
    $query = "UPDATE accounts SET password = '$hash' WHERE email = '$email'";
    $checker=mail($email,
    "reset password", 
    "your password has been changed", 
    "From: staru4300@gmail.com");
    if (!$check){
        error_log("rip it doesn't work", 0);
    } else{
        error_log("rip it does work", 0);
    }
    if (mysqli_query($db, $query)) {
        http_response_code(201);
    } else {
        http_response_code(422);
    }
}
?>