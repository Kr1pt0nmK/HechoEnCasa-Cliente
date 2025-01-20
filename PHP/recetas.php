<?php

include "conexion.php";

$accion = $_GET['action'] ?? '';

if ($accion == "mostrar") {

    $query = "SELECT nombre, num_porciones FROM receta_base";
    $rs = mysqli_query($con, $query);

    $datos = array();
    while ($tupla = mysqli_fetch_assoc($rs)) {
        $datos[] = $tupla;
    }

    echo json_encode($datos);
}

?>