const { constants } = require("../constants");
const Timeline = require("../models/timelineModel");
const asyncHandler = require("express-async-handler");
const { generateUniqueTimelineID } = require("../middlewear/uniqueUser");

//@desc create timeline
//@route POST /api/timelines
//@access private
const createTimeline = asyncHandler(async (req, res) => {
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

//@desc Delete timeline
//@route DELETE /api/timelines
//@access private

//@desc update timeline
//@route PUT /api/timelines
//@access private
module.exports = { createTimeline };
