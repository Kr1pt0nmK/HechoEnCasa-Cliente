const mainBox = document.querySelector(".main-box");

let fijo = document.querySelector('#botonFijos')
let categoria = document.querySelector('#botonCategoria')
let temporada = document.querySelector('#botonTemporada')
let emergente = document.querySelector('#botonEmergentes')
let iconoF = document.querySelector('.fijo')
let iconoC = document.querySelector('.categoria')
let iconoT = document.querySelector('.temporada')
let iconoE = document.querySelector('.emergente')

let btnFiltros = document.getElementById("cajaFiltrar")

const seccionFijos = crearSeccionFijos();
mainBox.appendChild(seccionFijos);

const seccionCategorias = crearSeccionCategorias();
mainBox.appendChild(seccionCategorias);
  
const seccionTemporada = crearSeccionTemporada();
mainBox.appendChild(seccionTemporada);

const seccionEmergentes = crearSeccionEmergentes();
mainBox.appendChild(seccionEmergentes);

fijo.onclick = () => {
  iconoF.classList.add("activo");
  iconoC.classList.remove("activo");
  iconoT.classList.remove("activo");
  iconoE.classList.remove("activo");
  
  btnFiltros.style.display = "flex";

  seccionFijos.classList.remove("oculto");
  seccionCategorias.classList.add("oculto");
  seccionTemporada.classList.add("oculto");
  seccionEmergentes.classList.add("oculto");
}
  
categoria.onclick = () => {
  iconoF.classList.remove("activo");
  iconoC.classList.add("activo");
  iconoT.classList.remove("activo")
  iconoE.classList.remove("activo");
  
  btnFiltros.style.display = "none";

  seccionFijos.classList.add("oculto");
  seccionCategorias.classList.remove("oculto");
  seccionTemporada.classList.add("oculto");
  seccionEmergentes.classList.add("oculto");
}
  
temporada.onclick = () => {
  iconoF.classList.remove("activo")
  iconoC.classList.remove("activo")
  iconoT.classList.add("activo")
  iconoE.classList.remove("activo")
  
  btnFiltros.style.display = "none";

  seccionFijos.classList.add("oculto");
  seccionCategorias.classList.add("oculto");
  seccionTemporada.classList.remove("oculto");
  seccionEmergentes.classList.add("oculto");
}
  
emergente.onclick = () => {
  iconoF.classList.remove("activo")
  iconoC.classList.remove("activo")
  iconoT.classList.remove("activo")
  iconoE.classList.add("activo")
  
  btnFiltros.style.display = "none";

  seccionFijos.classList.add("oculto");
  seccionCategorias.classList.add("oculto");
  seccionTemporada.classList.add("oculto");
  seccionEmergentes.classList.remove("oculto");
}

document.getElementById("botonAgregar").addEventListener("click", () => {
  
    if(iconoF.classList.contains("activo")) {
      crearPopupPostreFijo();
    } else if(iconoC.classList.contains("activo")) {
      crearPopupAgregarCategoria();
    } else if(iconoT.classList.contains("activo")) {
      crearPopupTemporada();
    } else if(iconoE.classList.contains("activo")) {
      crearPopupEmergente();
    }
  
});

// <-- FUNCIONES PARA CREAR LAS SECCIONES -->

// Funcion para crear la seccion de postres fijos
function crearSeccionFijos() {
    const section = document.createElement("section");
    section.classList.add("contenedor-elementos");

    section.innerHTML = `
      <div class="caja-elemento" style="padding:0%; align-items: center; gap:0;">
        <img src="https://images.unsplash.com/photo-1519869325930-281384150729?q=80&w=1466&auto=format&fit=crop"
             alt="Cupcake Vainilla" class="imagen-postre">
        <div class="nombre-receta">
          <h2 style="font-size:1rem; padding:10px;">Cupcake Vainilla</h2>
        </div>
      </div>
    `;
    return section;
}

// Crea la seccion de categorias
function crearSeccionCategorias() {
    const section = document.createElement("section");
    section.classList.add("contenedor-elementos", "oculto");

    section.innerHTML = `
      <div class="caja-elemento">
        <div class="color-header"></div>
        <div class="nombre-receta">
          <h2>Pays</h2>
        </div>
        <hr>
      </div>
    `;
    return section;
}

// Filtro de categorías
const filtroBtn = document.querySelector(".caja-filtrar");
const panelCategorias = crearDropdownCategorias();
if (filtroBtn) {
  filtroBtn.addEventListener("click", () => {
    toggleDropdownCategorias(panelCategorias, filtroBtn);
  });
}

 // Crea la seccion de postres temporada
function crearSeccionTemporada() {
    const section = document.createElement("section");
    section.classList.add("contenedor-elementos", "oculto");
    section.innerHTML = `
      <div class="caja-elemento" style="padding:0%; align-items: center; gap:0;">
        <img src="https://plus.unsplash.com/premium_photo-1661517018404-41e904bddd8e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D"
             alt="Cupcake Vainilla" class="imagen-postre">
        <div class="cajaContenido">
          <div class="nombre-receta">
            <h2 style="font-size:1rem;">Pan de muerto</h2>
          </div>
          <label class="switch">
            <input type="checkbox">
            <span class="slider"></span>
          </label>
        </div>
      </div>
    `;
    return section;
}

// Funcion para crear la seccion de postres emergentes
function crearSeccionEmergentes() {
    const section = document.createElement("section");
    section.classList.add("contenedor-elementos", "oculto");

    section.innerHTML = `
      <div class="caja-elemento" style="padding:0%; align-items: center; gap:0;">
        <img src="https://images.unsplash.com/photo-1583527976767-5399024eeb05?q=80&w=1470&auto=format&fit=crop"
             alt="Rol de Canela" class="imagen-postre">
        <div class="nombre-receta">
          <h2 style="font-size:1rem; padding:10px;">Rol de canela</h2>
        </div>
      </div>
    `;
    return section;
}

// <-- FUNCIONES PARA CREAR LOS POPUP QUE AGREGAN UN NUEVO ELEMENTO-->

// Funcion para crear el popup de la seccion de fijos
function crearPopupPostreFijo() {
    const blurBox = document.createElement("div");
    blurBox.className = "blur-box";

    blurBox.innerHTML = `
      <div class="popup-postre popup">
        <!-- Botón de cierre -->
        <span class="cerrar-popup" onclick="cerrarPopup()">&times;</span>
        
        <i class='bx bx-edit icono-editar' id="editar"></i>      
        <div class="popup-header">
          <i class='bx bxs-image-add icono-subir'></i>
        </div>
        
        <div class="popup-content">
          <div class="linea1-derecha">
            <input placeholder="Nombre del postre..." class="nombreP input" disabled>
            <i class='bx bx-edit icono-pos icon' id="editar"></i>
            <i class='bx bx-trash icono-pos' id="borrar"></i>
          </div>
          
          <div class="linea2-derecha">
            <label for="categoriaPostre">Categoría</label>
            <select class="selectFE" id="categoriaPostre catTop">
              <option value="" hidden>...</option>
              <option value="cupcake">Cupcake</option>
              <option value="pastel">Pastel</option>
              <option value="galleta">Galleta</option>
            </select>
          </div>
          <hr>
          <label for="descripcionPostre">Descripción</label>
          <textarea id="descripcionPostre" placeholder="..."></textarea>
          
          <label class="tituloAtributo">Atributos extra</label>
          <!-- Área para atributos extra con botón "agregar atributo" -->
          <div class="contenedor-atributos">
            <!--button class="btn-agregar-atributo">+</button-->
            <div class="atributos-lista">
              <div class="atributo-row">
                <input type="text" class="atributo-nombre" placeholder="..." />
                <select class="atributo-select">
                  <option value="" hidden>...</option>
                  <option value="cupcake-vainilla">Cupcake de vainilla</option>
                  <option value="cupcake-chocolate">Cupcake Chocolate</option>
                  <option value="cupcake-zanahoria">Cupcake Zanahoria</option>
                </select>
                </div>
            </div>
          </div>
    
          <label>Paquetes</label>
          <div class="contenedor-paquetes">
            <div class="caja-paquetes">
              <div class="paquetes-lista"></div>
              <button class="btn-agregar-paquete">+</button>
            </div>
            <div class="opciones-paquete">
              <select name="tipo-paquete" id="tipoPaquete">
                <option value="" hidden>...</option>
                <option value="piezas">Piezas</option>
                <option value="docenas">Docenas</option>
                <option value="kg">Kg</option>
              </select>
              <label class="requiere-minimo">
                <input type="checkbox" />
                 Requiere mínimo
              </label>
            </div>
                <div class="btns2">
                    <button class="btn-aceptar">Aceptar</button>
                    <div class="btn-cancelar" onclick="cerrarPopup()">Cancelar</div>
                </div>  
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(blurBox);
}

// Popup para agregar categoría
function crearPopupAgregarCategoria() {
    const blurBox = document.createElement("div");
    blurBox.className = "blur-box";

    blurBox.innerHTML = `
      <div class="crear-categoria popup">
        <button class="cerrar-categoria" onclick="cerrarPopup()">&times;</button>

        <div class="linea1">
          <input class="input-nomC input" id="input-nomC" type="text" placeholder="Nombre de la categoría.." disabled>
          <div class="linea1-derecha">
            <i class='bx bx-edit icono-pos icon' id="editar"></i>
            <i class='bx bx-trash icono-pos' id="borrar"></i>
          </div>
        </div>
        <hr>
        <div class="linea2">
          <p>Tipo de atributo</p>
          <div class="linea2-derecha">
            <select class="selectCategorias">
              <option hidden>...</option>
              <option value="1">Frost</option>
            </select>
          </div>
        </div>

        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Acción</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td>
                <button class="btn-agregaing" onclick="opcionesAtributosExt()">+</button>
              </td>
            </tr>
          </tbody>
        </table>

        <div class="btns">
          <button class="btn-aceptar">Aceptar</button>
          <div class="btn-cancelar" onclick="cerrarPopup()">Cancelar</div>
        </div>
    `;

    document.body.appendChild(blurBox);
}

// Popup para agregar postre temporada
function crearPopupTemporada() {
  const blurBox = document.createElement("div");
  blurBox.className = "blur-box";
  blurBox.innerHTML = `
    <div class="popup-postre pop-emergente popup">
      <span class="cerrar-popup" onclick="cerrarPopup()">&times;</span>

        <i class='bx bx-edit icono-editar' id="editar"></i>      
      <div class="popup-header">
        <i class='bx bxs-image-add icono-subir'></i>
      </div>

      
      <div class="popup-content">
        <div class="linea1-derecha">
          <input placeholder="Nombre del postre de temporada..." class="nombreP input" id="Titulodos" disabled>
          <i class='bx bx-edit icono-pos icon' id="editarTitulodos"></i>
          <i class='bx bx-trash icono-pos' id="borrar"></i>
        </div>

        <div class="linea2-derecha">
        <label for="recetaPostre">Receta</label>
        <select class="selectFE" id="recetaPostre">
          <option value="">...</option>
          <option value="cupcake">Cupcake</option>
          <option value="pastel">Pastel</option>
          <option value="galleta">Galleta</option>
        </select>
        </div>

        <hr>

        <label for="descripcionPostre">Descripción</label>
        <textarea id="descripcionPostre" placeholder="..."></textarea>
        
        <label for="descripcionPostre">Stock</label>        
        <div class="stock-container">
          <div class="espacio">
            <div class="fondo">
              <button class="stock-muestra">...</button>
            </div>
            <div class="cantidad-btn">
              <input type="text" placeholder="cantidad..." id="can">                    
              <div class="button-group">
                <button class="btn minus" id="decreaseStock">-</button>
                <button class="btn plus" id="increaseStock">+</button>
              </div>
            </div>
          </div>  
          <div class="btns2">
            <button class="btn-aceptar">Aceptar</button>
            <div class="btn-cancelar" onclick="cerrarPopup()">Cancelar</div>
          </div>              
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(blurBox);
}

// Funcion para crear el popup de la seccion de emergentes
function crearPopupEmergente() {
    const blurBox = document.createElement("div");
    blurBox.className = "blur-box";

    blurBox.innerHTML = `
      <div class="popup-postre pop-emergente popup">
        <span class="cerrar-popup" onclick="cerrarPopup()">&times;</span>
  
          <i class='bx bx-edit icono-editar' id="editar"></i>      
        <div class="popup-header">
          <i class='bx bxs-image-add icono-subir'></i>
        </div>
  
        <div class="popup-content">
          <div class="linea1-derecha">
            <input placeholder="Nombre del postre emergente..." class="nombreP input" disabled>
            <i class='bx bx-edit icono-pos icon' id="editar"></i>
            <i class='bx bx-trash icono-pos' id="borrar"></i>
          </div>
  
          <div class="linea2-derecha">
          <label for="recetaPostre">Receta</label>
          <select class="selectFE" id="recetaPostre">
            <option value="" hidden>...</option>
            <option value="cupcake">Cupcake</option>
            <option value="pastel">Pastel</option>
            <option value="galleta">Galleta</option>
          </select>
          </div>
  
          <hr>
  
          <label for="descripcionPostre">Descripción</label>
          <textarea id="descripcionPostre" placeholder="..."></textarea>
          
          <label for="descripcionPostre">Stock</label>        
          <div class="stock-container">
                <div class="espacio">
                    <div class="fondo">
                        <button class="stock-muestra">...</button>
                    </div>
                    <div class="cantidad-btn">
                        <input type="text" placeholder="cantidad..." id="can">                    
                        <div class="button-group">
                            <button class="btn minus" id="decreaseStock">-</button>
                            <button class="btn plus" id="increaseStock">+</button>
                        </div>
                    </div>
                </div> 
  
                <div class="btns2">
                    <button class="btn-aceptar">Aceptar</button>
                    <div class="btn-cancelar" onclick="cerrarPopup()">Cancelar</div>
                </div>  
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(blurBox);   
}

// <-- FUNCIONES PARA CREAR LOS POPUP QUE MUESTRAN LA INFO DEL ELEMENTO -->

// Funcion para mostrar el popup de la seccion de fijos
function infoPopupFijo() {
  const blurBox = document.createElement("div");
  blurBox.className = "blur-box";
  blurBox.innerHTML = `
    <div class="popup-postre popup">
      <span class="cerrar-popup" onclick="cerrarPopup()">&times;</span>
      
      <i class='bx bx-edit icono-editar' id="editar" style="color: white;"></i>       
      <div class="popup-header">
        <img src="https://images.unsplash.com/photo-1519869325930-281384150729?q=80&w=1466&auto=format&fit=crop"
        alt="Cupcake Vainilla" class="imagen-postre imgpop">
      </div>
      
      <div class="popup-content">
        <div class="linea1-derecha">
          <input placeholder="Cupcake de vainilla" class="nombreP input" disabled>
          <i class='bx bx-edit icono-pos icon' id="editar"></i>
          <i class='bx bx-trash icono-pos' id="borrar"></i>
        </div>
          
        <div class="linea2-derecha">
          <label for="categoriaPostre">Categoría</label>
          <select class="selectFE" id="categoriaPostre catTop">
            <option value="" hidden>...</option>
            <option value="cupcake">Cupcake</option>
            <option value="pastel">Pastel</option>
            <option value="galleta">Galleta</option>
          </select>
        </div>
        <hr>    
        <label for="descripcionPostre">Descripción</label>
        <textarea id="descripcionPostre" placeholder="..."></textarea>
        
        <label class="tituloAtributo">Atributos extra</label>
        <!-- Área para atributos extra con botón "agregar atributo" -->
        <div class="contenedor-atributos">
          <!--button class="btn-agregar-atributo">+</button-->
          <div class="atributos-lista">
            <div class="atributo-row">
              <input type="text" class="atributo-nombre" placeholder="..." />
              <select class="atributo-select">
                <option value="" hidden>...</option>
                <option value="cupcake-vainilla">Cupcake de vainilla</option>
                <option value="cupcake-chocolate">Cupcake Chocolate</option>
                <option value="cupcake-zanahoria">Cupcake Zanahoria</option>
              </select>
              </div>
          </div>
        </div>
    
        <label>Paquetes</label>
        <div class="contenedor-paquetes">
          <div class="caja-paquetes">
            <div class="paquetes-lista"></div>
            <button class="btn-agregar-paquete">+</button>
          </div>
          <div class="opciones-paquete">
            <select name="tipo-paquete" id="tipoPaquete">
              <option value="" hidden>...</option>
              <option value="piezas">Piezas</option>
              <option value="docenas">Docenas</option>
              <option value="kg">Kg</option>
            </select>
            <label class="requiere-minimo">
              <input type="checkbox">
               Requiere mínimo
            </label>
          </div>
          <div class="btns2">
            <button class="btn-aceptar">Aceptar</button>
            <div class="btn-cancelar" onclick="cerrarPopup()">Cancelar</div>
          </div>  
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(blurBox);
}

// Popup para info categoría
function crearPopupInfoCategoria() {
  const blurBox = document.createElement("div");
  blurBox.className = "blur-box";

  blurBox.innerHTML = `
    <div class="info-categoria popup">
      <button class="cerrar-categoria" onclick="cerrarPopup()">&times;</button>

      <div class="linea1">
        <input class="nomC input" id="nomC" type="text" placeholder="Nombre de la categoría.." value="" diseabled>
        <div class="linea1-derecha">
            <i class='bx bx-edit icono-categoria icon' id="btn-edit"></i>
            <i class='bx bx-trash icono-categoria'></i>
        </div>
      </div>
      <hr>
      <div class="linea2">
        <p>Tipo de atributo</p>
        <div class="linea2-derecha">
          <select class="selectCategorias">
            <option hidden>...</option>
            <option value="1">Frost</option>
          </select>
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td> Queso crema</td>
            <td>50</td>
            <td>
              <i class='bx bx-edit icono-categoria'></i>
              <i class='bx bx-trash icono-categoria'></i>
            </td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td>
              <div class="btn-agregaing" onclick="opcionesAtributosExt()">+</div>
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

// Popup para info temporada
function infoPopupTemporada() {
  const blurBox = document.createElement("div");
  blurBox.className = "blur-box";
  blurBox.innerHTML = `
    <div class="popup-postre pop-emergente popup">
      <span class="cerrar-popup" onclick="cerrarPopup()">&times;</span>

      <i class='bx bx-edit icono-editar' style="color: white;"></i>      
      <div class="popup-header">
        <img src="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
             alt="Rol de Canela" class="imagen-postre imgpop" />
      </div>

      <div class="popup-content">
        <div class="linea1-derecha">
          <input placeholder="Nombre postre de temporada..." class="nombreP input" id="Titulo" disabled>
          <i class='bx bx-edit icono-pos icon' id="editarTitulo"></i>
          <i class='bx bx-trash icono-pos' id="borrar"></i>
        </div>

        <div class="linea2-derecha">
          <label for="recetaPostre">Receta</label>
          <select class="selectFE" id="recetaPostre">
            <option value="" hidden>...</option>
            <option value="cupcake">Cupcake</option>
            <option value="pastel">Pastel</option>
            <option value="galleta">Galleta</option>
          </select>
        </div>

        <hr>

        <label for="descripcionPostre">Descripción</label>
        <textarea id="descripcionPostre" placeholder="..."></textarea>
        
        <label for="descripcionPostre">Stock</label>        
        <div class="stock-container">
          <div class="espacio">
            <div class="fondo">
                <button class="stock-muestra">...</button>
            </div>
            <div class="cantidad-btn">
              <input type="text" placeholder="cantidad..." id="can">                    
              <div class="button-group">
                  <button class="btn minus" id="decreaseStock">-</button>
                  <button class="btn plus" id="increaseStock">+</button>
              </div>
            </div>
          </div>

          <div class="btns">
            <button class="btn-aceptar">Aceptar</button>
            <div class="btn-cancelar" onclick="cerrarPopup()">Cancelar</div>
          </div>              
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(blurBox);
}

// Funcion para mostrar el popup de la seccion de emergentes
function infoPopupEmergente() {
  const blurBox = document.createElement("div");
  blurBox.className = "blur-box";
  
  blurBox.innerHTML = `
    <div class="popup-postre pop-emergente popup">
      <span class="cerrar-popup" onclick="cerrarPopup()">&times;</span>
  
        <i class='bx bx-edit icono-editar' id="editar" style="color: white;"></i>      
      <div class="popup-header">
        <img src="https://images.unsplash.com/photo-1583527976767-5399024eeb05?q=80&w=1470&auto=format&fit=crop"
             alt="Rol de Canela" class="imagen-postre imgpop" />
      </div>
  
        
      <div class="popup-content">
        <div class="linea1-derecha">
          <input placeholder="Nombre del postre emergente..." class="nombreP input" disabled>
          <i class='bx bx-edit icono-pos icon' id="editar"></i>
          <i class='bx bx-trash icono-pos' id="borrar"></i>
        </div>
  
        <div class="linea2-derecha">
          <label for="recetaPostre">Receta</label>
          <select class="selectFE" id="recetaPostre">
            <option value="" hidden>...</option>
            <option value="cupcake">Cupcake</option>
            <option value="pastel">Pastel</option>
            <option value="galleta">Galleta</option>
          </select>
        </div>  
        <hr>
        <label for="descripcionPostre">Descripción</label>
        <textarea id="descripcionPostre" placeholder="..."></textarea>
          
        <label for="descripcionPostre">Stock</label>        
        <div class="stock-container">
          <div class="espacio">
            <div class="fondo">
              <button class="stock-muestra">...</button>
            </div>
            <div class="cantidad-btn">
              <input type="text" placeholder="cantidad..." id="can">                    
              <div class="button-group">
                <button class="btn minus" id="decreaseStock">-</button>
                <button class="btn plus" id="increaseStock">+</button>
              </div>
            </div>
          </div>
  
          <div class="btns2">
            <button class="btn-aceptar">Aceptar</button>
            <div class="btn-cancelar" onclick="cerrarPopup()">Cancelar</div>
          </div>              
        </div>
  
      </div>
    </div>
    `;
    document.body.appendChild(blurBox);
  }

// <-- FUNCIONES PARA CREAR CAJAS -->

// Funcion del filtro de las categorias
function crearDropdownCategorias() {
  const panel = document.createElement("div");
  panel.classList.add("dropdown-categorias");

  panel.innerHTML = `
    <div class="dropdown-header">
      <input type="text" class="dropdown-search" placeholder="Filtrar categorías..." />
      <span class="dropdown-close">&times;</span>
    </div>
    <ul class="dropdown-list">
      <li>Pays</li>
      <li>Flanes</li>
      <li>Galletas</li>
      <li>Cookie Cake</li>
      <li>Cupcakes</li>
      <li>Mostachón</li>
      <li>Cheesecake</li>
      <li>Donut Cakes</li>
      <li>Profiteroles</li>
      <li>Brownies</li>
      <li>Brownies Cake</li>
    </ul>
  `;
  document.body.appendChild(panel);
    
  const closeBtn = panel.querySelector(".dropdown-close");
  closeBtn.addEventListener("click", () => {
    panel.classList.remove("mostrar");
  });
    
  const searchInput = panel.querySelector(".dropdown-search");
  searchInput.addEventListener("input", () => {
    filtrarCategorias(searchInput.value, panel);
  });
  
  return panel;
}
  
function toggleDropdownCategorias(panel, filtroBtn) {
  if (panel.classList.contains("mostrar")) {
    panel.classList.remove("mostrar");
  } else {
    panel.classList.add("mostrar");
    posicionarPanel(panel, filtroBtn);
  }
}
  
function filtrarCategorias(texto, panel) {
  const items = panel.querySelectorAll(".dropdown-list li");
  texto = texto.toLowerCase().trim();
  items.forEach((li) => {
    const categoria = li.textContent.toLowerCase();
    li.style.display = categoria.includes(texto) ? "block" : "none";
  });
}

// Caja de opciones de Atributos Extras 
function opcionesAtributosExt() {
  const opciones = document.createElement("div");
  opciones.className = "blur-box";

  opciones.innerHTML = `
  <div class="opciones-atributos">
      <ul>
          <li>
              <div class="inp-cerrar">
                  <input class="input-op-atExt" type="text" placeholder="Atributo extra...">
                  <button class="cierra-op">&times;</button>
              </div>
          </li>
      </ul>
      <ul class="lista-op">
          <li class="conHover">Cupcake chocolate</li>
          <li class="conHover">Cupcake vainilla</li>
          <li class="conHover">Cupcake redvelvet</li>
          <li class="conHover">Pay limón</li>
          <li class="conHover">Pay limón</li>
          <li class="conHover">Pay limón</li>
          <li class="conHover">Pay limón</li>
      </ul>
  </div>
  `;

  document.body.appendChild(opciones);

  opciones.querySelector(".cierra-op").addEventListener("click", () => {
      opciones.remove();
  });
}

// <-- FUNCIÓN GENERAL PARA CERRAR LOS POPUPS -->
function cerrarPopup() {
  const blurBox = document.querySelector(".blur-box");
  if (blurBox) {
      blurBox.remove();
  }
}

// Para deshabilitar los inputs 
document.body.addEventListener("click", (event) => {
  if (event.target.classList.contains("icon")) {
      const popup = event.target.closest(".popup");

      if (popup) {
          const inputNombre = popup.querySelector(".input");

          if (inputNombre) {
              if (!inputNombre.disabled) {
                  inputNombre.disabled = true;
              } else {
                  inputNombre.disabled = false;
              }
          }
      }
  }
});