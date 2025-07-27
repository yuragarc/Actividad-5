function obtenerUsuarios() {
  fetch("/usuarios")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const listaUsuarios = document.getElementById("listaUsuarios");
      listaUsuarios.innerHTML = ""; // Limpiar la lista antes de agregar nuevos usuarios
      data.forEach((usuario) => {
        const li = document.createElement("li");
        li.innerHTML = `${usuario.nombre}, ${usuario.edad} años, ${usuario.ciudad}`;
        listaUsuarios.appendChild(li);
      });
    });
}

function registrarUsuario(event) {
  event.preventDefault();

  const nombre = document.getElementById("nombre").value;
  let edad = document.getElementById("edad").value;
  edad = parseInt(edad);
  const ciudad = document.getElementById("ciudad").value;
  fetch("/usuarios", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      nombre,
      edad,
      ciudad,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      let message = "";
      if (data.error) {
        message = data.error;
      } else {
        message = data;
      }
      document.getElementById("mensaje").innerHTML = message;
      obtenerUsuarios();
    })
    .catch((error) => {
      console.log("error", error);
      document.getElementById("mensaje").innerHTML = error.error || "Error al registrar usuario";
    });
}

document.addEventListener("DOMContentLoaded", obtenerUsuarios);
document.getElementById("formulario").addEventListener("submit", registrarUsuario);
