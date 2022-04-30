<?php require_once('connect.php');
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-type, Authorization");

$gameid = $_GET['id'];
$gameTitle = $_GET['title'];
if (isset($gameid) && !empty($gameid) && isset($gameTitle) && !empty($gameTitle)) {
    $gameTitle = str_replace("_"," ",$gameTitle);
    $gameTitle = str_replace("'","''",$gameTitle);
    $query = "SELECT DISTINCT id,title,platform,popularity FROM games INNER JOIN game_genres ON games.id = game_genres.game_id WHERE game_genres.genre_id IN (SELECT genre_id FROM game_genres WHERE game_id = '$gameid') AND NOT games.id = '$gameid' AND NOT games.title = '$gameTitle' GROUP BY title LIMIT 10";
    $result = mysqli_query($db,$query);
    if ($result->num_rows >= 1) {
        echo json_encode($result->fetch_all());
    } else {
        http_response_code(401);
    }
}
?>