let fijo = document.querySelector('#botonFijos')
let categoria = document.querySelector('#botonCategoria')
let temporada = document.querySelector('#botonTemporada')
let emergente = document.querySelector('#botonEmergentes')
let iconoF = document.querySelector('.fijo')
let iconoC = document.querySelector('.categoria')
let iconoT = document.querySelector('.temporada')
let iconoE = document.querySelector('.emergente')

let btnFiltros = document.getElementById("cajaFiltrar")

fijo.onclick = () => {
  iconoF.classList.add("activo")
  iconoC.classList.remove("activo")
  iconoT.classList.remove("activo")
  iconoE.classList.remove("activo")

  btnFiltros.style.display = "flex";
}

categoria.onclick = () => {
  iconoF.classList.remove("activo")
  iconoC.classList.add("activo")
  iconoT.classList.remove("activo")
  iconoE.classList.remove("activo")

  btnFiltros.style.display = "none";
}

temporada.onclick = () => {
  iconoF.classList.remove("activo")
  iconoC.classList.remove("activo")
  iconoT.classList.add("activo")
  iconoE.classList.remove("activo")

  btnFiltros.style.display = "none";
}

emergente.onclick = () => {
  iconoF.classList.remove("activo")
  iconoC.classList.remove("activo")
  iconoT.classList.remove("activo")
  iconoE.classList.add("activo")

  btnFiltros.style.display = "none";
}

const contElementos = document.querySelector(".contenedor-elementos");

// Mostrar el popup correspondiente a cada sección
document.getElementById("botonAgregar").addEventListener("click", () => {
  
  if(iconoF.classList.contains("activo")) {
    //crearPopupAgregarFijo();
  } else if(iconoC.classList.contains("activo")) {
    crearPopupAgregarCategoria();

    const inputNomC = document.getElementById("input-nomC")
    const btnEditar = document.getElementById("editar")

    btnEditar.addEventListener("click", () => {
        if (!inputNomC.disabled) {
            inputNomC.disabled = true
        } else {
            inputNomC.disabled = false
        }
    })
  } else if(iconoT.classList.contains("activo")) {
    //crearPopupAgregarTemporada();
  } else if(iconoE.classList.contains("activo")) {
    //crearPopupAgregarEmergente();
  }

});

// Popup para agregar categoría
function crearPopupAgregarCategoria() {
    const blurBox = document.createElement("div");
    blurBox.className = "blur-box";

    blurBox.innerHTML = `
      <div class="crear-categoria">
        <button class="cerrar" onclick="cerrarPopup()">&times;</button>

        <div class="linea1">
          <input class="input-nomC" id="input-nomC" type="text" placeholder="Nombre de la categoría.." disabled>
          <div class="linea1-derecha">
            <i class='bx bx-edit icono-pos' id="editar"></i>
            <i class='bx bx-trash icono-pos' id="borrar"></i>
          </div>
        </div>
        <hr>
        <div class="linea2">
          <p>Tipo de atributo</p>
          <div class="linea2-derecha">
            <select>
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
                <div class="btn-agregaing">+</div>
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

// Popup para info categoría
/*function crearPopupInfoCategoria() {
  const blurBox = document.createElement("div");
  blurBox.className = "blur-box";

  blurBox.innerHTML = `
    <div class="info-categoria">
      <button class="cerrar" onclick="cerrarPopup()">&times;</button>

      <div class="linea1">
        <input class="nomC" id="nomC" type="text" placeholder="Nombre de la categoría.." value="" diseabled>
        <div class="linea1-derecha">
            <i class='bx bx-edit icono-categoria' id="btn-edit"></i>
            <i class='bx bx-trash icono-categoria'></i>
        </div>
      </div>
      <hr>
      <div class="linea2">
        <p>Tipo de atributo</p>
        <div class="linea2-derecha">
          <select>
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
}*/


function cerrarPopup() {
    const blurBox = document.querySelector(".blur-box");
    if (blurBox) {
        blurBox.remove();
    }
}
