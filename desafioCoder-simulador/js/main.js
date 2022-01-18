/* Hay fragmentos sueltos porque todavía no los pude implementar como quisiera */

/* Primer tercio de la ventana = calcular iva de juegos vistos en steam y sugerir la alternativa marca patito con descuento */
const calcularIva = document.getElementById("calcular-iva");
calcularIva.addEventListener("click", entrada);

function entrada() {
  let nombre = prompt(
    `Para calcular el precio final de un juego ingresa su nombre: `
  );
  let entrada = parseFloat(prompt("¿Precio en Steam?"));

  alert(
    `${nombre} tiene un precio final de $${
      entrada * 1.65
    } pesos argentinos. \n $${entrada} = precio de mercado \n $${
      entrada * 0.65
    } = 65% impuestos  `
  );
  if ((precio) => 3000 && precio <= 7000) {
    alert("'Marca patito' lo vende con un 5% de descuento.");
  }
  elif(precio <= 300 && precio >= 80);
  {
    alert("Marca patito' lo vende con un 10% de descuento.");
  }
}

/* ---------------------------------------------------------------------------- */

//Segundo tercio de la ventana = Tienda digital. Mostrar lista
//Actividad 6  - Incorporar arrays

const stock = [
  { id: 21, juego: "god of war", precio: 4200 },
  { id: 22, juego: "red dead redemption", precio: 4123.35 },
  { id: 23, juego: "rust", precio: 4027.64 },
  { id: 24, juego: "god of war", precio: 4200 },
  { id: 25, juego: "Age of Empires 2", precio: 224.99 },
];

/* lista de juegos digitales desde un array */
const juegosDigitales = document.getElementById("juegos-digitales");
juegosDigitales.addEventListener("click", listaDigitales);

/* devolver por consola el largo de la lista */
function listaDigitales() {
  console.log(stock.length);
}
/* Agregar a la lista */
stock.push({ id: 26, juego: "juegonuevo", precio: 250 });
stock.length;

//Buscar por id
function consultar() {
  let buscar = stock.find((producto) => producto.id === 23);
  buscar();

  //Buscar productos cuyo precio sea mayor de $5.000
  const menorQuePrecio = stock.filter((producto) => producto.precio < 1000);
  console.log(menorQuePrecio);
  //consultar si hay stock monstrandolo al usuario
  //Agregar peticion de juegos fisicos  (lista)
}

/* let buscar = stock.find((producto) => producto.id === 23);
buscar(); */

/* ---------------------------------------------------------------------------- */

//Tercer tercio de la ventana = Tienda de juegos fisicos. Ver stock y oferta semanal
//Actividad 5 - Incorporar objetos

const oferta = document.getElementById("oferta");
oferta.addEventListener("click", verOferta);

function verOferta(juego, precio) {
  this.juego = juego;
  this.precio = precio;
  this.informe = function () {
    console.log("Esta lista se actualiza todos los miércoles.");
  };

  const miercoles = new verOferta("juego de los miercoles", 202);
  miercoles.juego();
  miercoles.precio();
}
