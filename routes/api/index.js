const router = require("express").Router();
const postcontrollerRoutes = require("./postcontroller");

router.use("/postcontroller", postcontrollerRoutes);

module.exports = router;
