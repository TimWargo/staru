<?php require_once('connect.php');
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-type, Authorization");

$gameid = $_GET['id'];
if (isset($gameid) && !empty($gameid)) {
    $query = "SELECT id, name FROM genres INNER JOIN game_genres ON genres.id = game_genres.genre_id WHERE game_id = '$gameid'";
    $result = mysqli_query($db,$query);
    if ($result->num_rows >= 1) {
        echo json_encode($result->fetch_all());
    } else {
        http_response_code(401);
    }
}
?>