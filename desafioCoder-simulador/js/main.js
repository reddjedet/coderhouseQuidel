let entrada = parseInt(prompt("Ingrese el precio de su juego de Steam: "));
let tipoCompra = parseInt(
  prompt(
    "Si tu compra llega como Steam Games presiona 1, en caso de llegar como Steam Purchase presiona 2."
  )
);

while (entrada != NaN && tipoCompra == 1) {
  console.log(
    `El precio final será $ ${entrada + entrada * (64 / 100)} pesos.`
  );
  console.log(
    `Estas pagando los siguientes impuestos: \n \n
    Retención de ganancias 35% (${(entrada * 35) / 100} pesos) \n 
    Impuesto PAIS 21% (${(entrada * 21) / 100} pesos) \n 
    IVA servicios digitales 8% (${(entrada * 8) / 100} pesos)`
  );
  break;
}

while (entrada != NaN && tipoCompra == 2) {
  console.log(
    `El precio final será $ ${entrada + entrada * (65 / 100)} pesos.`
  );
  console.log(
    `Estas pagando los siguientes impuestos: \n \n
    Retención de ganancias 35%  (${(entrada * 35) / 100} pesos) \n 
    Impuesto PAIS 30% (${(entrada * 30) / 100} pesos)`
  );
  break;
}
