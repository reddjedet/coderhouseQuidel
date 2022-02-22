/* ---------------------- */
const URLGET = "./clasesPersonajes.json";

fetch(URLGET)
  .then((response) => response.json())
  .then((Personajes) => {
    for (let personaje in Personajes) {
      $(".edicion-de-stats").append(`
    <h1>${personaje.profesion}</h1>`);
    }
    console.log(Personajes);
  }); //agregar filter
