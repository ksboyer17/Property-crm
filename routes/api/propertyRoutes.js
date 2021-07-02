const router = require("express").Router();
const { Property, User } = require("../../models");

// get a list of properties (that belong to the currently logged in user)
router.get("/", async (req, res) => {
  const { user_id } = req.session;
  try {
    // get the currently logged in user
    const user = await User.findOne({ _id: user_id }).populate("properties");

    // return the properties
    res.status(200).json(user.properties);
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
    const property = await Property.findOne({ _id: id });

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

    // update the list of the user's properties to include the newly created one
    user.properties = [...user.properties, propertyData._id];

    // save the updatedUser to the database
    const updatedUser = await user.save();

    console.log(updatedUser);

    res.status(200).json("hi there");
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
    const updatedProperty = await Property.findOne({ _id: id });

    res.status(200).json(updatedProperty);
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
    await Property.deleteOne({ _id: id });

    res.status(204).end();
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

module.exports = router;
