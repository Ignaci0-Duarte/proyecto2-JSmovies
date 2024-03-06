const inicializarUsuarios = () => {
  // Comprobar si hay un array de usuarios en el localStorage
  let usuarios = JSON.parse(localStorage.getItem("usuarios"));

  // Si no hay un array de usuarios, crearlo
  if (!usuarios) {
    usuarios = [];
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
  }

  // Comprobar si hay un objeto con id 123
  const usuarioExistente = usuarios.find((usuario) => usuario.id === 123);

  // Si no hay un usuario con id 123, crearlo
  if (!usuarioExistente) {
    const nuevoUsuario = {
      approved: true,
      delete: false,
      id: 123,
      login: false,
      pass: "123456789",
      role: "admin",
      userName: "Admin1",
    };
    usuarios.push(nuevoUsuario);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
  }
};

// Llamar a la función para inicializar los usuarios
inicializarUsuarios();
