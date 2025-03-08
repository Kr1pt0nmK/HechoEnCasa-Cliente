const contElementos = document.querySelector(".contenedor-elementos");

document.addEventListener("DOMContentLoaded", () => {
    mostrarIngredientes();
});

let mostrarIngredientes = () => {
    return fetch("../PHP/recetas.php?action=mostrar") // Retornar la Promise
        .then(response => response.json())
        .then(elemento => {
            contElementos.innerHTML = ""; // Limpiar el contenedor antes de agregar los elementos
            elemento.forEach(tupla => {
                let cajaElemento = document.createElement("div");
                cajaElemento.className = "caja-elemento";

                cajaElemento.innerHTML = `
                    <div class="color-header"></div>
                    <div class="nombre-receta"><h2>${tupla.nombre}</h2></div>
                    <hr />
                    <div class="porciones-cantidad">
                        <p class="cantidad">${tupla.num_porciones}</p>
                        <p class="unidad">porciones</p>
                    </div>
                `;

                contElementos.appendChild(cajaElemento);
            });

            return elemento; // Retornar los datos para que puedan ser usados después
        })
        .catch(error => {
            console.error("Error al cargar los datos:", error);
            return []; // Retornar un array vacío en caso de error
        });
};

// Popup para agregar receta
document.getElementById("botonAgregar").addEventListener("click", () => {
    crearPopupAgregarReceta();

    const inputNom = document.getElementById("input-nom")
    const btnEditar = document.getElementById("editar")

    btnEditar.addEventListener("click", () => {
        if (!inputNom.disabled) {
            inputNom.disabled = true
        } else {
            inputNom.disabled = false
        }
    })
});

function crearPopupAgregarReceta() {
    const blurBox = document.createElement("div");
    blurBox.className = "blur-box";

    blurBox.innerHTML = `
        <div class="crear-receta">
            <button class="cerrar" onclick="cerrarPopup()">&times;</button>

            <div class="linea1">
                <input class="input-nom" id="input-nom" type="text" placeholder="Nombre de la receta.." disabled>
                <div class="linea1-derecha">
                    <i class='bx bx-edit icono-receta' id="editar"></i>
                    <i class='bx bx-trash icono-receta' id="borrar"></i>
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
                    <input class="input-num" style="color: #8A8A8E type="number" placeholder="..." min="0">
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
                <button class="btn-aceptar">Aceptar</button>
                <div class="btn-cancelar" onclick="cerrarPopup()">Cancelar</div>
            </div>

        </div>
    `;

    document.body.appendChild(blurBox);
}

// Popup para info receta
document.querySelector(".contenedor-elementos").addEventListener("click", (event) => {
    let elemento = event.target.closest(".caja-elemento"); 
    if (elemento) {
        let index = Array.from(document.querySelectorAll(".caja-elemento")).indexOf(elemento);
        mostrarIngredientes().then(data => {
            crearPopupInfoReceta(data[index]); 

            const nomReceta = document.getElementById("nom-receta")
            const btnEditar = document.getElementById("editar")

            btnEditar.addEventListener("click", () => {
                if (!nomReceta.disabled) {
                    nomReceta.disabled = true
                } else {
                    nomReceta.disabled = false
                }
            })
            console.log("Click")
        });
    }
});

function crearPopupInfoReceta(tupla) {
    const blurBox = document.createElement("div");
    blurBox.className = "blur-box";

    blurBox.innerHTML = `
        <div class="info-receta">
            <button class="cerrar" onclick="cerrarPopup()">&times;</button>

            <div class="linea1">
                <input class="nom-receta" id="nom-receta" type="text" placeholder="Nombre de la receta..." value="${tupla.nombre}" disabled>
                <div class="linea1-derecha">
                    <i class='bx bx-edit icono-receta' id="editar"></i>
                    <i class='bx bx-trash icono-receta' id="borrar"></i>
                </div>
            </div>
            <hr>
            <div class="linea2">
                <p>Ingredientes</p>
                <div class="linea2-derecha">
                    <i class='bx bx-book-open icono-receta'></i>
                    <span class="num-ing" style="color: #8A8A8E">${tupla.ingredientes ? tupla.ingredientes.length : 0}</span>
                </div>
            </div>
            <div class="linea3">
                <p>Porciones</p>
                <div class="linea3-derecha">
                    <i class='bx bx-doughnut-chart icono-receta'></i>
                    <span class="num-por" style="color: #8A8A8E">${tupla.num_porciones}</span>
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
                    ${(Array.isArray(tupla.ingredientes) ? tupla.ingredientes.map(ing => `
                        <tr>
                            <td>${ing.nombre}</td>
                            <td>${ing.cantidad}</td>
                            <td>${ing.unidad}</td>
                            <td>
                                <i class='bx bx-edit icono-receta'></i>
                                <i class='bx bx-trash icono-receta'></i>
                            </td>
                        </tr>
                    `).join('') : `<tr><td colspan="4">No hay ingredientes</td></tr>`)}
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
                <button class="btn-aceptar">Aceptar</button>
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