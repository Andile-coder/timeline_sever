const express = require("express");
const router = express.Router();

const validateToken = require("../middlewear/validateToken");
const {
  createEvent,
  getTimelineEvents,
} = require("../controllers/eventController");
router.route("/").get((req, res) => res.send({ message: "All Events" }));
router.route("/:id").get((req, res) => res.send({ message: "One Event" }));

router.post("/", validateToken, createEvent);
router.get("/timeline/:id", validateToken, getTimelineEvents); //events for timeline

router
  .route("/:eventId")
  .delete((req, res) => res.send({ message: "delete Event" }));

router
  .route("/:eventId")
  .put((req, res) => res.send({ message: "edit event" }));

module.exports = router;
