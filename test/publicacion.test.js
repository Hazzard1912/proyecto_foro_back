const Publicacion = require("../models/publicacion");

const crearPublicacion = async (
  titulo,
  contenido,
  autor,
  respuestas,
  vistas,
  ultimoUsuario,
  fechaUltimoComentario,
  fechaCreacion,
  foroId
) => {
  await Publicacion.create({
    titulo,
    contenido,
    autor,
    respuestas,
    vistas,
    ultimoUsuario,
    fechaUltimoComentario,
    fechaCreacion,
    foroId,
  });
};

module.exports = {
  crearPublicacion,
};
