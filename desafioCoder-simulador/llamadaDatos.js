/* ---------------------- */
const URLGET = "./clasesPersonajes.json";

fetch(URLGET)
  .then((response) => response.json())
  .then((json) => console.log(json));
