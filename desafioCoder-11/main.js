$(document).ready(function () {
  console.log("Página lista");
});

let btn = document.querySelector("#button-reiniciar");
let h3 = document.querySelector("h3");
let h2 = document.querySelector("h2");
let html = document.querySelector("body");
let select = document.querySelector("select");
let nombre = document.querySelector(".nombre-personaje");
let aceptar = document.querySelector("aceptar-nombre");
let entradaNombre = document.querySelector("#texto");
let crearBtn = document.createElement("button");
crearBtn.setAttribute("href", "./ghInfo.html");
crearBtn.setAttribute("class", "info");

html.style.backgroundRepeat = "no-repeat";
html.style.backgroundSize = "30%";

//Profesion - imagen
select.addEventListener("change", foto);
function foto() {
  var eleccion = select.value;

  if (eleccion == " - ") {
    html.style.backgroundImage = " ";
  } else if (eleccion == "Ghost Hunter") {
    html.style.backgroundImage = "url('./img/gh.png')";
    h3.textContent = select.value;
  } else if (eleccion == "Wind Rider") {
    html.style.backgroundImage = "url('./img/wr.png')";
    h3.innerHTML = select.value;
  } else if (eleccion == "Adventurer") {
    html.style.backgroundImage = "url('./img/adven.png')";
    h3.innerHTML = select.value;
  } else if (eleccion == "Shillien Templar") {
    html.style.backgroundImage = "url('./img/st.png')";
    h3.innerHTML = select.value;
  } else if (eleccion == "Eva's Templar") {
    html.style.backgroundImage = "url('./img/et.png')";
    h3.innerHTML = select.value;
  } else if (eleccion == "Phoenix Knight") {
    html.style.backgroundImage = "url('./img/pk.png')";
    h3.innerHTML = select.value;
  }
}

//Lista
let personajes = [];
function Personaje(raza, profesion, imagen) {
  this.raza = raza;
  this.profesion = profesion;
  this.imagen = imagen;
}

let gh = new Personaje("elfo oscuro", "ghost hunter", "'./img/gh.png'");
let wr = new Personaje("elfo", "wind rider", "./img/wr.png");
let adven = new Personaje("humano", "adventurer", "./img/adven.png");
let st = new Personaje("elfo oscuro", "shillien templar", "./img/st.png");
let et = new Personaje("elfo", "eva's templar", "./img/et.png");
let pk = new Personaje("humano", "phoenix knight", "./img/pk.png");

personajes.push(gh, wr, adven, st, et, pk);
console.log(personajes);

while (select.classList == "verdadero") {
  select.id = "-";
}

//Reiniciar
btn.addEventListener("click", () => {
  select.value = "-";
  h3.textContent = "Selecciona un personaje";
  html.style.backgroundImage = "";
});

// Nombre en H1
/* select.addEventListener("change", () => {
  h1.innerHTML = select.value;
});
 */

/* if (h1.textContent != " ") {
  select.value;
}
 */
