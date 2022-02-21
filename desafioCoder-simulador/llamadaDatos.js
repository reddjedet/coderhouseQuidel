/* ---------------------- */

const URLGET = "./clasesPersonajes.json";
$("#btn-seleccion").click(() => {
  //el click debiera cambiarle el id segun cual boton sea

  $.get(URLGET, function (respuesta, estado) {
    if (estado === "success") {
      let misDatos = respuesta;
      for (const dato of misDatos) {
        $(".container-elegido").append(`<h3>
        ${raza.value}
        ${tipo.value}
        ${stats.value}
        </h3>
        `);
      }
    }
  });
});
