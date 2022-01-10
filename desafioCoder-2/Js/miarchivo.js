//pensado para diciembre y dias posteriores exclusivamente
//Hecho con ALERT
let fecha = parseInt(prompt("¿Qué dia de diciembre es hoy?"));
let anioNuevo = 31;
const resultado = anioNuevo - fecha;
if (fecha < anioNuevo && fecha < 32) {
  alert(`Faltan ${resultado} dias para festejar año nuevo.`);
} else if (fecha == anioNuevo) {
  alert("Hoy se festeja");
} else {
  console.log("No sé que quisite poner.");
}
