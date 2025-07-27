const express = require("express");
const app = express();
const usuarios = require("./routes/usuarios.js");

app.use(express.json());

app.use("/usuarios", usuarios);
app.use(express.static("public"));

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
