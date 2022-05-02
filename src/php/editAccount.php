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
    $sql = "SELECT * FROM accounts WHERE screen_name = '$screen_name'";
    $result = mysqli_query($db, $sql);
    if ($result->num_rows === 1) {
        http_response_code(409);
    }
    $query = "UPDATE accounts SET screen_name = '$screen_name' WHERE email = '$email'";
    if ($query) {
        if (mysqli_query($db, $query)) {
            $headers  = "From:staru4300@gmail.com\r\n";
            $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
            $message  = "<html><body>";
            $message .= "<p>Hello,</p>
            <p>There was a change to your username.
            If this was not initiated by you please go into your account and check your screen name.</p>";
            $message .= "</br>";
            $message .= "<p>Best,</p>
            <p>StarU team</p>";
            $check = mail($email, "Your screen Name has been changed", $message, $headers);
            http_response_code(201);
        } else {
           http_response_code(409);
        }
    }
}
