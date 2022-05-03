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
    if ($result->num_rows === 1) {
        $headers  = "From:staru4300@gmail.com\r\n"; 
        $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
        $message  = "<html><body>";
        $message .= "<p>Hello,</p>
        <p>There was a request to change your password.
        If this was not initiated by you pleasde ignore this message.</p>
        <p>Click the button below to make a new password.</p>";
        $message .= "<br>";
        $message .= "</br>";
        $message .= "</br>";
        $message .= "<a href=http://localhost:3000/reset?email=$email><button style='color:white;background-color:red;text-align:center;padding: 10px;
        border-radius: 25px;'> Change password</button></a>";
        $message .= "</br>";
        $message .= "<p>If the button above doesn't work try the link below.</p>";
        $message .= "<a href=http://localhost:3000/reset?email=$email> Change password</a>";
        $message .= "<p>Best,</p>
        <p>StarU team</p>";
        $check =  mail(
            $email,
            "forgot Password",
            $message,
            $headers
        );
        http_response_code(201);
    } else {
        http_response_code(400);
    }
}
