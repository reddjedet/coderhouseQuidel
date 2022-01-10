//Hecho con console.log
//Simulando la entrada a una cuenta existente
let user = prompt("Ingrese su nombre de usuario");
let pass = Number(prompt("Ingrese su contraseña"));
if (user == "coder" && pass == "123") {
  console.log("Hackerman");
} else if (user != "coder" || pass != "123") {
  console.log("Usuario incorrecto");
} else {
  console.log("Intentalo de nuevo");
}
