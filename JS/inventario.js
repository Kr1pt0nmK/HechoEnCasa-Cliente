document.addEventListener("DOMContentLoaded", () => {
    const contElementos = document.querySelector(".contenedor-elementos")

    fetch("../PHP/inventario.php")
        .then(Response => Response.json())
        .then(elemento => {
            elemento.forEach(tupla => {
                const cajaElemento = document.createElement("div")
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
})