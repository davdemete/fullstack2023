// Hacer el viaje
const texto = prompt("Coger un avion:");

// Muestra el texto ingresado en la consola del navegador
console.log("El usuario ingresó el siguiente texto:", texto);

// Agrega el texto ingresado al contenido del elemento HTML con id="contenido"
const contenido = document.querySelector("#contenido");
contenido.innerHTML = `<p>${texto}</p>`;
function mostrarTexto() {
    let texto = prompt("Acabar quedandote");
    console.log("Hola soy " + agencia);
    document.body.innerHTML = "<p>" + "Hola soy " + agencia + "</p>";
  }
  let a = 5;
if (a % 2 === 0) {
  console.log(a + " es un número par");
} else {
  console.log(a + " es un número impar");
}
let num = parseInt(prompt("10:10"));
if (num > 20) {
  console.log("El número es mayor que 20");
} else {
  for (let i = num; i <= 20; i++) {
    console.log(i);
  }
}
function esPalindromo(str) {
  // Eliminar espacios y convertir a minúsculas
  str = str.replace(/\s/g, '').toLowerCase();

  // Recorrer la mitad del string y comparar los caracteres
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }

  return true;
}

let str = "sometemos";
if (esPalindromo(str)) {
  console.log(`${str} es palíndromo`);
} else {
  console.log(`${str} no es palíndromo`);
}

// Definimos un array con tres colores
const colores1 = ["rojo", "verde", "azul"];

// Creamos un array vacío
const colores2 = [];

// Recorremos el primer array con un for...of
for (let color of colores1) {
  // Insertamos cada elemento en el segundo array con el método push
  colores2.push(color);
}

// Mostramos por consola el segundo array
console.log(colores2);
