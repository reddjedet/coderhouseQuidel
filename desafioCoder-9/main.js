/* const ghBg = document.getElementsById("gh");
const wrBg = document.getElementsById("wr");
const advBg = document.getElementsById("adv");
const stBg = document.getElementsById("st");
const etBg = document.getElementsById("et");
const pkBg = document.getElementsById("pk"); */
const div = document.createElement("div");

const selectEl = document.getElementById("personaje");
selectEl.addEventListener("click", function () {
  if (this.value == "p1") {
    document.body.style.backgroundImage = "url('./img/gh.jpg')";
    document.body.style.backgroundRepeat = "no-repeat";
    //agregar
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

const h3 = document.createElement("h3");
const input = document.getElementsByTagName("input");
input.addEventListener("submit", () => {
  return h3.appendChild(input.value);
});
