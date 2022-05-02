<?php

require_once 'connect.php';
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-type, Authorization");

$user = file_get_contents("php://input");
if (isset($user) && !empty($user)) { // problem with if statement 
    $request = json_decode($user);
    $vkey = $request->vkey;
    $sql = "SELECT * FROM accounts WHERE valid = 0 AND vkey='$vkey'";
    $result = mysqli_query($db, $sql);
    $rs = mysqli_fetch_array($result);
    $email = $rs['email'];
    if ($result) {
        $Update = "UPDATE accounts SET valid = '1' WHERE vkey='$vkey'";
        $result1 = mysqli_query($db, $Update);
        if ($result1) {
            $headers  = "From:staru4300@gmail.com\r\n"; 
            $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n"; 
            $message  = "<html><body>";
            $message .= "<p>Welcome to StarU,</p>
            <p>We hope you'll enjoy your stay and share your opinion with our community of Gamers.
            </p>
            <p>Best,</p>
            <p>StarU team</p>";
            mail($email, "StarU - Welcome",$message, $headers);
        }
    } else {
        echo "this account is already valid";
    }
} else {

    die("something went wrong");
}
