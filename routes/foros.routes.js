const { Router } = require("express");
const { obtenerForos } = require("../controllers/foros.controller");

const router = Router();

router.get("", obtenerForos);

router.get("avatar");

module.exports = router;
