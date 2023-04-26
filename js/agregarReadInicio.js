import Pelicula from "./classPelicula.js";
let listaPeliculas = localStorage.getItem('listaPeliculas');
if(!listaPeliculas){
   listaPeliculas = [];

}else{
listaPeliculas = JSON.parse(listaPeliculas).map( (pelicula)=> new Pelicula(pelicula.titulo,pelicula.descripcion, pelicula.imagen, pelicula.genero, pelicula.anio,pelicula.duracion, pelicula.pais, pelicula.reparto));
}
console.log(listaPeliculas)
cargaInicial();

function cargaInicial(){
    if(listaPeliculas.length > 0){
        listaPeliculas.map((pelicula, indice) => crearCard(pelicula,indice))
    }
}

function crearCard(pelicula){
    let datos = document.getElementById('cards');
    datos.innerHTML += 
    `<article class="col-md-4 col-lg-3 mb-3">
    <div class="card h-100">
        <img src= ${pelicula.imagen} class="card-img-top" alt="imagen ${pelicula.titulo}">
        <div class="card-body">
          <h5 class="card-title">${pelicula.titulo}</h5>
        </div>
        <div class="card-footer">
            <a href="pages/detalle.html" class="btn btn-primary">Detalle</a>
        </div>
      </div>
    </article>`
}