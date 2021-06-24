const router = require("express").Router();
const postController = require("../../controllers/postController");

router.route("/").get(postController.findAll).post(postController.save);

router.route("/:id").get(postController.findOne).delete(postController.remove);

module.exports = router;
