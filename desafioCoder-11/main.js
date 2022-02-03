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
const personajesLista = [
  {
    id: "descripcionGh",
    raza: "Elfo oscuro",
    rol: "Daguero",
    arma: "Daga",
    imagen: "url('./img/gh.png')",
  },
  {
    id: "descripcionWr",
    raza: "Elfo",
    rol: "Daguero",
    arma: "Daga",
    imagen: "url('./img/wr.png')",
  },
  {
    id: "descripcionAdv",
    raza: "Humano",
    rol: "Daguero",
    arma: "Daga",
    imagen: "url('./img/adven.png')",
  },
  {
    id: "descripcionSt",
    raza: "Elfo oscuro",
    rol: "Tanque",
    arma: "Espada",
    imagen: "url('./img/st.png')",
  },
  {
    id: "descripcionEt",
    raza: "Elfo",
    rol: "Tanque",
    arma: "Espada",
    imagen: "url('./img/et.png')",
  },
  {
    id: "descripcionPk",
    raza: "Humano",
    rol: "Tanque",
    arma: "Espada",
    imagen: "url('./img/pk.png')",
  },
];

// Input Nombre
$("#append").click(function () {
  $(".nombre-personaje").text($("#Input").val());
});

//Selector
seleccion.addEventListener("change", function () {
  personajesLista.find((imagen) => personajesLista.imagen == imagen);
});

//storage
localStorage.setItem("nombre", JSON.stringify(nombre)); //convierte a json

if (Object.values(nombre).length === 0) {
  pruebaNombre.innerHTML = `
        <div class="alert alert-dark text-center">
        <b>No tenes nombre</b><br/>
        <img src="/assets/rata.jpg" alt="">
        </div>
        `;
  return;
}
