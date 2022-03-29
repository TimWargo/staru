<?php
require_once 'connect.php';
$url="http://localhost:3000/verify.php?vkey=1d7289daf4a8e3b34083f7b45e73fdae";
$vkey=parse_url($url,PHP_URL_QUERY);
$query = $_SERVER["QUERY_STRING"];
echo $query;
echo $vkey;
//if (isset($_GET['vkey'])) {// problem with if statement 
    //echo $_GET['vkey'];
    $vkey= 'b96f7582adc1700e57cf79021c505ac1';
    //$vkey = $_GET['vkey'];
    $sql = "SELECT * FROM accounts WHERE valid = 0 AND vkey='$vkey'";
    $result = mysqli_query($db, $sql);
    if ($result) {
        $Update = "UPDATE accounts SET valid = '1' WHERE vkey='$vkey'";
        $result1 = mysqli_query($db, $Update);
        if($result1){
            echo"verified email";
        }
    } else {
        echo "this account is already valid";
    }
/*} else {

    die("something went wrong");
}*/
?>
