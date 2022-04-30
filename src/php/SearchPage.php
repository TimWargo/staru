<?php 
require_once('connect.php');
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-type, Authorization");
$id = null;
$title= $_GET['title'];
$platform = null;
    if($title!=null){
        $query = "SELECT * FROM games where title = '$title'";
    } else{
        
    }
    //SELECT AVG(rating), games.title FROM reviews,games WHERE games.id = reviews.game_id GROUP BY game_id ORDER BY AVG(rating) DESC;
    //AND platform= 'Playstation'
    $result = mysqli_query($db,$query);
  
    if(!$id) echo '[';
    for($i=0; $i<mysqli_num_rows($result); $i++){
        echo($i>0?',':'').json_encode(mysqli_fetch_object($result));
    }
    if(!$id) echo ']';
?>