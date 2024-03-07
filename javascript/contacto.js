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

const inputUser = document.getElementById("idInputUsuario");
const inputPass = document.getElementById("idInputContrasenia");
const buttonSendForm = document.getElementById("botonEnviarFormulario");
const errorUser = document.getElementById("idErrorUsuario");
const errorPass = document.getElementById("idErrorContrasenia");

errorUser.classList.add("d-none");
errorPass.classList.add("d-none");

const formUser = {
  user: "",
  pass: "",
};

const formValues = (event) => {
  const { value, name } = event.target;
  formUser[name] = value;

  if (name === "user") {
    errorUser.classList.add("d-none");
    inputUser.classList.remove("is-invalid");
  } else if (name === "pass") {
    errorPass.classList.add("d-none");
    inputPass.classList.remove("is-invalid");
  }
};

const eventClick = (event) => {
  inputUser.classList.add("is-invalid");
  inputPass.classList.add("is-invalid");

  event.preventDefault();
  const { user, pass } = formUser;

  if (!user || !pass) {
    if (!user) {
      errorUser.classList.remove("d-none");
      inputUser.classList.add("is-invalid");
    }
    if (!pass) {
      errorPass.classList.remove("d-none");
      inputPass.classList.add("is-invalid");
    }
    return;
  }
  if (user.length < 4 || user.length > 20) {
    alert("El usuario debe tener entre 4 y 20 caracteres.");
    return;
  }

  if (pass.length < 6 || pass.length > 200) {
    alert("La consulta debe tener entre 6 y 200 caracteres.");
    return;
  }
};

function limpiarInputs() {
  inputUser.value = "";
  inputPass.value = "";
  setTimeout(() => {
    errorUser.classList.add("d-none");
    errorPass.classList.add("d-none");
    inputUser.classList.remove("is-invalid");
    inputPass.classList.remove("is-invalid");
  }, 100);
}

function enviarMail() {
  const usuario = document.getElementById("idInputUsuario").value;
  const consulta = document.getElementById("idInputContrasenia").value;
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "lisandromoreno28@gmail.com",
    Password: "39AD0FB15EB52939BA3721986D41CC853F4B",
    To: "lisandromoreno28@outlook.com",
    From: "lisandromoreno28@gmail.com",
    Subject: "Consulta de " + usuario,
    Body: `El usuario ${usuario} ha enviado la siguiente consulta:\n\n${consulta}`,
  }).then((message) => alert("Muchas gracias por su consulta"));
  limpiarInputs();
}

inputUser.addEventListener("input", (event) => formValues(event));
inputPass.addEventListener("input", (event) => formValues(event));
buttonSendForm.addEventListener("click", eventClick);

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
