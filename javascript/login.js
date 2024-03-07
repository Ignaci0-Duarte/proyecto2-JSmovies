const verificarUsuarioActual = () => {
  const usuarioActual = JSON.parse(localStorage.getItem("usuarioActual"));
  if (usuarioActual) {
    window.location.href = "https://rollingcodejsmovies.netlify.app/html/404";
  }
};

verificarUsuarioActual();

const inputUser = document.getElementById("idInputUsuario");
const inputPass = document.getElementById("idInputContrasenia");
const buttonSendForm = document.getElementById("botonEnviarFormulario");
const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

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

  if (name === "user" && value) {
    errorUser.classList.add("d-none");
    inputUser.classList.remove("is-invalid");
  } else if (name === "pass" && value) {
    errorPass.classList.add("d-none");
    inputPass.classList.remove("is-invalid");
  }
};

const eventClick = (event) => {
  event.preventDefault();

  const { user, pass } = formUser;

  if (!user || !pass) {
    inputUser.classList.add("is-invalid");
    inputPass.classList.add("is-invalid");

    errorUser.classList.remove("d-none");
    errorPass.classList.remove("d-none");
  } else {
    const usuarioFiltrado = usuarios.filter(
      (usuario) => usuario.userName === user
    );

    if (usuarioFiltrado.length > 0) {
      if (usuarioFiltrado[0].pass === pass) {
        const indexUser = usuarios.findIndex(
          (usuario) => usuario.userName === user
        );

        if (usuarioFiltrado[0].approved) {
          usuarios[indexUser].login = true;
          localStorage.setItem("usuarios", JSON.stringify(usuarios));
          const crearUsuarioActual = () => {
            const usuarioActual = {
              id: usuarioFiltrado[0].id,
              role: usuarioFiltrado[0].role,
            };
            localStorage.setItem(
              "usuarioActual",
              JSON.stringify(usuarioActual)
            );
          };
          crearUsuarioActual();
          if (usuarioFiltrado[0].role === "admin") {
            location.href = "admin-user.html";
          } else {
            location.href = "home.html";
          }
        } else {
          location.href = "404.html";
        }
      } else {
        alert("Usuario y/o contraseña no coincide");
      }
    } else {
      alert("Usuario y/o contraseña no coincide");
    }
  }
};

inputUser.addEventListener("input", (event) => formValues(event));
inputPass.addEventListener("input", (event) => formValues(event));
buttonSendForm.addEventListener("click", eventClick);
