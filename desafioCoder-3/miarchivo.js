//contador rustico de stock de bebidas  restantes en un local luego de una jornada.
//el funcionamiento no tiene sentido, lo importante era practicar el for

const localVacio = 0;
let ingresantes = prompt("Cantidad de personas ingresando: ");

for (i = parseInt(ingresantes); i >= localVacio; i--) {
  console.log(`El stock de bebidas restante es de ${i * 4} bebidas `);
}
