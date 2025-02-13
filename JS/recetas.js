const contElementos = document.querySelector(".contenedor-elementos");

document.addEventListener("DOMContentLoaded", () => {
    mostrarIngredientes();
})

let mostrarIngredientes = () => {

    fetch("../PHP/recetas.php?action=mostrar")
    .then(Response => Response.json())
    .then(elemento => {
        elemento.forEach(tupla => {
            let cajaElemento = document.createElement("div")
            cajaElemento.className = "caja-elemento"

            cajaElemento.innerHTML = `
                <div class="color-header"></div>
                <div class="nombre-receta"><h2>${tupla.nombre}</h2></div>
                <hr />
                <div class="porciones-cantidad">
                    <p class="cantidad">${tupla.num_porciones}</p>
                    <p class="unidad">porciones</p>
                </div>
            `
            contElementos.appendChild(cajaElemento)
        })
    })
    .catch(error => console.error("Error al cargar los datos:", error));

}
