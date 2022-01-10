//Ultimos 3 digitos del dni
let entrada = prompt("Ingrese los ultimos 3 digitos de su dni");

//Primeros 5 digitos
let primerosCinco = 12333;

//Concatenacion y resultado
const dni = parseInt(primerosCinco + entrada);
alert(`Su DNI es: ${dni}`);
