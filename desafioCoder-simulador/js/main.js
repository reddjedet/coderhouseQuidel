/* Falta agregar el getElementById vinculado a el boton search*/
// FALTA IF ELSE

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

/* ----------------------------------------------------------------------- */

//Actividad 5 - Incorporar objetos
//lista fisicos con stock limitado

//oferta

const ofertaDelDia = {
  nombre: "Grand Theft Auto V",
  precio: 1050.62,
  disponibilidad: 14,
};

//Obteniendo valores del objeto
console.log(ofertaDelDia.nombre);
console.log(ofertaDelDia.precio);
console.log(ofertaDelDia.disponibilidad);

//Modificando valores del objeto
ofertaDelDia.nombre = "juegoNuevo";
ofertaDelDia.precio = 100;

/* //Actividad 6  - Incorporar arrays + ordenar un array
productos fisicos sin vender en el stock de un local comercial*/

const stock = [
  { id: 21, juego: "god of war", precio: 4200 },
  { id: 22, juego: "red dead redemption", precio: 4123.35 },
  { id: 23, juego: "rust", precio: 4027.64 },
  { id: 24, juego: "god of war", precio: 4200 },
  { id: 25, juego: "Age of Empires 2", precio: 224.99 },
];

const juegosDigitales = document.getElementById("juegos-digitales");
juegosDigitales.addEventListener("click", listaDigitales);

function listaDigitales() {
  console.log(stock.length);
  //Agregar a la lista
  /*   stock.push({ id: 26, juego: "juegonuevo", precio: 250 });
  stock.length; */

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
}
//boton generico

/*     let buscar = stock.find((producto) => producto.id === 23);
    buscar(); */
