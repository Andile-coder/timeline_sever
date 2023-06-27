const express = require("express");
const router = express.Router();

router.route("/").get((req, res) => res.send({ message: "All Events" }));
router.route("/:id").get((req, res) => res.send({ message: "One Event" }));

router
  .route("/:TimelineId")
  .post((req, res) => res.send({ message: "create timeline events" }));

router
  .route("/:eventId")
  .delete((req, res) => res.send({ message: "delete Event" }));

router
  .route("/:eventId")
  .put((req, res) => res.send({ message: "edit event" }));

module.exports = router;
