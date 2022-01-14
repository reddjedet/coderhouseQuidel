/* Falta agregar el getElementById vinculado a el boton search*/

let nombre = prompt("Ingresa el nombre del juego: ");
let entrada = parseFloat(prompt("Ingrese su precio en Steam"));

//Actividad 4
function calcular(nombre, entrada) {
  console.log(
    `${nombre} tiene un precio final de $${
      entrada * 0.65 + entrada
    } pesos argentinos`
  );
}
calcular(nombre, entrada);
/* ----------------------------------------------------------------------- */

//Actividad 5
//lista online de juegos que se agotan
const online = {
  nombre: "Grand Theft Auto V",
  precio: 1050.62,
  disponibilidad: false,
};

console.log(online["nombre"]);
console.log(online["precio"]);
console.log(online["disponibilidad"]);

/* //Actividad 6 
productos fisicos sin vender en el stock de un local comercial*/
const stock = [
  { id: 21, juego: "god of war", precio: 4200 },
  { id: 22, juego: "red dead redemption", precio: 4123.35 },
  { id: 23, juego: "rust", precio: 4027.64 },
  { id: 24, juego: "god of war", precio: 4200 },
  { id: 25, juego: "vegas pro 18", precio: 18703 },
];

//Agregar a la lista
stock.push({ id: 26, juego: "juegonuevo", precio: 250 });

//Buscar por id
const buscar = stock.find((producto) => producto.id === 23);
console.log(buscar);

//Buscar productos cuyo precio sea mayor de $5.000
const mayorQuePrecio = stock.filter((producto) => producto.precio > 5000);
console.log(mayorQuePrecio);
