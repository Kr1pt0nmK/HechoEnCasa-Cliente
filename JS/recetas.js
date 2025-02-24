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
            /* Creación del pop up info receta */
            cajaElemento.onclick = () => {
                const blurBox = document.createElement("div");
                blurBox.className = "blur-box";

                blurBox.innerHTML = `
                    <div class="cerrar" onclick="cerrarPopup()">&times;</div>

                    <div class="info-receta">
                        <div class="linea1">
                        <span>Pay de platano</span>
                        <div class="linea1-derecha">
                            <i class='bx bx-edit icono-receta'></i>
                            <i class='bx bx-trash icono-receta'></i>
                        </div>
                        </div>
                        <hr>
                        <div class="linea2">
                        <p>Ingredientes</p>
                        <div class="linea2-derecha">
                            <i class='bx bx-book-open icono-receta'></i>
                            <span class="num-ing">1</span>
                        </div>
                        </div>
                        <div class="linea3">
                        <p>Porciones</p>
                        <div class="linea3-derecha">
                            <i class='bx bx-doughnut-chart icono-receta'></i>
                            <span class="num-por">8</span>
                        </div>
                        </div>
                        <table>
                        <thead>
                            <tr>
                            <th>Ingrediente</th>
                            <th>Cantidad</th>
                            <th>Unidad</th>
                            <th>Acción</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>Harina</td>
                            <td>500</td>
                            <td>gramos</td>
                            <td>
                                <i class='bx bx-edit icono-receta'></i>
                                <i class='bx bx-trash icono-receta'></i>
                            </td>
                            </tr>
                            <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>
                                <div class="btn-agregaing">+</div>
                            </td>
                            </tr>
                        </tbody>
                        </table>

                        <div class="btns">
                        <div class="btn-aceptar">Aceptar</div>
                        <div class="btn-cancelar" onclick="cerrarPopup()">Cancelar</div>
                        </div>
                    </div>
                `;
            };

            contElementos.appendChild(cajaElemento)
        })
    })
    .catch(error => console.error("Error al cargar los datos:", error));

}

/* Creación del pop up agregar receta */
document.getElementById("botonAgregar").addEventListener("click", () => {
    crearPopupAgregarReceta();
});

function crearPopupAgregarReceta() {
    const blurBox = document.createElement("div");
    blurBox.className = "blur-box";

    blurBox.innerHTML = `
        <div class="cerrar" onclick="cerrarPopup()">&times;</div>
        <div class="crear-receta">
            <div class="linea1">
                <input class="input-nom" type="text" placeholder="Nombre de la receta..">
                <div class="linea1-derecha">
                    <i class='bx bx-edit icono-receta'></i>
                    <i class='bx bx-trash icono-receta'></i>
                </div>
            </div>
            <hr>
            <div class="linea2">
                <p>Ingredientes</p>
                <div class="linea2-derecha">
                    <i class='bx bx-book-open icono-receta'></i>
                    <span class="num-ing">...</span>
                </div>
            </div>
            <div class="linea3">
                <p>Porciones</p>
                <div class="linea3-derecha">
                    <i class='bx bx-doughnut-chart icono-receta'></i>
                    <input class="input-num" type="number" placeholder="..." min="0">
                </div>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Ingrediente</th>
                        <th>Cantidad</th>
                        <th>Unidad</th>
                        <th>Acción</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                            <div class="btn-agregaing">+</div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div class="btns">
                <div class="btn-aceptar">Aceptar</div>
                <div class="btn-cancelar" onclick="cerrarPopup()">Cancelar</div>
            </div>
        </div>
    `;

    document.body.appendChild(blurBox);
}

function cerrarPopup() {
    const blurBox = document.querySelector(".blur-box");
    if (blurBox) {
        blurBox.remove();
    }
}
