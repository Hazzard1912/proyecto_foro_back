const Publicacion = require("../models/publicacion");

const crearPublicacion = async (
  titulo,
  contenido,
  autor,
  fechaCreacion,
  foroId
) => {
  await Publicacion.create({
    titulo,
    contenido,
    autor,
    fechaCreacion,
    foroId,
  });
};

module.exports = {
  crearPublicacion,
};
