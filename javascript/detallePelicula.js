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
  return arrayPeliculas;
};

let arrayPeliculasD = traerPeliculasLS();

const obtenerPeliculaDetalle = () => {
  const id = location.search.split("=")[1];

  const peliculaDetalle = arrayPeliculasD.find(
    (pelicula) => pelicula.id === parseInt(id)
  );

  return peliculaDetalle;
};

let peliculaDetalle = obtenerPeliculaDetalle();

(() => {
  const mostrarDetalles = () => {
    const divPeliculaDetalle = document.getElementById("divDetallePelicula");

    const detalleHTML = `
    <div class="container">
    <div class="row">
      <div class="col-12 col-md-4 col-lg-3">
        <div class="d-flex flex-column flex-md-row">
          <img
            class="mt-4 me-3"
            src="${peliculaDetalle.portada}"
            alt=""
            width="200"
            height="300"
          />
          <div class="d-flex flex-column p-4">
            <h2 class="text-white">${peliculaDetalle.titulo}</h2>
            <p class="text-white">
              ${peliculaDetalle.sinopsis_larga}
            </p>
            <p class="text-white mt-1">
              Actore Principal: ${peliculaDetalle.actor_principal}.
            </p>
            <p class="text-white mt-1">Género: ${peliculaDetalle.genero.join(
              ", "
            )}.</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="container-fluid mb-5">
    <div class="row">
      <div class="col-12 col-md-4 col-lg-3">
        <div
          class="publicidad d-none d-sm-block d-md-block mt-3 mb-3 text-center"
        >
          <iframe
            src="https://giphy.com/embed/KAhzCOxalaSR8glLgf"
            width="50%"
            height="50%"
            style="position: absolute"
            frameborder="0"
            class="giphy-embed"
            allowfullscreen
          ></iframe>
        </div>
        <p>
          <a href="https://giphy.com/gifs/KAhzCOxalaSR8glLgf"></a>
        </p>
      </div>
    </div>
  </div>
  <h1 class="text-white text-center">TRAILER</h1>
  <div class="container text-center mt-5 mb-5">
    <div class="row justify-content-center">
      <div class="col-12 col-md-8 col-lg-6">
        <div class="video-container">
          <iframe src="${
            peliculaDetalle.trailer
          }" frameborder="0" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  </div>
    `;

    divPeliculaDetalle.innerHTML = detalleHTML;
  };

  mostrarDetalles();
})();

(() => {
  const cambiarBG = () => {
    const elemento = document.getElementById("bodyDetalle");
    elemento.style.backgroundImage =
      "linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.3)), url(" +
      peliculaDetalle.portada +
      ")";
  };
  cambiarBG();
})();

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
