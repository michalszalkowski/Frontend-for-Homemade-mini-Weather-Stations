<?php
include 'config.php';

$h = $_GET['h'];
$t = $_GET['t'];
if ($_GET['token'] != "123456789") {
    die();
}

$sql = "INSERT INTO dht22 ( humidity, temperature) VALUES ( :humidity, :temperature)";

$query = $db->prepare($sql);
$query->execute(array(':humidity' => $h, ':temperature' => $t));
?>