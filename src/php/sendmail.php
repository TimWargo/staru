<?php
require_once 'connect.php';
header("Access-Control-Allow-Origin: http://localhost:3000");
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header("Access-Control-Allow-Headers: Content-type, Authorization");

$postdata = file_get_contents("php://input");
if (isset($postdata) && !empty($postdata)) {
    $request = json_decode($postdata);

    $email = $request->email;
    $query = "SELECT email, password FROM accounts WHERE email = '$email'";
    $result = mysqli_query($db,  $query);
    $check =  mail(
        $email,
        "forgot Password",
        "http://localhost:3000/reset",
        "From: staru4300@gmail.com");
    if (!$check) {
        error_log("rip it doesn't work", 0);
    } else {
        error_log("rip it does work", 0);
    }
    http_response_code(201);
}
