const Usuario = require("../models/usuario");

const crearUsuario = async (
  username,
  correo,
  hashedPassword,
  avatar,
  rol,
  subscripcion
) => {
  await Usuario.create({
    username,
    correo,
    password: hashedPassword,
    avatar,
    rol,
    subscripcion,
  });
};

module.exports = {
  crearUsuario,
};
