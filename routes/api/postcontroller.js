const router = require("express").Router();
const postController = require("../../controllers/postController");
const Resident = require("../../models/resident");
const Management = require("../../models/management");
const Workorder = require("../../models/workorder");

// router.route("/").get(postController.findAll).post(postController.save);

// router.route("/:id").get(postController.findOne).delete(postController.remove);

router.post("/residentdatas", ({ body }, res) => {
  Resident.create(body)
    .then((residentCreate) => {
      res.json(residentCreate);
    })
    .catch((err) => {
      res.status(404).json(err);
    });
});

router.post("/managementdatas", ({ body }, res) => {
  Management.create(body)
    .then((mamagementCreate) => {
      res.json(mamagementCreate);
    })
    .catch((err) => {
      res.status(404).json(err);
    });
});

router.post("/workorderdatas", ({ body }, res) => {
  Workorder.create(body)
    .then((workorderCreate) => {
      res.json(workorderCreate);
    })
    .catch((err) => {
      res.status(404).json(err);
    });
});

router.get("/residentdatas", (req, res) => {
  Resident.find()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(404).json(err);
    });
});

router.get("/managementdatas", (req, res) => {
  Management.find()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(404).json(err);
    });
});

router.get("/workorderdatas", (req, res) => {
  Workorder.find()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(404).json(err);
    });
});
module.exports = router;
