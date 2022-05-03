<?php require_once('connect.php');
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-type, Authorization");

$id = $_GET["id"];
if (isset($id) && !empty($id)) {
    $query = "SELECT * FROM games WHERE id ='$id'";
    $result = mysqli_query($db,$query);
    if ($result->num_rows === 1) {
        echo json_encode($result->fetch_row());
    } else {
        http_response_code(401);
    }
}
?>