const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/database");
const Foro = require("./foro");

const Publicacion = sequelize.define("Publicacion", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  titulo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  contenido: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  autor: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  respuestas: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  vistas: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  ultimoUsuario: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  fechaUltimoComentario: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  fechaCreacion: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
  },
});

Foro.hasMany(Publicacion, { foreignKey: "foroId" });
Publicacion.belongsTo(Foro, { foreignKey: "foroId" });

module.exports = Publicacion;
