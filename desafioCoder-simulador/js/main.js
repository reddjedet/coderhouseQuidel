/* Falta agregar el getElementById vinculado a el boton search*/
// FALTA IF ELSE

function prueba4() {
  let nombre = prompt(
    `Para calcular el precio final de un juego ingresa su nombre: `
  );
  let entrada = parseFloat(prompt("¿Precio en Steam?"));

  //Actividad 4
  function calcular(nombre, entrada) {
    alert(
      `${nombre} tiene un precio final de $${
        entrada * 1.65
      } pesos argentinos. \n $${entrada} = precio de mercado \n $${
        entrada * 0.65
      } = impuestos  `
    );
  }
  calcular(nombre, entrada);
}

/* ----------------------------------------------------------------------- */

//Actividad 5 - Incorporar objetos
//lista online de juegos que se agotan
function prueba5() {
  const online = {
    nombre: "Grand Theft Auto V",
    precio: 1050.62,
    disponibilidad: false,
  };

  //Obteniendo valores del objeto
  console.log(online.nombre);
  console.log(online.precio);
  console.log(online.disponibilidad);

  //Modificando valores del objeto
  online.nombre = "juegoNuevo";
  online.precio = 100;
}
/* //Actividad 6  - Incorporar arrays + ordenar un array
productos fisicos sin vender en el stock de un local comercial*/

function prueba6() {
  const stock = [
    { id: 21, juego: "god of war", precio: 4200 },
    { id: 22, juego: "red dead redemption", precio: 4123.35 },
    { id: 23, juego: "rust", precio: 4027.64 },
    { id: 24, juego: "god of war", precio: 4200 },
    { id: 25, juego: "vegas pro 18", precio: 18703 },
  ];

  //Agregar a la lista
  stock.push({ id: 26, juego: "juegonuevo", precio: 250 });

  stock.length;

  //Buscar por id
  const buscar = stock.find((producto) => producto.id === 23);
  console.log(buscar);

  //Buscar productos cuyo precio sea mayor de $5.000
  const mayorQuePrecio = stock.filter((producto) => producto.precio > 5000);
  console.log(mayorQuePrecio);
}
//consultar si hay stock monstrandolo al usuario
//Agregar peticion de juegos fisicos  (lista)
