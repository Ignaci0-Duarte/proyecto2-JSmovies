const verificarUsuarioActual = () => {
  const usuarioActual = JSON.parse(localStorage.getItem("usuarioActual"));
  if (!usuarioActual) {
    window.location.href = "https://rollingcodejsmovies.netlify.app/html/404";
  } else if (usuarioActual.role === "user") {
    window.location.href = "https://rollingcodejsmovies.netlify.app/html/404";
  }
};

verificarUsuarioActual();

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

const inputTitulo = document.getElementById("idInputTitulo");
const inputAnio = document.getElementById("idInputAnio");
const inputGenero = document.getElementById("idInputGenero");
const inputActor = document.getElementById("idInputActor");
const inputSic = document.getElementById("idInputSic");
const inputSil = document.getElementById("idInputSil");
const inputPortada = document.getElementById("idInputPortada");
const inputTrailer = document.getElementById("idInputTrailer");
const inputCrearPelicula = document.getElementById("idInputCrearPelicula");

const errorTitulo = document.getElementById("idErrorTitulo");
const errorAnio = document.getElementById("idErrorAnio");
const errorGenero = document.getElementById("idErrorGenero");
const errorActor = document.getElementById("idErrorActor");
const errorSic = document.getElementById("idErrorSic");
const errorSil = document.getElementById("idErrorSil");
const errorPortada = document.getElementById("idErrorPortada");
const errorTrailer = document.getElementById("idErrorTrailer");

const peliculas = JSON.parse(localStorage.getItem("peliculas")) || [];

const formPeliculas = {
  titulo: "",
  anio: "",
  genero: "",
  actor: "",
  sic: "",
  sil: "",
  portada: "",
  trailer: "",
};

const formValues = (event) => {
  const { value, name } = event.target;
  formPeliculas[name] = value;
};

const eventClick = (event) => {
  const { titulo, anio, genero, actor, sic, sil, portada, trailer } =
    formPeliculas;

  if (peliculas.length > 0) {
    const idPelicula = peliculas[peliculas.length - 1].id + 1;
    const newPelicula = {
      id: idPelicula,
      titulo: titulo,
      sinopsis_corta: sic,
      sinopsis_larga: sil,
      año: anio,
      genero: genero,
      portada: portada,
      trailer: trailer,
      actor_principal: actor,
      disponible: true,
      destacada: false,
    };

    peliculas.push(newPelicula);

    inputTitulo.value = "";
    inputAnio.value = "";
    inputGenero.value = "";
    inputActor.value = "";
    inputSic.value = "";
    inputSil.value = "";
    inputPortada.value = "";
    inputTrailer.value = "";
    localStorage.setItem("peliculas", JSON.stringify(peliculas));
    alert("Creacion Exitosa");
  }
};

inputTitulo.addEventListener("input", (event) => formValues(event));
inputAnio.addEventListener("input", (event) => formValues(event));
inputGenero.addEventListener("input", (event) => formValues(event));
inputActor.addEventListener("input", (event) => formValues(event));
inputSic.addEventListener("input", (event) => formValues(event));
inputSil.addEventListener("input", (event) => formValues(event));
inputPortada.addEventListener("input", (event) => formValues(event));
inputTrailer.addEventListener("input", (event) => formValues(event));

inputCrearPelicula.addEventListener("click", eventClick);
