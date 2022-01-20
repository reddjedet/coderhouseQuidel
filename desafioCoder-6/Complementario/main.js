/* 
Quidel Christian
Consigna clase 6, ejercicio complementario: 
codifica una función cuyas instrucciones permitan ordenar una colección (array).
Preferentemente, recibir el criterio de ordenamiento por parámetro, y mostrar el resultado del
procesamiento en una salida.*/

const numeros = [1, 2, 3, 4, 5, 6];
const letras = [" a", " b", " c", " d", " e", " f", " g"];

/* Devolver numeros y letras  concatenados */
function concatenar(numeros, letras) {
  return numeros + ", " + letras;
}
document.getElementById("titulo").innerHTML = concatenar(numeros, letras);
console.log(concatenar(numeros, letras));

//Devolver los primeros  4 numeros y ultimas 3 letras
function slicear(numeros, letras) {
  return numeros.slice(0, 4) + ", " + letras.slice(4, 7);
}
document.getElementById("subtitulo").innerHTML = slicear(numeros, letras);
console.log(slicear(numeros, letras));
