window.addEventListener("load", function () {
  console.log("Página lista.");
});

//tag
const div = document.createElement("div");
const p = document.createElement("p");
const ul = document.createElement("ul");
const li = document.createElement(`li`);

//appends
const descripcionGh =
  (li.innerHTML = `Raza: Elfo oscuro, Rol: Daguero, Arma: Daga`);
const descripcionWr = (li.innerHTML = `Raza: Elfo, Rol: Daguero, Arma: Daga`);
const descripcionAdv =
  (li.innerHTML = `Raza: Humano, Rol: Daguero, Arma: Daga`);
const descripcionSt =
  (li.innerHTML = `Raza: Elfo oscuro, Rol: Tanque, Arma: Espada`);
const descripcionEt = (li.innerHTML = `Raza: Elfo, Rol: Tanque, Arma: Espada`);
const descripcionPk =
  (li.innerHTML = `Raza: Humano, Rol: Tanque, Arma: Espada`);

$("h5").append(`  

<div class="container">

<textarea id="Input" cols="35" rows="1" placeholder="Inserte un nombre para su personaje"></textarea>
  <div class="nombre-personaje">Nombre:  <hr></div>
<p>
    <button id="append">Aceptar</button>
</p>
  

    <form action="" id="form-seleccion">
    <br>
    <label for="text">Selecciona uno:</label>
      <select id="seleccion" name="personaje">
        <option value="">-</option>
        <option value="p1">Ghost Hunter</option>
        <option value="p2">Wind Rider</option>
        <option value="p3">Adventurer</option>
        <option value="p4">Shillien Templar</option>
        <option value="p5">Eva's Templar</option>
        <option value="p6">Phoenix Knight</option>
      </select>
    </form>


</div>`);

$("#append").click(function () {
  $(".nombre-personaje").text(function () {
    return $("#Input").val();
  });
});

const vistaPrevia = seleccion.addEventListener("change", function () {
  if (this.value == "p1") {
    document.body.style.backgroundImage = "url('./img/gh.png')";
    document.body.style.backgroundRepeat = "no-repeat";
    $(".nombre-personaje").prepend(` ${descripcionGh}`);
  } else if (this.value == "p2") {
    document.body.style.backgroundImage = "url('./img/wr.png')";
    document.body.style.backgroundRepeat = "no-repeat";
    $(".nombre-personaje").prepend(` ${descripcionGh}`);
  } else if (this.value == "p3") {
    document.body.style.backgroundImage = "url('./img/adven.png')";
    document.body.style.backgroundRepeat = "no-repeat";
    $(".nombre-personaje").prepend(` ${descripcionGh}`);
  } else if (this.value == "p4") {
    document.body.style.backgroundImage = "url('./img/st.png')";
    document.body.style.backgroundRepeat = "no-repeat";
    $(".nombre-personaje").prepend(` ${descripcionGh}`);
  } else if (this.value == "p5") {
    document.body.style.backgroundImage = "url('./img/et.png')";
    document.body.style.backgroundRepeat = "no-repeat";
    $(".nombre-personaje").prepend(` ${descripcionGh}`);
  } else if (this.value == "p6") {
    document.body.style.backgroundImage = "url('./img/pk.png')";
    document.body.style.backgroundRepeat = "no-repeat";
    $(".nombre-personaje").prepend(` ${descripcionGh}`);
  }
});
