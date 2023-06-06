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
      "https://cdni.pornpics.com/1280/7/629/55722047/55722047_152_4241.jpg",
      "regular",
      "gratuito"
    );
    await crearForo("cuckold", 20, 40, fecha, "test");
    await crearForo("presentate", 20, 40, fecha, "segundo");
    await crearForo("discusiones generales", 20, 40, fecha, "test");
    await crearPublicacion("test", "Estoy testeando nomas", "test", fecha, 1);
  }

  startPort() {
    this.app.listen(this.port, () => {
      console.log("Servidor esta corriendo en", this.port);
    });
  }
}

module.exports = Server;
