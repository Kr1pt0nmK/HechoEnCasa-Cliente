<?php

$host = "autorack.proxy.rlwy.net";
$port = 28232;
$socket = "";
$user = "root";
$password = "CtMoIMkVciKXNsNSWxTqEFMseaLXKLUG";
$dbname = "Hecho_en_casa";

$con = new mysqli($host, $user, $password, $dbname, $port, $socket)
    or die('Could not connect to the database server' . mysqli_connect_error());

//$con->close();