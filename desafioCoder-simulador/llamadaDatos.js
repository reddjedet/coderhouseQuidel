/* ---------------------- */

/* 
const URLGET = "./statsRaza.json";
$("#btn-seleccion").click(() => {
  //el click debiera cambiarle el id segun cual boton sea
  
  $.get(URLGET, function (respuesta, estado) {
    if (estado === "success") {
      let misDatos = respuesta;
      for (const dato of misDatos) {
        $(".container-elegido").append(`
        ${raza.value}
        ${tipo.value}
        ${stats.value}`);
      }
    }
  });
});
 */
