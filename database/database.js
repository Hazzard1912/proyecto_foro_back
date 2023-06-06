require("dotenv").config();
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("cuckold", "root", process.env.db, {
  host: "localhost",
  dialect: "mysql",
});

const connect = async () => {
  try {
    sequelize.authenticate();
    console.log("Conectado");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  sequelize,
  connect,
};
