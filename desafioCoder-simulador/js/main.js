/* Falta agregar el getElementById vinculado a el boton search*/

//Actividad 4
function calcular(nombre, entrada) {
  nombre = prompt("Ingresa el nombre del juego: ");
  entrada = parseFloat(prompt("Ingrese su precio en Steam"));

  console.log(
    `${nombre} tiene un precio final de $${
      entrada * 0.65 + entrada
    } pesos argentinos`
  );
}
calcular();
/* ----------------------------------------------------------------------- */

//Actividad 5
//lista online de juegos que se agotan
const online = {
  nombre: "Grand Theft Auto V",
  precio: 1050.62,
  disponibilidad: false,
};

console.log(online[nombre]);
console.log(online[precio]);
console.log(online[disponibilidad]);

/* //Actividad 6 
productos fisicos sin vender en el stock de un local comercial*/
const stock = [
  { id: 21, juego: "god of war", precio: 4200 },
  { id: 22, juego: "red dead redemption", precio: 4123.35 },
  { id: 23, juego: "rust", precio: 4027.64 },
  { id: 24, juego: "god of war", precio: 4200 },
  { id: 25, juego: "vegas pro 18", precio: 18703 },
];

/* class ConImpuesto extends stock {
  constructor(juego, precio) {
    (this.juego = nombre.toLowerCase()), (this.precio = precio);

    impuestos();
    {
      this.precio = this.precio * 0.65 + this.precio;
    }
  }
} */

//Agregar a la lista
const stock = ["26, juegonuevo, 3667.3"];
stock.push(`otro elemento`);
console.log(stock.length);

//Buscar por id
const buscar = stock.find((producto) => stock.id === 23);
console.log(buscar.toString());

//Buscar productos cuyo precio sea mayor de $5.000
const mayorQuePrecio = stock.filter((producto) => stock.precio > 5000);
console.log(mayorQuePrecio.toString());
