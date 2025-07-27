const router = require("express").Router();
const fs = require("fs");

router.post("/", (req, res) => {
  const nombre = req.body.nombre;
  const edad = req.body.edad;
  const ciudad = req.body.ciudad;

  if (nombre == null) {
    return res.status(400).send({ error: "El nombre es obligatorio" });
  }
  if (edad == null) {
    return res.status(400).send({ error: "La edad es obligatoria" });
  }
  if (typeof edad != "number") {
    console.log(typeof edad);
    return res.status(400).send({ error: "La edad debe ser un numero" });
  }
  if (edad < 0) {
    return res.status(400).send({ error: "La edad debe ser un número positivo" });
  }
  if (ciudad == null) {
    return res.status(400).send({ error: "La ciudad es obligatoria" });
  }

  const registro = {
    nombre,
    edad,
    ciudad,
  };

  let registros = fs.readFileSync("./data/registros.json", "utf8");
  registros = JSON.parse(registros);
  registros.push(registro);

  fs.writeFileSync("./data/registros.json", JSON.stringify(registros));

  const esMayorDeEdad = registro.edad >= 18;
  let mensajeEdad = "";

  if (esMayorDeEdad) {
    mensajeEdad = "Eres mayor de edad.";
  } else {
    mensajeEdad = "Eres menor de edad.";
  }

  res.json(`Hola ${nombre}, tienes ${edad} años y vives en ${ciudad}. ${mensajeEdad}`);
});

router.get("/", (req, res) => {
  let registros = fs.readFileSync("./data/registros.json", "utf8");
  registros = JSON.parse(registros);
  res.send(registros);
});

module.exports = router;
