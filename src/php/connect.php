<?php
$servername = "localhost";
$username = "root";
$password = "";
$database = "staru";

// Create Connection
$db = mysqli_connect($servername, $username, $password, $database);

// Check Connection
if ($db->connect_error) {
    die("Connection failed: " . $db->connect_error);
}
?>