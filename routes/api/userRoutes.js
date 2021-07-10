const router = require("express").Router();
const { User } = require("../../models");

router.get("/checkAuth", async (req, res) => {
  if (req.session.logged_in && req.session.user_id) {
    try {
      const loggedInUser = await User.findById(req.session.user_id);
      if (loggedInUser) {
        const { _id, firstName, lastName, email } = loggedInUser;
        res.status(200).json({ id: _id, firstName, lastName, email });
      }
      res.status(404).end();
    } catch (err) {
      res.status(500).end();
    }
  }
  res.status(404).end();
});

router.post("/", async (req, res) => {
  try {
    const user = new User(req.body);
    const userData = await user.save();
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      const { _id, firstName, lastName, email } = userData;
      res.status(200).json({ id: _id, firstName, lastName, email });
    });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({ email: req.body.email });

    if (!userData) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    const validPassword = await userData.comparePassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      const { _id, firstName, lastName, email } = userData;

      res.json({ id: _id, firstName, lastName, email });
    });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

router.post("/logout", (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
