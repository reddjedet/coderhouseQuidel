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
const img = document.createElement("img");

//appends

class personajesLista{
constructor(raza, rol, arma, imagen){
this.raza = raza;
this.rol = rol;
this.arma = arma;
this.imagen = imagen;

}}

const ghostHunter = new personajesLista("Elfo oscuro", "Daguero", "Daga", "url('./img/gh.png')")

const windRider = new personajesLista("Elfo", "Daguero", "Daga", "url('./img/wr.png')")

const adventurer = new personajesLista("Humano", "Daguero", "Daga", "url('./img/advenh.png')")

const shillienTemplar = new personajesLista("Elfo oscuro", "Tanque", "Espada", "url('./img/st.png')")

const evaTemplar = new personajesLista("Elfo", "Tanque", "Espada", "url('./img/et.png')")

const phoenixKnight = new personajesLista("Humano", "Tanque", "Espada", "url('./img/pk.png')")


//array integrador
const arregloPersonajes = [];

arregloPersonajes.push(ghostHunter, windRider, adventurer, shillienTemplar, phoenixKnight)

console.log(arregloPersonajes);

for(let personajesLista of arregloPersonajes){
$("#seleccion").append(<p>$(.)</p>){
<p>$(windRider.imagen)</p> 
<p>$(adventurer.imagen)</p> 
<p>$(shillienTemplar.imagen)</p> 
<p>$(phoenixKnight.imagen)</p> 
)
}

const entregaPantalla = arregloPersonajes.filter((imagen) => {
return personajesLista.pais == "argentina"
})





// Input Nombre
$("#append").click(function () {
  $(".nombre-personaje").text($("#Input").val());
});

//Selector
seleccion.addEventListener("change", function () {
  personajesLista.find((imagen) => personajesLista.imagen == imagen);
});




