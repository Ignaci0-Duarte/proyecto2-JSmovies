const verificarUsuarioActual = () => {
  const usuarioActual = JSON.parse(localStorage.getItem("usuarioActual"));
  if (!usuarioActual) {
    window.location.href = "https://rollingcodejsmovies.netlify.app/html/404";
  }
};

verificarUsuarioActual();

const verificarRolUsuario = () => {
  // Obtener el objeto usuarioActual del localStorage
  const usuarioActual = JSON.parse(localStorage.getItem("usuarioActual"));

  // Verificar si existe el usuarioActual y si su atributo role es "user"
  if (usuarioActual && usuarioActual.role === "user") {
    // Aplicar la clase d-none a los elementos con los IDs especificados
    document.getElementById("adminU").classList.add("d-none");
    document.getElementById("adminP").classList.add("d-none");
    document.getElementById("crearP").classList.add("d-none");
  }
};

// Ejemplo de uso
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

const cerrarSesion = () => {
  // Eliminar el usuarioActual del localStorage
  localStorage.removeItem("usuarioActual");

  // Obtener el array de usuarios del localStorage
  const usuarios = JSON.parse(localStorage.getItem("usuarios"));

  // Verificar si existe el array de usuarios
  if (usuarios) {
    // Iterar sobre cada usuario y establecer el atributo "login" en false
    usuarios.forEach((usuario) => {
      usuario.login = false;
    });

    // Actualizar el array de usuarios en el localStorage
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
  }
};
