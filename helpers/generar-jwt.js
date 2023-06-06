const jwt = require("jsonwebtoken");

// MODIFICAR ACORDE A LA APP

const generarJWT = async (user_email, user_role) => {
  try {
    const payload = {
      user_email,
      user_role,
    };

    const token = await jwt.sign(payload, process.env.secret, {
      expiresIn: "1h",
    });
    return token;
  } catch (error) {
    console.log(error);
    throw new Error("No se pudo generar el token");
  }
};

module.exports = {
  generarJWT,
};