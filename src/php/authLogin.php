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
    $query = "SELECT email, password FROM accounts WHERE email = '$email'";
    $result = mysqli_query($db, $query);
    if ($result->num_rows === 1) {
        $user = $result->fetch_row();
        if (password_verify($password, $user[1])) {
            http_response_code(201);
        } else {
            http_response_code(401);
        }
    } else {
        http_response_code(401);
    }
}
?>