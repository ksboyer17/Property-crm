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
  const id = req.params.id;
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

// create a new property (that will belong to the currently logged in user)
router.post("/", async (req, res) => {
  console.log(req);
  try {
    // create a new property and save it to the database
    const unit = new Unit(req.body);
    const unitData = await unit.save();
    console.log(unitData);
    // get the currently logged in user
    const property = await Property.findOne();
    console.log(property);
    const propertyObj = property.toObject();

    // update the list of the user's properties to include the newly created one
    property.units = [...propertyObj.units, unitData._id];

    // save the updatedUser to the database
    const updatedProperty = await property.save();

    console.log(updatedProperty);

    res.status(200).json(updatedProperty);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

// update a property
router.put("/:id", async (req, res) => {
  const id = req.params.id;
  console.log(id);
  try {
    await Unit.findByIdAndUpdate(id, req.body);
    const updatedUnit = await Unit.findById(id);

    res.status(200).json(updatedUnit);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

// delete a property
router.delete("/:id", async (req, res) => {
  const { _id } = req.params;
  try {
    // delete the property by its id
    await Unit.deleteOne({ id: _id });

    res.status(204).end();
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

module.exports = router;
