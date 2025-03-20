const contElementos = document.querySelector(".contenedor-elementos");

document.addEventListener("DOMContentLoaded", () => {
    mostrarIngredientes();
});

let mostrarIngredientes = () => {
    return fetch("../PHP/inventario.php?action=mostrar")
        .then(response => response.json())  
        .then(elemento => {
            contElementos.innerHTML = ""; // Limpiar antes de agregar nuevos elementos

            elemento.forEach(tupla => {
                let cajaElemento = document.createElement("div");
                cajaElemento.className = "caja-elemento";

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
                `;
                contElementos.appendChild(cajaElemento);
            });
        })
        .catch(error => {
            console.error("Error al cargar los datos:", error);
        });
};

/*Aqui empieza el codigo de la ventana emergente*/
document.addEventListener("DOMContentLoaded", function () {
    const botonAgregar = document.getElementById("botonAgregar");
    const selectUnidad = document.createElement("select");
    selectUnidad.style.height = "36px"
    selectUnidad.innerHTML = `
        <option value=""hidden>Unidad...</option>
        <option value="gramos">gramos</option>
        <option value="mililitros">mililitros</option>
        <option value="piezas">piezas</option>
        <option value="boton">Agregar nueva unidad</option>
    `;

    function crearPopup(htmlContent, popupClass = "") {
        const blurBox = document.createElement("div");
        blurBox.className = "blur-box";

        const popupContainer = document.createElement("div");
        popupContainer.className = `contenedor-popup ${popupClass}`; /*Aqui se le agrega la clase popup-agregar, abre el popup para agregar nuevo ingrediente*/
        popupContainer.innerHTML = htmlContent;

        blurBox.appendChild(popupContainer);
        document.body.appendChild(blurBox);
        return blurBox;
    }

    /*Nuevo Ingrediente*/
    botonAgregar.addEventListener("click", () => {
        const popup = crearPopup(`
        <div class="contenedor-ingrediente">
            <div class="color-header"></div>
            <button class="cerrar">&times;</button>
                
            <input type="text" class="Titulo" placeholder="Ingrediente..." disabled>
            <div class="iconos">
                <i class='bx bx-edit icono-pos' id="editar"></i>
                <i class='bx bx-trash icono-pos' id="borrar"></i>
            </div>
            <hr>
            <div class="formulario-popup">
                ${selectUnidad.outerHTML}
                <div class="caja-inputs">
                    <input type="text" placeholder="Cantidad inicial..."/>
                    <input type="text" placeholder="Cantidad mínima..."/>    
                </div>   
            </div>
            <div class="btns">
                <button class="btn-aceptar">Agregar</button>
                <div class="btn-cancelar">Cancelar</div>
            </div> 
        </div>
        `);
        
        const tituloInput = popup.querySelector(".Titulo");
        const editarIcono = popup.querySelector("#editar");
    
        editarIcono.addEventListener("click", () => {
            tituloInput.readOnly = !tituloInput.readOnly; 
            tituloInput.classList.toggle("activo"); 
            tituloInput.focus(); 
        });

        popup.querySelector(".cerrar").addEventListener("click", () => popup.remove());
        popup.querySelector(".btn-cancelar").addEventListener("click", () => popup.remove());
    });
    
    /*Nueva unidad de medida*/
    document.addEventListener("change", function (event) { 
        if (event.target.tagName === "SELECT" && event.target.value === "boton") {
            const popupMedida = crearPopup(`
                <button class="cerrardos">&times;</button>
                <div class="cambio">
                    <input type="text" class="nuevaMedida" placeholder="Unidad de medida..." readonly>
                    <div class="derecha">
                        <i class='bx bx-edit icono-pos editar-medida'></i>
                        <i class='bx bx-trash icono-pos' id="borrar"></i>
                    </div>
                </div>
                <hr>
                <input type="text" class="nuevaOpcion" placeholder="Abreviación...">
                <div class="btns">
                    <button class="btn-aceptar">Aceptar</button>
                    <div class="btn-cancelar">Cancelar</div>
                </div>
            `, "popup-contenMedida");
    
            const tituloInput = popupMedida.querySelector(".nuevaMedida");
            const editarIcono = popupMedida.querySelector(".editar-medida");
            
            editarIcono.addEventListener("click", () => {
                if (tituloInput.readOnly) {
                    tituloInput.readOnly = false; 
                    tituloInput.classList.add("activo"); 
                    tituloInput.focus(); 
                } else {
                    tituloInput.readOnly = true; 
                    tituloInput.classList.remove("activo"); 
                }
            });
    
            popupMedida.querySelector(".cerrardos").addEventListener("click", () => popupMedida.remove());
            popupMedida.querySelector(".btn-cancelar").addEventListener("click", () => popupMedida.remove());
        }
    }); 
});