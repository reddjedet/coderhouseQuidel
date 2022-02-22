/* ---------------------- */
/* const URLGET = "./clasesPersonajes.json";

fetch(URLGET)
  .then((response) => response.json())
  .then((lista) => {
    for (let objeto in lista) {
      if (lista.raza == "humano") {
        $(".edicion-de-stats").append(`
    <h1>${lista.raza}</h1>`);
      }
      console.log(lista[2].stats);
    }
  });

document.getElementById("demo").innerHTML = ages.find(checkAge);
 */

//funcion

const contenido = document.querySelector("#contenido");

function traer() {
  fetch("./clasesPersonajes.json")
    .then((res) => res.json())
    .then((datos) => {
      //console.log(dato);
      tabla(datos);
    });
}

function tabla(datos) {
  contenido.innerHTML = "";
  for (let valor of datos) {
    //console.log(valor.nombre);
    contenido.innerHTML += `

<tr>
<td scope="row">${valor.profesion}</td>
<td>${valor.raza}</td>
<td>${valor.stats[35]}</td>
<td><button class="btn btn-warning">Click</button></td>
</tr>`;
  }
}

/* 
const URLGET = "./clasesPersonajes.json";

fetch(URLGET)
  .then((response) => response.json())
  .then((lista) => {
    for (let objeto in lista) {
      if (lista.raza == "humano") {
        $(".edicion-de-stats").append(`
    <h1>${lista.raza}</h1>`);
      }
      console.log(lista[2].stats);
    }
  }); */
