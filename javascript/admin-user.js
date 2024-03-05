const tBody = document.getElementById("idTBody");
const inputUser = document.getElementById("idInputUser");
const inputRole = document.getElementById("idInputRole");
const buttonSendForm = document.getElementById("idBotonGuardar");

let usuariosLs = JSON.parse(localStorage.getItem("usuarios")) || [];

const deleteUser = (idUser) => {
  const confirmDisableUser = confirm(
    "¿Estás seguro de que quieres suspender este usuario?"
  );
  if (confirmDisableUser) {
    const indexUser = usuariosLs.findIndex((user) => user.id === idUser);
    usuariosLs[indexUser].approved = false;
    localStorage.setItem("usuarios", JSON.stringify(usuariosLs));

    const statusCell = document.getElementById(`statusCell-${idUser}`);
    statusCell.textContent = "Suspendido";
  }
};

const enableUser = (idUser) => {
  const confirmEnableUser = confirm(
    "¿Estás seguro de que quieres aprobar este usuario?"
  );

  if (confirmEnableUser) {
    const indexUser = usuariosLs.findIndex((user) => user.id === idUser);
    usuariosLs[indexUser].approved = true;
    localStorage.setItem("usuarios", JSON.stringify(usuariosLs));

    const statusCell = document.getElementById(`statusCell-${idUser}`);
    statusCell.textContent = "Aprobado";
  }
};

const form = {
  user: "",
  role: "",
};

const formValues = (ev) => {
  const { name, value } = ev.target;

  form[name] = value;
};

const verifyForm = (ev) => {
  ev.preventDefault();
  const { user, role } = form;

  if (role === "admin" || role === "user") {
    const newUser = {
      id: usuariosLs.length + 1,
      userName: user,
      role: role,
      approved: false,
    };

    usuariosLs.push(newUser);
    localStorage.setItem("usuarios", JSON.stringify(usuariosLs));
    renderTable();
  } else {
    alert("Rol no permitido. Roles permitidos: user/admin ");
  }
};

const renderTable = () => {
  if (tBody) {
    tBody.innerHTML = usuariosLs
      .map(
        (usuario) => `
  <tr>
    <th scope="row">${usuario.id}</th>
     <td>${usuario.userName}</td>
     <td>${usuario.role === "admin" ? "Administrador" : "Usuario"}</td>
     <td id="statusCell-${usuario.id}">${
          usuario.approved ? "Aprobado" : "Suspendido"
        }</td>
     <td>
       <button class="btn btn-success" onclick="enableUser(${
         usuario.id
       })">Aprobar</button>
       <button class="btn btn-danger" onclick="deleteUser(${
         usuario.id
       })">Suspender</button>
     </td>
  </tr>`
      )
      .join("");
  }
};

renderTable();

inputUser && inputUser.addEventListener("input", formValues);
inputRole && inputRole.addEventListener("input", formValues);
buttonSendForm && buttonSendForm.addEventListener("click", verifyForm);
