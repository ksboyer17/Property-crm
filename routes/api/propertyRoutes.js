const router = require("express").Router();
const { Property, User } = require("../../models");

// get a list of properties (that belong to the currently logged in user)
router.get("/", async (req, res) => {
  //const { user_id } = req.session;
  try {
    // get the currently logged in user
    const user = await User.findOne({ _id: req.session.user_id }).populate(
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
  const { _id } = req.params;
  try {
    // get the property by it's id
    const property = await Property.findOne({ id: _id }).populate("units");

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
    const user = await User.findOne({ _id: user_id });
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
  const { _id } = req.params;
  try {
    await Property.findOneAndUpdate({ id: _id }, req.body);
    const updatedProperty = await Property.findOne({ id: id });

    res.status(200).json(updatedProperty);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

// delete a property
router.delete("/:id", async (req, res) => {
  const { _id } = req.params;
  console.log(_id);
  try {
    // delete the property by its id
    await Property.deleteOne({ id: _id });

    res.status(204).json("Property Deleted");
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

module.exports = router;
