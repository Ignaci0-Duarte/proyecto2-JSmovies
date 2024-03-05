const traerPeliculasLS = () => {
  const arrayPeliculas = JSON.parse(localStorage.getItem("peliculas"));
  const peliculasDisponibles = arrayPeliculas.filter(
    (pelicula) => pelicula.disponible
  );
  return peliculasDisponibles;
};

let arrayPeliculas = traerPeliculasLS();

const filtrarPorTitulo = (inputValue) => {
  if (!inputValue) {
    // Si el input está vacío, devolver el array original
    return arrayPeliculas;
  } else {
    // Filtrar las películas cuyo título coincida o contenga el valor del input
    return arrayPeliculas.filter((pelicula) =>
      pelicula.titulo.toLowerCase().includes(inputValue.toLowerCase())
    );
  }
};

let arrayPeliculasBuscador = arrayPeliculas;

function mapCards(arrayDePeliculas) {
  const divPeliculas = document.getElementById("peliculasBuscador");
  divPeliculas.innerHTML = arrayDePeliculas
    .map(
      (peli) => `
      <div class="col-5 col-sm-3 col-lg-2 p-0">
          <div class="card-image-container">
            <img
              src="${peli.portada}"
              class="card-img"
              alt="portada ${peli.titulo}"
            />
            <div class="card-image-overlay pt-5 text-center">
              <p class="letter-color-1">${peli.sinopsis_corta}</p>
              <p class="letter-color-1 fw-bold">
                <small>${peli.genero.join(" - ")}</small>
              </p>
              <a
                href="detallePelicula.html?id=${peli.id}"
                class="fw-bold btn-custom text-decoration-none position-relative z-3"
              >
                Mas Detalles
              </a>
            </div>
            <a
              href="detallePelicula.html?id=${peli.id}"
              class="text-decoration-none position-relative z-3"
            >
              <h5 class="letter-color-5 mt-2 text-center">
                ${peli.titulo}
              </h5>
            </a>
          </div>
      </div>
    `
    )
    .join("");
}

mapCards(arrayPeliculasBuscador);

const fygPeliculas = () => {
  const inputValue = document.getElementById("inputBuscador").value;
  const arrayPeliculasBuscadorfyg = filtrarPorTitulo(inputValue);
  console.log("se ejecuta fyg");
  console.log(inputValue);
  mapCards(arrayPeliculasBuscadorfyg);
  console.log(arrayPeliculasBuscador);
};
