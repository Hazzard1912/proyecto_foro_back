const Usuario = require("../models/usuario");
const { request, response } = require("express");

const obtenerAvatar = async (req = request, res = response, next) => {
  const { username } = req.body;
  try {
    const usuario = await Usuario.findOne({
      where: { username },
      attributes: ["avatar"],
    });

    if (usuario) {
      const avatar = usuario.avatar;
      req.avatar = avatar;
      next();
    } else {
      return res.status(400).json({ msg: "usuario no encontrado" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: error });
  }
};

module.exports = obtenerAvatar;
