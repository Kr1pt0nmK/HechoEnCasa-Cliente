<?php

$host = "srv574.hstgr.io";
$port = 3306;
$socket = "";
$user = "u431722329_dxicode";
$password = "Dxicode2025";
$dbname = "u431722329_Hecho_en_casa";

$con = new mysqli($host, $user, $password, $dbname, $port, $socket)
    or die('Could not connect to the database server' . mysqli_connect_error());

//$con->close();