const express = require("express");
const router = express.Router();

const validateToken = require("../middlewear/validateToken");
const {
  createEvent,
  getTimelineEvents,
  getEvent,
} = require("../controllers/eventController");
router.route("/").get((req, res) => res.send({ message: "All Events" }));
router.get("/:id", validateToken, getEvent);
router.post("/", validateToken, createEvent);
router.get("/timeline/:id", getTimelineEvents); //events for timeline

router
  .route("/:eventId")
  .delete((req, res) => res.send({ message: "delete Event" }));

router
  .route("/:eventId")
  .put((req, res) => res.send({ message: "edit event" }));

module.exports = router;
