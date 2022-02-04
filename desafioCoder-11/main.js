window.addEventListener("load", function () {
  console.log("Página lista.");
});

//tag
const div = document.createElement("div");
const p = document.createElement("p");
const ul = document.createElement("ul");
const li = document.createElement(`li`);
const formSeleccion = document.querySelector(".form-selection");
const colocarImagen = document.querySelector(".colocar-imagen");
const pruebaNombre = document.querySelector(".prueba-nombre");
let img = document.createElement("img");

//appends

class personajesLista {
  constructor(raza, rol, arma, imagen) {
    this.raza = raza;
    this.rol = rol;
    this.arma = arma;
    this.imagen = imagen;
  }
}

const ghostHunter = new personajesLista(
  "Elfo oscuro",
  "Daguero",
  "Daga",
  "url('./img/gh.png')"
);

const windRider = new personajesLista(
  "Elfo",
  "Daguero",
  "Daga",
  "url('./img/wr.png')"
);

const adventurer = new personajesLista(
  "Humano",
  "Daguero",
  "Daga",
  "url('./img/advenh.png')"
);

const shillienTemplar = new personajesLista(
  "Elfo oscuro",
  "Tanque",
  "Espada",
  "url('./img/st.png')"
);

const evaTemplar = new personajesLista(
  "Elfo",
  "Tanque",
  "Espada",
  "url('./img/et.png')"
);

const phoenixKnight = new personajesLista(
  "Humano",
  "Tanque",
  "Espada",
  "url('./img/pk.png')"
);

//array integrador
const arregloPersonajes = [];

arregloPersonajes.push(
  ghostHunter,
  windRider,
  adventurer,
  shillienTemplar,
  phoenixKnight
);

//lista de personajes completa
console.log(arregloPersonajes);

/* for (let personaje of arregloPersonajes) {
  //let antes era let personajesLista
  $("#seleccion").append(`
    <p>personaje.imagen</p>
    `);
}
 */
// Input Nombre
$("#append").click(function () {
  $(".nombre-personaje").text($("#Input").val());
});

//Selector
/* for (let personaje of arregloPersonajes) { */
arregloPersonajes.forEach(function (imagen) {
  img.setAttribute("src", imagen);
  $("#seleccion").append(img);
});

/* //Selector anterior
seleccion.addEventListener("change", function () {
  personajesLista.find((imagen) => personajesLista.imagen == imagen);
});
 */
