const URLGET = "./statsRaza.json";

const edicionDeStats = document.querySelector(".edicion-de-stats");
const profesiones = document.querySelectorAll(".container-personajes");
const containerElegido = document.querySelector(".container-elegido");

//marcar cada profesion como una lista
const listaProfesiones = [];
const profesionUno = document.querySelector("#btn-seleccion-gh");
const profesionDos = document.querySelector("#btn-seleccion-wr");
const profesionTres = document.querySelector("#btn-seleccion-adven");
const profesionCuatro = document.querySelector("#btn-seleccion-st");
const profesionCinco = document.querySelector("#btn-seleccion-et");
const profesionSeis = document.querySelector("#btn-seleccion-pk");
const profesionSiete = document.querySelector("#btn-seleccion-hk");
const profesionOcho = document.querySelector("#btn-seleccion-gs");
const profesionNueve = document.querySelector("#btn-seleccion-ms");
const profesionDiez = document.querySelector("#btn-seleccion-sag");
const profesionOnce = document.querySelector("#btn-seleccion-ss");
const profesionDoce = document.querySelector("#btn-seleccion-mm");
const profesionTrece = document.querySelector("#btn-seleccion-so");
const profesionCatorce = document.querySelector("#btn-seleccion-arch");
const profesionQuince = document.querySelector("#btn-seleccion-duel");
const profesionDieciseis = document.querySelector("#btn-seleccion-dread");
const profesionDieciocho = document.querySelector("#btn-seleccion-gk");
const profesionDiecinueve = document.querySelector("#btn-seleccion-ti");
const profesionVeintiuno = document.querySelector("#btn-seleccion-fs");
const profesionVeintidos = document.querySelector("#btn-seleccion-maes");
const profesionVeintitres = document.querySelector("#btn-seleccion-sm");
const profesionVeinticuatro = document.querySelector("#btn-seleccion-em");
const profesionVeinticinco = document.querySelector("#btn-seleccion-al");
const profesionVeintiseis = document.querySelector("#btn-seleccion-doom");
const profesionVeintisiete = document.querySelector("#btn-seleccion-sh");
const profesionVeintiocho = document.querySelector("#btn-seleccion-tri");
const profesionVeintinueve = document.querySelector("#btn-seleccion-jud");
listaProfesiones.push(
  profesionUno,
  profesionDos,
  profesionTres,
  profesionCuatro,
  profesionCinco,
  profesionSeis,
  profesionSiete,
  profesionOcho,
  profesionNueve,
  profesionDiez,
  profesionOnce,
  profesionDoce,
  profesionTrece,
  profesionCatorce,
  profesionQuince,
  profesionDieciseis,
  profesionDieciocho,
  profesionDiecinueve,
  profesionVeintiuno,
  profesionVeintidos,
  profesionVeintitres,
  profesionVeinticuatro,
  profesionVeinticinco,
  profesionVeintiseis,
  profesionVeintisiete,
  profesionVeintiocho,
  profesionVeintinueve
);

for (let profesion of listaProfesiones){
this.addEventListener("click", () => {
$.get(URLGET, function (respuesta, estado) {
        if (estado === "sucess") {
          let misDatos = respuesta;
          for (const dato of misDatos) {
            $("body").prepend(`
        <div>
        <h3>${"dato.title"}</h3>
        <p>${"dato.body"}</p>
        </div>
        `);
          }
        }
      });
    }
  });

/* $(".containerElegido").append("<h1 id='unodostres'></h1>");
$("#unodostres").click(() => {
  $.get(URLGET, function (respuesta, estado) {
    if (estado === "sucess") {
      let misDatos = respuesta;
      for (const dato of misDatos) {
        $("body").prepend(`
        <div>
        <h3>${"dato.title"}</h3>
        <p>${"dato.body"}</p>
        </div>
        `);
      }
    }
  });
}); */
