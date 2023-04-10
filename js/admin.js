import Pelicula from "./classPelicula.js"

const btnEditar = document.querySelector('#btnEditar')
btnEditar.addEventListener('click', crearPelicula)

// crear nueva pelicula

let nuevaPelicula = new Pelicula('Super Mario', 'algo', 'url', 'aventura', 2023, '2hs', 'EEUU', '-')
console.log(nuevaPelicula)


