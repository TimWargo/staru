<?php 
require_once('connect.php');
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-type, Authorization");

//$user = file_get_contents("php://input");
  //  $request = json_decode($user);

    $queryPC = "SELECT pic FROM games where platform = 'PC'";
    $queryXbox = "SELECT pic FROM games where platform = 'Xbox'";
    $queryPlaystation = "SELECT pic FROM games where platform = 'PlayStation'";
    $queryNintendo = "SELECT pic FROM games where platform = 'Nintendo Switch'";

    $resultPC = mysqli_query($db,$queryPC);
    $resultXbox = mysqli_query($db,$queryXbox);
    $resultPlaystation = mysqli_query($db,$queryPlaystation);
    $resultNintendo = mysqli_query($db,$queryNintendo);

    
    for($i=0; $i<mysqli_num_rows($resultPC); $i++){
        echo($i>0?',':'').json_encode(mysqli_fetch_object($resultPC));
    }
    echo "-----------------------------------------------------------------------------------------------------------";
    for($i=0; $i<mysqli_num_rows($resultXbox); $i++){
        echo($i>0?',':'').json_encode(mysqli_fetch_object($resultXbox));
    }
    echo "-----------------------------------------------------------------------------------------------------------";
    for($i=0; $i<mysqli_num_rows($resultPlaystation); $i++){
        echo($i>0?',':'').json_encode(mysqli_fetch_object($resultPlaystation));
    }
    echo "-----------------------------------------------------------------------------------------------------------";
    for($i=0; $i<mysqli_num_rows($resultNintendo); $i++){
        echo($i>0?',':'').json_encode(mysqli_fetch_object($resultNintendo));
    }


?>