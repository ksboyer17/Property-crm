const router = require("express").Router();
const userRoutes = require("./userRoutes");
const propertyRoutes = require("./propertyRoutes");
const unitRoutes = require("./unitRoutes");
const tenantRoutes = require("./tenantRoutes");

router.use("/auth", userRoutes); // -> POST / (signup), POST /login (login), POST /logout (logout)
router.use("/properties", propertyRoutes);
//took out :propertyID/units
router.use("/units", unitRoutes);
router.use("/tenants", tenantRoutes);

module.exports = router;
