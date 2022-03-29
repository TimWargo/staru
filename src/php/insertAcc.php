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
    $vkey = md5(time().$screenname);
    $sql = "INSERT INTO accounts (email, screen_name, password, vkey, valid) VALUES ('$email', '$screenname', '$hash', '$vkey', 'false')";

    $msg=  "welcome to StarU please validate email <a href= 'http://localhost:3000/verify.php?vkey=$vkey> validate </a>";
    $headers = "From: staru4300@gmail.com \r\n";
    $headers.="MIME-Version: 1.0" . "\r\n";
    $headers.="Content-Type: text/plain; charset=UTF-8" ."\r\n";
     
    $check=mail(
        $email, 
        "confirm account",
        $msg, 
        $headers);
    if (!$check){
        error_log("rip it doesn't work", 0);
    } else{
        error_log("rip it does work", 0);
    }
    if (mysqli_query($db, $sql)) {
        http_response_code(201);
    } else {
        http_response_code(422);
    }
}