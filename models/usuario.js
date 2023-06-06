const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/database");

const Usuario = sequelize.define("Usuario", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  correo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  avatar: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  rol: {
    type: DataTypes.ENUM("regular", "admin"),
    allowNull: false,
  },
  subscripcion: {
    type: DataTypes.ENUM("gratuito", "basico", "estandar", "premium"),
    allowNull: false,
  },
});

module.exports = Usuario;
