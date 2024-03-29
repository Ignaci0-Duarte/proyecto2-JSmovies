const verificarUsuarioActual = () => {
  const usuarioActual = JSON.parse(localStorage.getItem("usuarioActual"));
  if (!usuarioActual) {
    window.location.href = "https://rollingcodejsmovies.netlify.app/html/404";
  }
};

verificarUsuarioActual();

const verificarRolUsuario = () => {
  const usuarioActual = JSON.parse(localStorage.getItem("usuarioActual"));

  if (usuarioActual && usuarioActual.role === "user") {
    document.getElementById("adminU").classList.add("d-none");
    document.getElementById("adminP").classList.add("d-none");
    document.getElementById("crearP").classList.add("d-none");
  }
};

verificarRolUsuario();

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
    return arrayPeliculas;
  } else {
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

const cerrarSesion = () => {
  localStorage.removeItem("usuarioActual");

  const usuarios = JSON.parse(localStorage.getItem("usuarios"));

  if (usuarios) {
    usuarios.forEach((usuario) => {
      usuario.login = false;
    });

    localStorage.setItem("usuarios", JSON.stringify(usuarios));
  }
};
