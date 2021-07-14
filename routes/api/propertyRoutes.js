const router = require("express").Router();
const { Property, User, Unit } = require("../../models");

// get a list of properties (that belong to the currently logged in user)
router.get("/", async (req, res) => {
  //const { user_id } = req.session;
  try {
    // get the currently logged in user
    const user = await User.findById(req.session.user_id).populate(
      "properties"
    );

    console.log(user);

    // return the properties
    console.log(user);
    const properties = user.toObject().properties;
    res.status(200).json(properties);
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
    const property = await Property.findById(id).populate("units");

    // return the property
    res.status(200).json(property);
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
    const property = new Property(req.body);
    const propertyData = await property.save();

    // get the currently logged in user
    const user = await User.findById(user_id);
    const userObj = user.toObject();

    // update the list of the user's properties to include the newly created one
    user.properties = [...userObj.properties, propertyData._id];

    // save the updatedUser to the database
    const updatedUser = await user.save();

    console.log(updatedUser);

    res.status(200).json(property);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

// update a property
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await Property.findOneAndUpdate({ _id: id }, req.body);

    res.status(200).end();
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

// delete a property
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    // delete the property by its id
    await Property.deleteOne({ _id: id });

    res.status(204).json("Property Deleted");
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

router.post("/:id/unit", async (req, res) => {
  try {
    const { id } = req.params;
    // create a new property and save it to the database
    const unit = new Unit(req.body);
    const unitData = await unit.save();
    console.log(unitData);
    // get the currently logged in user
    const property = await Property.findById(id);
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

module.exports = router;
