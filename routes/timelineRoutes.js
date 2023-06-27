const express = require("express");
const router = express.Router();

router.route("/").get((req, res) => res.send({ message: "All Timelines" }));
router.route("/:id").get((req, res) => res.send({ message: "One Timeline" }));

router.route("/").post((req, res) => res.send({ message: "create timeline" }));

router
  .route("/:id")
  .delete((req, res) => res.send({ message: "delete timeline" }));

router.route("/:id").put((req, res) => res.send({ message: "edit timeline" }));

module.exports = router;
