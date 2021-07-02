const router = require("express").Router();
const userRoutes = require("./userRoutes");
const propertyRoutes = require("./propertyRoutes");
const unitRoutes = require("./unitRoutes");

router.use("/auth", userRoutes); // -> POST / (signup), POST /login (login), POST /logout (logout)
router.use("/properties", propertyRoutes);
router.use("/properties/:propertyId/units", unitRoutes);

module.exports = router;
