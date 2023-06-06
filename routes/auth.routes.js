const { Router } = require("express");
const { check } = require("express-validator");

const router = Router();

router.post("/login", [
  check("correo", "el correo es obligatorio").isEmail(),
  check("password", "la contraseña es obligatoria").not().isEmpty(),
]);

module.exports = router;
