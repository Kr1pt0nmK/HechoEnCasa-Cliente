<?php

include "conexion.php";

$accion = $_GET['action'] ?? '';

if ($accion == "mostrar") {
    $query = "SELECT nombre, stock, unidad_total FROM ingrediente";
    $rs = mysqli_query($con, $query);

    $datos = [];
    while ($tupla = mysqli_fetch_assoc($rs)) {
        $datos[] = $tupla;
    }

    echo json_encode($datos);
}

?>
