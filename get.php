<?php
include 'config.php';
//header('Content-Type: application/json');

if($_GET['typ'] == "1"){
    $statement = $db->prepare("SELECT id,humidity,temperature,createat FROM dht22 ORDER BY id ASC");
}else{
    $statement = $db->prepare("SELECT id,humidity,temperature,createat FROM dht22 ORDER BY id DESC");
}

$statement->execute();
$rows = $statement->fetchAll();

echo json_encode($rows);

?>