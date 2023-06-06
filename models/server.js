const express = require("express");
const cors = require("cors");
const { connect, sequelize } = require("../database/database");
const { crearUsuario } = require("../test/usuario.test");
const { crearForo } = require("../test/foro.test");
const { crearPublicacion } = require("../test/publicacion.test");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.port;

    this.paths = {
      auth: "/api/auth",
      foros: "/api/foros",
    };

    this.connectDB();
    this.sincronize();

    this.middlewares();

    this.routes();
  }

  async connectDB() {
    await connect();
  }

  routes() {
    this.app.use(this.paths.auth, require("../routes/auth.routes"));
    this.app.use(this.paths.foros, require("../routes/foros.routes"));
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
  }

  async sincronize() {
    await sequelize.sync({ force: true });
    let fecha = new Date();
    await crearUsuario(
      "test",
      "test@test.com",
      "123456",
      "T",
      "regular",
      "gratuito"
    );
    await crearUsuario(
      "segundo",
      "test2@test.com",
      "123456",
      "S",
      "regular",
      "gratuito"
    );
    await crearForo("general", 20, 40, fecha, "test");
    await crearForo("presentate", 20, 40, fecha, "segundo");
    await crearForo("preguntas-y-respuestas", 20, 40, fecha, "test");
    await crearPublicacion(
      "test",
      "Estoy testeando nomas",
      "test",
      10,
      50,
      "test2",
      fecha,
      fecha,
      1
    );
    await crearPublicacion(
      "test",
      "Estoy testeando nomas",
      "test",
      10,
      50,
      "test2",
      fecha,
      fecha,
      2
    );
    await crearPublicacion(
      "test",
      "Estoy testeando nomas",
      "test",
      10,
      50,
      "test2",
      fecha,
      fecha,
      3
    );
    await crearPublicacion(
      "test",
      "Estoy testeando nomas",
      "test",
      10,
      50,
      "test2",
      fecha,
      fecha,
      1
    );
    await crearPublicacion(
      "test",
      "Estoy testeando nomas",
      "test",
      10,
      50,
      "test2",
      fecha,
      fecha,
      1
    );
    await crearPublicacion(
      "test",
      "Estoy testeando nomas",
      "test",
      10,
      50,
      "test2",
      fecha,
      fecha,
      1
    );
  }

  startPort() {
    this.app.listen(this.port, () => {
      console.log("Servidor esta corriendo en", this.port);
    });
  }
}

module.exports = Server;
