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
    if ($result) {
        echo $vkey;
    }
    if ($result) {
        $Update = "UPDATE accounts SET valid = '1' WHERE vkey='$vkey'";
        $result1 = mysqli_query($db, $Update);
        if ($result1) {
            mail("staru4300@gmail.com", "email is now valid", "welcome", "From: staru4300@gmail.com");
        }
    } else {
        echo "this account is already valid";
    }
} else {

    die("something went wrong");
}
