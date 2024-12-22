# HechoEnCasa-Cliente

Bienvenido al repositorio de GitHub donde daremos lugar al desarrollo del proyecto.

Existes lineamientos a seguir en cuanto a la implementación para llevar un desarrollo más organizado y eficaz.

## Definición de variables

### HTML

#### **Clases**

_Convención BEM (Block-Element-Modifier)_

> **Block:** Representa un componente independiente  
>  `Ejemplo: card`  
> **Element:** Representa un subelemento del bloque  
>  `Ejemplo: card-header y card-content`  
> **Modifier:** Representa una variación del bloque o elemento  
> `Ejemplo: card-highlighted`

```HTML
<div class="card card-highlighted">
  <div class="card-header">Header</div>
  <div class="card-content">Content</div>
</div>
```

#### **IDs**

_Convención camelCase_  
La primera palabra en minúscula y cada palabra siguiente con mayúscula

```HTML
<div id="mainContainer"></div>
<button id="submitButton"></button>
```

Evitar usar IDs para Estilos

```CSS
#mainContainer {    /* NO */
  color: blue;
}

.main-container {   /* SI */
  color: blue;
}
```

---

### **JavaScript**

#### **Variables**

_Convención camelCase_  
La primera palabra en minúscula y cada palabra siguiente con mayúscula

```javascript
let formControl;
const submitButton;
```

#### **Funciones**

_Convención camelCase_  
La primera palabra en minúscula y cada palabra siguiente con mayúscula

```javascript
function fetchData() {
  // código
}

const handleClick = () => {
  // código
};
```

#### **Clases**

_Convención PascalCase_  
Cada palabra comienza con mayúscula

```javascript
class UserProfile {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getUserInfo() {
    return `${this.name}, ${this.age}`;
  }
}
```

#### **Constantes**

_Convención UPPERCASE con guiones bajos_  
Todas las letras en mayúscula y las palabras separadas por guiones bajos

```javascript
const API_URL = "https://api.example.com";
const MAX_USERS = 100;
```

#### **Uso de prefijos para tipos específicos (Opcional)**

Para mejorar la legibilidad y el mantenimiento del código, se recomienda el uso de prefijos para identificar el tipo de dato de las variables.

- **Booleanos:** Utilizar prefijos `is`, `has`, `can`, etc.

  ```javascript
  let isActive = true;
  let hasPermission = false;
  ```

- **Números:** Utilizar el prefijo `num`

  ```javascript
  let numItems = 5;
  let numUsers = 100;
  ```

- **Cadenas:** Utilizar el prefijo `str`

  ```javascript
  let strName = "John";
  let strMessage = "Hello, World!";
  ```

- **Arrays:** Utilizar el prefijo `arr`

  ```javascript
  let arrUsers = ["Alice", "Bob", "Charlie"];
  let arrScores = [10, 20, 30];
  ```

- **Objetos:** Utilizar el prefijo `obj`

  ```javascript
  let objUser = { name: "John", age: 30 };
  let objConfig = { theme: "dark", language: "en" };
  ```

---

### **Consejos**

- Definir nombres claros y específicos sobre el propósito del elemento.

  ```HTML
  <div class="navigation-menu"></div>
  <span class="error-message"></span>
  ```

- Evitar Abreviaturas Ambiguas

  ```javascript
  let btn = document.getElementById("submit"); // NO
  let submitButton = document.getElementById("submit"); // SI
  ```

- Evita usar nombres genéricos como `header`, `footer`, `button`, `container`

  ```HTML
  <div class="container">NO</div>
  <div class="product-container">SI</div>
  ```

- Mantener los nombres cortos pero significativos

  ```javascript
  let navigationMenuOptionsListContainer = []; // NO
  let menuOptions = []; // SI
  ```
