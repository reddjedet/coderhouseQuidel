//Consulta por presión arterial. Solamente devuelve si es normal o no.

let edad = prompt("Ingrese su edad.");
let sistolica = prompt("¿Presión sistólica?");
let diastolica = prompt("¿Presión diastólica?");
let sexoPersona = prompt(
  "Indique su sexo ingresando masculino o femenino."
).toLowerCase;
let nombre = prompt("¿Cual su nombre?");

//entrada
function presionArterial() {
  //Sexo masculino
  if (
    sexoPersona == "masculino" &&
    edad >= 16 &&
    edad <= 18 &&
    sistolica >= 105 &&
    sistolica <= 135 &&
    diastolica >= 60 &&
    diastolica <= 86
  ) {
    return `${nombre}, tu presión arterial está dentro de los parámetros normales.`;
  } else if (
    sexoPersona == "masculino" &&
    edad >= 19 &&
    edad <= 24 &&
    sistolica >= 105 &&
    sistolica <= 139 &&
    diastolica >= 62 &&
    diastolica <= 88
  ) {
    return `${nombre}, tu presión arterial está dentro de los parámetros normales.`;
  } else if (
    sexoPersona == "masculino" &&
    edad >= 25 &&
    edad <= 29 &&
    sistolica >= 108 &&
    sistolica <= 139 &&
    diastolica >= 65 &&
    diastolica <= 89
  ) {
    return `${nombre}, tu presión arterial está dentro de los parámetros normales.`;
  } else if (
    //Sexo femenino
    sexoPersona == "femenino" &&
    edad >= 16 &&
    edad <= 18 &&
    sistolica >= 105 &&
    sistolica <= 130 &&
    diastolica >= 60 &&
    diastolica <= 85
  ) {
    return `${nombre}, tu presión arterial está dentro de los parámetros normales.`;
  } else if (
    sexoPersona == "femenino" &&
    edad >= 19 &&
    edad <= 24 &&
    sistolica >= 100 &&
    sistolica <= 130 &&
    diastolica >= 60 &&
    diastolica <= 85
  ) {
    return `${nombre}, tu presión arterial está dentro de los parámetros normales.`;
  } else if (
    sexoPersona == "femenino" &&
    edad >= 25 &&
    edad <= 29 &&
    sistolica >= 102 &&
    sistolica <= 135 &&
    diastolica >= 60 &&
    diastolica <= 86
  ) {
    return `${nombre}, tu presión arterial está dentro de los parámetros normales.`;
  } else {
    return `${nombre} tu medición, ${sistolica}/${diastolica},  no está dentro de los parámetros normales.`;
  }
}
console.log(presionArterial());
