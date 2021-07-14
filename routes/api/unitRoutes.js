const router = require("express").Router();
const { Unit, Property, User } = require("../../models");

// get a list of units (that belong to the currently logged in user)
router.get("/", async (req, res) => {
  try {
    // get the currently logged in user
    const unit = await Unit.find({});
    //console.log(req);

    console.log(unit);
    // return the properties
    res.status(200).json(unit);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

// get a single unit by it's ID
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    // get the property by it's id
    const unit = await Unit.findById(id);
    console.log(unit);
    // return the property
    res.status(200).json(unit);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

// update a property
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    await Unit.findByIdAndUpdate({ _id: id }, req.body);

    res.status(200).end();
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

// delete a property
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    // delete the property by its id
    await Unit.deleteOne({ _id: id });

    res.status(204).end();
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

module.exports = router;
