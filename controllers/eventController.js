const { constants } = require("../constants");
const Event = require("../models/eventModel");
const asyncHandler = require("express-async-handler");
const { generateUniqueTimelineID } = require("../middlewear/uniqueUser");

//@desc create event
//@route POST /api/events
//@access private
const createEvent = asyncHandler(async (req, res) => {
  const { title } = req.body;

  if (!title) {
    res.status(constants.VALIDATION_ERROR);
    throw new Error("Timeline Missing Values");
  }
  Timeline.create({
    title,
    timeline_id: await generateUniqueTimelineID(),
    status_id: 1,
    user_id: req.user.user_id,
  })
    .then((timeline) => {
      res
        .status(201)
        .json({ message: "timeline created succesfully " + timeline.toJSON() });
    })
    .catch((error) => {
      res.status(400);
      throw new Error("Failed to create timeline");
    });
});

//@desc Delete event
//@route DELETE /api/timelines
//@access private

//@desc update event
//@route PUT /api/events
//@access private
module.exports = { createTimeline };
