<?php

include "conexion.php";

$accion = $_GET['action'] ?? '';

if ($accion == "mostrar_pendientes") {

    $query = "SELECT pedido.id_ped, usuario.nombre, usuario.apellido_paterno, usuario.apellido_materno, pedido.id_tipopostre, pedido.fecha_hora_registro From usuario Inner Join pedido On usuario.id_u = pedido.id_usuario where pedido.status = 'pendiente'";
    $rs = mysqli_query($con, $query);

    $datos = array();
    while ($tupla = mysqli_fetch_assoc($rs)) {
        $datos[] = $tupla;
    }

    echo json_encode($datos);
}
?>