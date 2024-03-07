const inicializarUsuarios = () => {
  let usuarios = JSON.parse(localStorage.getItem("usuarios"));

  if (!usuarios) {
    usuarios = [];
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
  }

  const usuarioExistente = usuarios.find((usuario) => usuario.id === 123);

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

inicializarUsuarios();
