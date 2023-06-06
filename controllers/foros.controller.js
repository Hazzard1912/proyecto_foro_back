const { request, response } = require("express");
const Foro = require("../models/foro");
const Publicacion = require("../models/publicacion");

const obtenerForos = async (req = request, res = response) => {
  try {
    const foros = await Foro.findAll();
    const datosForos = foros.map((foro) => {
      return {
        titulo: foro.titulo,
        publicaciones: foro.publicaciones,
        comentarios: foro.comentarios,
        ultimaInteraccion: foro.ultimaInteraccion,
        ultimoUsuario: foro.ultimoUsuario,
      };
    });
    return res.status(200).json(datosForos);
  } catch (error) {
    console.log(error);
    return response.status(500).json({ msg: "Algo mal con el server" });
  }
};

const obtenerForo = async (req = request, res = response) => {
  try {
    const parametro = req.params.foro;

    const foro = await Foro.findOne({
      where: { titulo: parametro },
      attributes: ["id"],
    });

    const publicaciones = await Publicacion.findAll({
      where: { foroId: foro.id },
      include: Foro,
    });

    const datosPublicaciones = publicaciones.map((publicacion) => {
      return {
        titulo: publicacion.titulo,
        contenido: publicacion.contenido,
        autor: publicacion.autor,
        respuestas: publicacion.respuestas,
        vistas: publicacion.vistas,
        ultimoUsuario: publicacion.ultimoUsuario,
        fechaUltimoComentario: publicacion.fechaUltimoComentario,
        fechaCreacion: publicacion.fechaCreacion,
      };
    });

    return res.status(200).json(datosPublicaciones);
  } catch (error) {
    console.log(error);
    return response.status(500).json({ msg: error });
  }
};

// Implementar una ruta para extraer el avatar del usuario y asi poder
// obtenerlo desde el client.

// const obtenerAvatar = async (req = request, res = response) => {
//   try {

//   } catch (error) {
//     console.log(error);
//     return response.status(500).json({ msg: "Algo mal con el server" });
//   }
// };

module.exports = {
  obtenerForos,
  obtenerForo,
};
