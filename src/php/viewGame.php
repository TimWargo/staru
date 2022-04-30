<?php require_once('connect.php');
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-type, Authorization");

$platform = $_GET["platform"];
$title = $_GET["title"];
if (isset($platform) && isset($title) && !empty($title) && !empty($platform)) {
    $title = str_replace("_"," ",$title);
    $title = str_replace("'","''",$title);
    $platform = str_replace("_"," ",$platform);
    $query = "SELECT * FROM games WHERE lower(platform) = '$platform' AND lower(title) = '$title'";
    $result = mysqli_query($db,$query);
    if ($result->num_rows === 1) {
        echo json_encode($result->fetch_row());
    } else {
        http_response_code(401);
    }
}
?>