const Foro = require("../models/foro");

const crearForo = async (
  titulo,
  publicaciones,
  comentarios,
  ultimaInteraccion,
  ultimoUsuario
) => {
  await Foro.create({
    titulo,
    publicaciones,
    comentarios,
    ultimaInteraccion,
    ultimoUsuario,
  });
};

module.exports = {
  crearForo,
};
