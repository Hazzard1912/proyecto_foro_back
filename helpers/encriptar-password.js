const bcryptjs = require("bcryptjs");

const encriptar = (password) => {
  const hashed = bcryptjs.hashSync(password);
  return hashed;
};

module.exports = { encriptar };
