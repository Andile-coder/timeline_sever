const express = require("express");
const { createTimeline } = require("../controllers/timelineController");
const validateToken = require("../middlewear/validateToken");
const router = express.Router();

router.route("/").get((req, res) => res.send({ message: "All Timelines" }));
router.route("/:id").get((req, res) => res.send({ message: "One Timeline" }));

router.post("/", validateToken, createTimeline);

router
  .route("/:id")
  .delete((req, res) => res.send({ message: "delete timeline" }));

router.route("/:id").put((req, res) => res.send({ message: "edit timeline" }));

module.exports = router;
