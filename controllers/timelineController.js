const { constants } = require("../constants");
const Timeline = require("../models/timelineModel");
const asyncHandler = require("express-async-handler");
const { generateUniqueTimelineID } = require("../middlewear/uniqueUser");
const { where } = require("sequelize");

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
      res.status(201).json({ data: timeline.toJSON() });
    })
    .catch((error) => {
      res.status(400);
      res.errored("Failed to create timeline");
    });
});

//@desc get timeline
//@route GET /api/timelines/:id
//@access public
const getTimeline = asyncHandler(async (req, res) => {
  const params = req.params;
  const user = req.user;
  Timeline.findOne({ where: { timeline_id: params.id } })
    .then((timeline) => {
      res.status(201).json(timeline.toJSON());
    })
    .catch((error) => {
      res.status(400);
      res.json({ message: error });
    });
});

//@desc get user timelines
//@route GET /api/timelines/user/:id
//@access private
const getUserTimelines = asyncHandler(async (req, res) => {
  try {
    const user = req.user;
    const timelines = await Timeline.findAll({
      where: { user_id: user.user_id },
    });
    res.status(201).json(timelines);
  } catch (error) {
    res.status(400).json({ error: "Failed to get user timelines" });
  }
});

//@desc Delete timeline
//@route DELETE /api/timelines
//@access private

//@desc update timeline
//@route PUT /api/timelines
//@access private
module.exports = { createTimeline, getTimeline, getUserTimelines };
