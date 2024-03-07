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

const inputTitulo = document.getElementById("idInputTitulo");
const inputAnio = document.getElementById("idInputAnio");
const inputGenero = document.getElementById("idInputGenero");
const inputActor = document.getElementById("idInputActor");
const inputSic = document.getElementById("idInputSic");
const inputSil = document.getElementById("idInputSil");
const inputPortada = document.getElementById("idInputPortada");
const inputTrailer = document.getElementById("idInputTrailer");
const inputCrearPelicula = document.getElementById("idBotonCrearPelicula");

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

const { titulo, anio, genero, actor, sic, sil, portada, trailer } = formUser;

if (peliculas.length > 0) {
  /* Preguntamos si ese array tiene algo o esta vacio en el localstorage*/
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
  /* En caso de que ya haya algo en el local ira por aca y hay que modificar el id con la formula  */

  peliculas.push(newPelicula);

  inputTitulo.value = "";
  inputAnio.value = "";
  inputGenero.value = "";
  inputActor.value = "";
  inputSic.value = "";
  inputSil.value = "";
  inputPortada.value = "";
  inputTrailer.value = ""; /* Para limpiar el campo del input  */
  localStorage.setItem("peliculas", JSON.stringify(peliculas));
  /* Le hacemos push al array de este objeto creado y lo almacenamos en el local */
  alert("Creacion Exitosa");
}

inputTitulo.addEventListener("input", (event) => formValues(event));
inputAnio.addEventListener("input", (event) => formValues(event));
inputGenero.addEventListener("input", (event) => formValues(event));
inputActor.addEventListener("input", (event) => formValues(event));
inputSic.addEventListener("input", (event) => formValues(event));
inputSil.addEventListener("input", (event) => formValues(event));
inputPortada.addEventListener("input", (event) => formValues(event));
inputTrailer.addEventListener("input", (event) => formValues(event));

inputCrearPelicula.addEventListener("click", eventClick);
