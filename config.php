<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET');

$db_user = 'USER';
$db_pass = 'PASSWORD';
$db = new PDO('mysql:host=HOST;dbname=DB_NAME', $db_user, $db_pass);
?>