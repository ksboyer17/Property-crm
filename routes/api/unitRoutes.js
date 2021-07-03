const router = require("express").Router();
const { Unit, User } = require("../../models");

// get a list of properties (that belong to the currently logged in user)
router.get("/", async (req, res) => {
  const { user_id } = req.session;
  try {
    // get the currently logged in user
    const user = await User.findOne({ _id: user_id }).populate("units");

    // return the properties
    res.status(200).json(user.Unit);
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
    const unit = await Unit.findOne({ _id: id });

    // return the property
    res.status(200).json(unit);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

// create a new property (that will belong to the currently logged in user)
router.post("/:id", async (req, res) => {
  const { user_id } = req.session;
  try {
    // create a new property and save it to the database
    const unit = new Unit(req.body);
    const unitData = await unit.save();

    // get the currently logged in user
    const user = await User.findOne({ _id: user_id });

    // update the list of the user's properties to include the newly created one
    user.unit = [...user.unit, unitData._id];

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
    await Unit.findOneAndUpdate({ _id: id }, req.body);
    const updatedUnit = await Unit.findOne({ _id: id });

    res.status(200).json(updatedUnit);
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