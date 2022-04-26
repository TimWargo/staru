<?php require_once('connect.php');
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-type, Authorization");

$user = file_get_contents("php://input");
if (isset($user) && !empty($user)) {
    $request = json_decode($user);
    $platform = $request->platform;
    $title = $request->title;

    $query = "SELECT * FROM games WHERE platform = '$platform' AND title = '$title'";
    $result = mysqli_query($db,$query);
    if ($result->num_rows === 1) {
        http_response_code(201);
    } else {
        http_response_code(401);
    }
}
?>