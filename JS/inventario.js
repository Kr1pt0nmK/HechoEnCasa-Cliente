const contElementos = document.querySelector(".contenedor-elementos")

document.addEventListener("DOMContentLoaded", () => {
    mostrarIngredientes();
})

let mostrarIngredientes = () => {

    fetch("../PHP/inventario.php?action=mostrar")
    .then(Response => Response.json())
    .then(elemento => {
        elemento.forEach(tupla => {
            let cajaElemento = document.createElement("div")
            cajaElemento.className = "caja-elemento"

            cajaElemento.innerHTML = `
                <div class="color-header"></div>
                <div class="nombre-acciones">
                    <h2>${tupla.nombre}</h2>
                    <div class="acciones">
                    <button class="boton-accion">
                        <i class="bx bx-edit bx-sm"></i>
                    </button>
                    <button class="boton-accion">
                        <i class="bx bx-trash bx-sm"></i>
                    </button>
                    </div>
                </div>
                <hr />
                <div class="cantidad-unidad">
                    <p class="cantidad">${tupla.stock}</p>
                    <p class="unidad">${tupla.unidad_total}</p>
                </div>
            `
            contElementos.appendChild(cajaElemento)
        })
    })
    .catch(error => console.error("Error al cargar los datos:", error));

}