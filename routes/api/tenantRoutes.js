const router = require("express").Router();
const { Tenant, Unit, User } = require("../../models");

// get a list of properties (that belong to the currently logged in user)
router.get("/", async (req, res) => {
  try {
    // get the currently logged in user
    const tenant = await Tenant.find().populate("tenants");

    // return the properties
    console.log(tenant);
    res.status(200).json(tenant);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

// get a single property by it's ID
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    // get the property by it's id
    const tenant = await Tenant.findById(id);

    // return the property
    res.status(200).json(tenant);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

// create a new property (that will belong to the currently logged in user)
router.post("/", async (req, res) => {
  const { user_id } = req.session;
  try {
    // create a new property and save it to the database
    const tenant = new Tenant(req.body);
    const tenantData = await tenant.save();

    console.log(tenantData);

    res.status(200).json(tenantData);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

// update a property
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await Unit.findOneAndUpdate({ _id: id }, req.body);

    res.status(200).end();
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

// delete a
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    // delete by its id
    await Tenant.deleteOne({ _id: id });

    res.status(204).end();
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

module.exports = router;
