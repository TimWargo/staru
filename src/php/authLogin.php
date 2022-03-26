<?php
require_once('connect.php');
//header("Access-Control-Allow-Origin: http://localhost:3000");
//header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
//header("Access-Control-Allow-Headers: Content-Type, Authorization");
$user = file_get_contents("php://input");
if (isset($user) && !empty($user)) {
    $request = json_decode($user);
    $email = $request->email;
    $password = $request->password;
    $query = 'SELECT COUNT(*) FROM accounts WHERE email = :email';
    $statement1 = $db->prepare($query);
    $statement1->bindValue(':email', $email);
    $statement1->execute();
    $count = $statement1->fetchColumn();
    $statement1->closeCursor();
    if ($count === 1) {
        $query = 'SELECT password FROM accounts WHERE email = :email';
        $statement2 = $db->prepare($query);
        $statement2->bindValue(':email', $email);
        $statement2->execute();
        $hash = $statement2->fetch();
        $statement2->closeCursor();
        
        return $isValidPass = password_verify($password, $hash);
    }
    else {
        return false;
    }
}
?>