const { Router } = require("express");
const { obtenerForos, obtenerForo } = require("../controllers/foros.controller");

const router = Router();

router.get("", obtenerForos);

router.get("/:foro", obtenerForo);

// router.get("avatar");

module.exports = router;
