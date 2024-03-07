const verificarUsuarioActual = () => {
  const usuarioActual = JSON.parse(localStorage.getItem("usuarioActual"));
  if (!usuarioActual) {
    window.location.href = "https://rollingcodejsmovies.netlify.app/html/404";
  } else if (usuarioActual.role === "user") {
    window.location.href = "https://rollingcodejsmovies.netlify.app/html/404";
  }
};

verificarUsuarioActual();

const traerPeliculasLS = () => {
  const arrayPeliculas = JSON.parse(localStorage.getItem("peliculas"));
  return arrayPeliculas;
};

let arrayPeliculas = traerPeliculasLS();

const disponibleChange = (idPeli) => {
  const indexPeli = arrayPeliculas.findIndex((peli) => peli.id === idPeli);
  if (arrayPeliculas[indexPeli].disponible == false) {
    arrayPeliculas[indexPeli].disponible = true;
    console.log("se cambio disponible a true");
  } else if (arrayPeliculas[indexPeli].disponible == true) {
    arrayPeliculas[indexPeli].disponible = false;
    console.log("se cambio disponible a false");
  }
};

const destacadaChange = (idPeli) => {
  const indexPeli = arrayPeliculas.findIndex((peli) => peli.id === idPeli);
  if (arrayPeliculas[indexPeli].destacada == false) {
    const desactivarDestacadas = () => {
      // Buscar y desactivar las películas destacadas en el array original
      arrayPeliculas.forEach((peli) => {
        if (peli.destacada === true) {
          peli.destacada = false;
        }
      });
      console.log("Se pasaron todas las destacadas a false");
      // Devolver el array original con las modificaciones realizadas
      return arrayPeliculas;
    };
    desactivarDestacadas();
    arrayPeliculas[indexPeli].destacada = true;
    console.log("se cambio destacada a true");
  }
};

(() => {
  const mapTable = () => {
    const divPeliculas = document.getElementById("adminPeliculasTable");
    divPeliculas.innerHTML = arrayPeliculas
      .map(
        (peli) => `
        <tr>
              <td>${peli.id}</td>
              <td>${peli.titulo}</td>
              <td>${peli.año}</td>
              <td>
                <div class="form-check form-switch">
                  <input
                    class="form-check-input check-color"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckChecked"
                    ${peli.disponible ? "checked" : ""}
                    onchange="disponibleChange(${peli.id})"
                  />
                </div>
              </td>
              <td>
                <input
                  class="form-check-input check-color"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  ${peli.destacada ? "checked" : ""}
                  onchange="destacadaChange(${peli.id})"
                />
              </td>
            </tr>
        `
      )
      .join("");
  };

  mapTable();
})();

const guardarCambiosAP = () => {
  const confirmacion = window.confirm("¿Estás seguro de realizar esta acción?");
  if (confirmacion) {
    (() => {
      const cargaPeliculasLS = () => {
        localStorage.setItem("peliculas", JSON.stringify(arrayPeliculas));
      };

      cargaPeliculasLS();
    })();
    location.reload();
  } else {
    alert("Los cambios no fueron guardados");
  }
};

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
