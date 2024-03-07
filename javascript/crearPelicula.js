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
