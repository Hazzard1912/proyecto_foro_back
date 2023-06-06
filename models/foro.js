const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/database");

const Foro = sequelize.define("Foro", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  titulo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  publicaciones: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  comentarios: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  ultimaInteraccion: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  ultimoUsuario: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Foro;
