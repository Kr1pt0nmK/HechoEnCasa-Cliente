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



/*APENAS AGREGADO*/
document.addEventListener("DOMContentLoaded", () => {
    const popup = document.getElementById("popup"); // Popup
    const botonAgregar = document.getElementById("botonAgregar"); // Botón agregar
    const cerrarPopup = document.getElementById("cerrarPopup"); // Botón cerrar
    const fondoContenedor = document.querySelector(".fondo-contenedor"); // Fondo
  
    // Mostrar el popup y desenfocar el fondo
    botonAgregar.addEventListener("click", () => {
      popup.style.display = "flex"; // Muestra el popup
      fondoContenedor.classList.add("fondo-borrado"); // Aplica el desenfoque
    });
  
    // Cerrar el popup y restaurar el fondo
    cerrarPopup.addEventListener("click", () => {
      popup.style.display = "none"; // Oculta el popup
     
    });
  /*
    // Cerrar el popup si se hace clic fuera de él
    window.addEventListener("click", (e) => {
      if (e.target === popup) {
        popup.style.display = "none";
        fondoContenedor.classList.remove("fondo-borrado");
      }
    });*/
  });
  
  
  