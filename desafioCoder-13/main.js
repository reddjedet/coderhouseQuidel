let h2 = document.querySelector("h2");
let h3 = document.querySelector("h3");
let h4 = document.querySelector("h4");
let html = document.querySelector("body");
let select = document.querySelector("select");
select.value = "-";
let entradaNombre = document.querySelector("#texto");
let btn = document.querySelector("#boton-reiniciar");
let nombre = document.querySelector(".nombre-personaje");
let aceptar = document.querySelector("#aceptar-nombre");
let descripciones = document.querySelectorAll(".descricpion");

/* $('img[name="desc"]').css("display", "none"); */

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
  /* descripcion.style.display = "none"; */
  h3.textContent = "";
  h2.textContent = "";
  html.style.backgroundImage = "";
  entradaNombre.value = " ";
  for (let descripcion of descripciones) {
    if (descripcion.style.display != "none") {
      this.style.display === "none";
    }
  }
});

//input en H2
aceptar.addEventListener("click", mostrarNombre);
function mostrarNombre() {
  h2.innerHTML = entradaNombre.value;
}

//Imagen del Select
var selectArray = new Array();
$("select option").each(function () {
  selectArray.push($(this).val());
});

/* var x = document.getElementById("mySelect");
var optionVal = new Array();
for (i = 0; i < x.length; i++) {
  selectArray.push(x.options[i].text);
} */

for (selectArray = 0; selectArray <= 7; selectArray++) {
  //background
  this.html.style.backgroundImage = Personaje.imagen;
  //descripcion
  this.style.display = "block";
}

$("h5").css("border", "1px solid black");

$(document).ready(function () {
  console.log("Página lista");
});
