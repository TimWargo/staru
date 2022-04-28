<?php require_once('connect.php');
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-type, Authorization");

$title = $_GET['title'];
$platform = $_GET['platform'];
if (isset($title) && isset($platform) && !empty($title) && !empty($platform)) {
    $title = str_replace("_"," ",$title);
    $title = str_replace("'","''",$title);
    $query = "SELECT id, platform FROM games WHERE lower(title) = '$title' AND NOT lower(platform) = '$platform'";
    $result = mysqli_query($db,$query);
    if ($result->num_rows >= 1) {
        echo json_encode($result->fetch_all());
    } else if ($result->num_rows == 0) {
        http_response_code(204);
    } else {
        http_response_code(401);
    }
}
?>