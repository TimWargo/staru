/*<?php
require_once 'connect.php';
//if (isset($_GET['vkey'])) {// problem with if statement 
    $vkey = $_GET['vkey'];
    $sql = "SELECT valid,vkey FROM accounts WHERE valid = 0 AND vkey='$vkey'";
    $result = mysqli_query($db, $sql);
    echo $result;
    echo $vkey;
    if ($result) {
        $Update = "UPDATE accounts SET valid = '1' WHERE vkey='$vkey'";
        $result1 = mysqli_query($db, $Update);
        if($result1){
           mail("staru4300@gmail.com","email is now valid",$state ,"From: staru4300@gmail.com");
        }
    } else {
        echo "this account is already valid";
    }
/*} else {

    die("something went wrong");
}*/
?>
