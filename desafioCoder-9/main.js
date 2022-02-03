window.addEventListener("load", function () {
  console.log("Todos los elementos de la ventana están cargados ");
});

const div = document.createElement("div");
const h3 = document.createElement("h3");
const seleccion = document.getElementById("seleccion");
seleccion.addEventListener("select", () => {
  h3.appendChild(personaje.value);
});

seleccion.addEventListener("click", function () {
  if (this.value == "p1") {
    document.body.style.backgroundImage = "url('./img/gh.jpg')";
    document.body.style.backgroundRepeat = "no-repeat";
  } else if (this.value == "p2") {
    document.body.style.backgroundImage = "url('./img/wr.jpg')";
    document.body.style.backgroundRepeat = "no-repeat";
  } else if (this.value == "p3") {
    document.body.style.backgroundImage = "url('./img/adv.jpg')";
    document.body.style.backgroundRepeat = "no-repeat";
  } else if (this.value == "p4") {
    document.body.style.backgroundImage = "url('./img/st.jpg')";
    document.body.style.backgroundRepeat = "no-repeat";
  } else if (this.value == "p5") {
    document.body.style.backgroundImage = "url('./img/et.jpg')";
    document.body.style.backgroundRepeat = "no-repeat";
  } else if (this.value == "p6") {
    document.body.style.backgroundImage = "url('./img/pk.jpg')";
    document.body.style.backgroundRepeat = "no-repeat";
  }
});

$("body").prepend('<button id="btnjq  uery">CLICK</button>');
on("click", () => {
  console.log("asd123");
});
