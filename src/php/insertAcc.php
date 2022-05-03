<?php
require_once 'connect.php';
header("Access-Control-Allow-Origin: http://localhost:3000");
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header("Access-Control-Allow-Headers: Content-type, Authorization");

$msg="";
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
    $sql = "SELECT * FROM accounts WHERE screen_name='$screenname'";
    $result = mysqli_query($db, $sql);
    if ($result->num_rows === 1) {
        http_response_code(412);
    }
    $hash = password_hash($request->password, PASSWORD_DEFAULT);
    $vkey = md5(time().$screenname);
    $sql = "INSERT INTO accounts (email, screen_name, password, vkey, valid) VALUES ('$email', '$screenname', '$hash', '$vkey', 'false')";
    if (mysqli_query($db, $sql)) {
        $headers  = "From:staru4300@gmail.com\r\n"; 
        $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n"; 
        $message  = "<html><body>";
        $message .= "<p>Hello,</p>
        <p>Validate your email to Join us.</p>
        <p>Click the button below to validate email.</p>";
        $message .= "<br>";
        $message .= "</br>";
        $message .= "</br>";
        $message .= "<a href=http://localhost:3000/verify?vkey=$vkey><button style='color:white;background-color:red;text-align:center;padding: 10px;
        border-radius: 25px;'> validate</button></a>";
        $message .= "</br>";
        $message .= "<p>If the button above doesn't work try the link below.</p>";
        $message .= "<a href=http://localhost:3000/verify?vkey=$vkey> validate</a>";
        $message .= "<p>Best,</p>
        <p>StarU team</p>";
        $check=mail(
            $email, 
            "Confirm Your Account",
            $message, 
            $headers);
        http_response_code(201);
    } else {
        http_response_code(400);
    }
}