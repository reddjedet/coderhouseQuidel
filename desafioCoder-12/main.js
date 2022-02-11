$(document).ready(function () {
  console.log("Página lista");
});

let h2 = document.querySelector("h2");
let h3 = document.querySelector("h3");
let h4 = document.querySelector("h4");
let html = document.querySelector("body");
let select = document.querySelector("select");
let entradaNombre = document.querySelector("#texto");
let btn = document.querySelector("#boton-reiniciar");
let nombre = document.querySelector(".nombre-personaje");
let aceptar = document.querySelector("#aceptar-nombre");
let descripcion = (document.querySelectorAll(".descripcion").style.display =
  "none");

//Descripciones
let ghDesc = document.querySelector("#gh-desc");
ghDesc.style.display = "none";
let wrDesc = document.querySelector("#wr-desc");
wrDesc.style.display = "none";
let advenDesc = document.querySelector("#adven-desc");
advenDesc.style.display = "none";
let stDesc = document.querySelector("#st-desc");
stDesc.style.display = "none";
let etDesc = document.querySelector("#et-desc");
etDesc.style.display = "none";
let pkDesc = document.querySelector("#pk-desc");
pkDesc.style.display = "none";

html.style.backgroundRepeat = "no-repeat";
html.style.backgroundSize = "30%";

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
  h3.textContent = "";
  h2.textContent = "";
  html.style.backgroundImage = "";
  /* descripcion.style.display = "none"; */
  if (descripcion.style.display == "block") {
    descripcion.style.display = "none";
  } else {
    descripcion.style.display = "block";
  }
});

aceptar.addEventListener("click", llenarH2);
function llenarH2() {
  h2.innerHTML = entradaNombre.value;
}

//Profesion con imagen
select.addEventListener("change", imagen);
function imagen() {
  var eleccion = select.value;

  if (eleccion == " - ") {
    html.style.backgroundImage = " ";
  } else if (eleccion == "Ghost Hunter") {
    html.style.backgroundImage = "url('./img/gh.png')";
    ghDesc.style.display = "block";
  } else if (eleccion == "Wind Rider") {
    html.style.backgroundImage = "url('./img/wr.png')";
    wrDesc.style.display = "block";
  } else if (eleccion == "Adventurer") {
    html.style.backgroundImage = "url('./img/adven.png')";
    advenDesc.style.display = "block";
  } else if (eleccion == "Shillien Templar") {
    html.style.backgroundImage = "url('./img/st.png')";
    stDesc.style.display = "block";
  } else if (eleccion == "Eva's Templar") {
    html.style.backgroundImage = "url('./img/et.png')";
    etDesc.style.display = "block";
  } else if (eleccion == "Phoenix Knight") {
    html.style.backgroundImage = "url('./img/pk.png')";
    pkDesc.style.display = "block";
  }
}

$("h5").css("border", "1px solid black");
