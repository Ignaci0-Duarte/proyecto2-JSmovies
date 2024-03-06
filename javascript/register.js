const verificarUsuarioActual = () => {
  const usuarioActual = JSON.parse(localStorage.getItem("usuarioActual"));
  if (usuarioActual) {
    window.location.href = "https://rollingcodejsmovies.netlify.app/html/404";
  }
};

verificarUsuarioActual();

const inputUser = document.getElementById("idInputUsuario");
const inputPass = document.getElementById("idInputContrasenia");
const inputRPass = document.getElementById("idInputRContrasenia");
const buttonSendForm = document.getElementById("botonEnviarFormulario");

const errorUser = document.getElementById("idErrorUsuario");
const errorPass = document.getElementById("idErrorContrasenia");
const errorRPass = document.getElementById("idErrorRContrasenia");

const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

errorUser.classList.add("d-none");
errorPass.classList.add("d-none");
errorRPass.classList.add("d-none");

const formUser = {
  user: "",
  pass: "",
  rpass: "",
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
  } else if (name === "rpass" && value) {
    errorRPass.classList.add("d-none");
    inputRPass.classList.remove("is-invalid");
  }
};

const eventClick = (event) => {
  inputUser.classList.add("is-invalid");
  inputPass.classList.add("is-invalid");
  inputRPass.classList.add("is-invalid");

  event.preventDefault();
  const { user, pass, rpass } = formUser;

  if (user.length < 4 || user.length > 20) {
    alert("El usuario debe tener entre 4 y 20 caracteres.");
    return;
  }

  if (pass.length < 6 || pass.length > 20) {
    alert("La contraseña debe tener entre 6 y 20 caracteres.");
    return;
  }

  if (!user || !pass || !rpass) {
    errorUser.classList.remove("d-none");
    errorPass.classList.remove("d-none");
    errorRPass.classList.remove("d-none");
  } else {
    const validacionUsuario = new RegExp("^[a-zA-Z0-9]+$").test(user);
    const validacionPass = new RegExp("^[a-zA-Z0-9]+$").test(pass);

    if (!validacionUsuario || !validacionPass) {
      alert(
        "El usuario y la contraseña solo pueden contener letras y números."
      );
      return;
    }
    if (pass === rpass) {
      const usuarioExiste = usuarios.filter(
        (usuario) => usuario.userName === user
      );

      if (usuarioExiste.length > 0) {
        return alert("Usuario ya existe");
      }

      if (usuarios.length > 0) {
        const idUsuario = usuarios[usuarios.length - 1].id + 1;
        const newUser = {
          id: idUsuario,
          userName: user,
          pass,
          login: true,
          delete: false,
          role: "user",
          approved: false,
        };

        usuarios.push(newUser);

        inputUser.value = "";
        inputPass.value = "";
        inputRPass.value = "";
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
        alert("Registro Exitoso");

        setTimeout(() => {
          location.href = "../html/login.html";
        }),
          1000;
      } else {
        const newUser = {
          id: 1,
          userName: user,
          pass,
          login: true,
          delete: false,
          role: "user",
          approved: false,
        };

        usuarios.push(newUser);

        inputUser.value = "";
        inputPass.value = "";
        inputRPass.value = "";

        localStorage.setItem("usuarios", JSON.stringify(usuarios));
        alert("Registro Exitoso");

        setTimeout(() => {
          location.href = "../html/login.html";
        }),
          1000;
      }
      console.log(formUser);
    } else {
      alert("Las contraseñas no coinciden");
    }
  }
};

inputUser.addEventListener("input", (event) => formValues(event));
inputPass.addEventListener("input", (event) => formValues(event));
inputRPass.addEventListener("input", (event) => formValues(event));
buttonSendForm.addEventListener("click", eventClick);
