const { request, response } = require("express");
const Foro = require("../models/foro");

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

const obtenerAvatar = async (req = request, res = response) => {
  try {
    
  } catch (error) {
    console.log(error);
    return response.status(500).json({ msg: "Algo mal con el server" });
  }
};

module.exports = {
  obtenerForos,
  obtenerAvatar,
};
