const contPedidosPendientes = document.querySelector("#pedidosPendientes")

document.addEventListener("DOMContentLoaded", () => {
    mostrarPedidosPendientes();
})

let mostrarPedidosPendientes = () => {

    fetch("../PHP/calendario.php?action=mostrar_pendientes")
    .then(Response => Response.json())
    .then(elemento => {
        elemento.forEach(tupla => {
            let pedidoPendiente = document.createElement("div")
            pedidoPendiente.className = "pedido-elemento"

            let nombreCompleto = `${tupla.nombre}`
            let fecha = formatearFecha(tupla.fecha_hora_registro);

            let folioCaja = document.createElement("div")
            folioCaja.classList.add("folio-caja")

            switch (tupla.id_tipopostre) {
                case "fijo":
                    folioCaja.classList.add("fijo")
                    break
                case "personalizado":
                    folioCaja.classList.add("personalizado") 
                    break
                case "temporada":
                    console.log("hola")
                    break
                default:
                    break
            }

            folioCaja.textContent = tupla.id_ped;

            pedidoPendiente.innerHTML = `
                <div class="info-caja">
                    <div class="nombre-usuario">${nombreCompleto}</div>
                    <div class="nombre-producto">${tupla.id_tipopostre}</div>
                </div>
                <div class="fecha-pedido">${fecha}</div>
            `
            
            pedidoPendiente.prepend(folioCaja);
            contPedidosPendientes.appendChild(pedidoPendiente)
        })
    })
    .catch(error => console.error("Error al cargar los datos:", error));

}

let formatearFecha = (fechaHora) => {
    let fecha = new Date(fechaHora);
    let opciones = { day: '2-digit', month: 'short', year: 'numeric' };
    return fecha.toLocaleDateString('es-ES', opciones).replace('.', '');
};