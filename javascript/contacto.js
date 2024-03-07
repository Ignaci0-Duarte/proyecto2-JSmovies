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
