/* ---------------------- */
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
  });

document.getElementById("demo").innerHTML = ages.find(checkAge);

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
