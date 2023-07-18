const express = require("express");
const {
  createTimeline,
  getTimeline,
  getUserTimelines,
} = require("../controllers/timelineController");
const validateToken = require("../middlewear/validateToken");
const router = express.Router();

router.route("/").get((req, res) => res.send({ message: "All Timelines" }));
router.get("/:id", validateToken, getTimeline);
router.get("/user/:id", validateToken, getUserTimelines);
router.post("/", validateToken, createTimeline);

router
  .route("/:id")
  .delete((req, res) => res.send({ message: "delete timeline" }));

router.route("/:id").put((req, res) => res.send({ message: "edit timeline" }));

module.exports = router;
