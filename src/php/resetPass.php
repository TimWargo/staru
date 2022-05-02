<?php
require_once 'connect.php';
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-type, Authorization");

$user = file_get_contents("php://input");
if (isset($user) && !empty($user)) {
    $request = json_decode($user);
    $password = $request->password;
    $hash = password_hash($password, PASSWORD_DEFAULT);
    $query = "UPDATE accounts SET password = '$hash' WHERE email = '$email'";
    if($query){
        if (mysqli_query($db, $query)) {
            $headers  = "From:staru4300@gmail.com\r\n"; 
            $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n"; 
            $email = $request->email;
            $message  = "<html><body>";
            $message .= "<p>Your Password has been changed.</p>
            <p>If this was not your doing simply go to our website and change your password.
            </p>
            <p>Best,</p>
            <p>StarU team</p>";
            $check=mail($email,"reset password", $message, $headers );
            http_response_code(201);
        } else {
           http_response_code(422);
        }
    }
}
