const { constants } = require("../constants");
const Event = require("../models/eventModel");
const asyncHandler = require("express-async-handler");
const { generateUniqueEventID } = require("../middlewear/uniqueUser");

//@desc create event
//@route POST /api/events
//@access private

const createEvent = asyncHandler(async (req, res) => {
  const { title, description, category_id, event_date, y_axis, timeline_id } =
    req.body;
  const user = req.user;

  if (
    !title ||
    !description ||
    !category_id ||
    !event_date ||
    !y_axis ||
    !timeline_id
  ) {
    res.status(constants.VALIDATION_ERROR);
    throw new Error("Event Missing Values");
  }

  const eventId = await generateUniqueEventID({ event_date, count: 0 });
  console.log("++++++++++++", eventId);
  Event.create({
    event_id: eventId,
    title,
    description,
    timeline_id,
    status_id: 1,
    category_id,
    event_date,
    y_axis,
    user_id: user.user_id,
  })
    .then((event) => {
      res.status(201).json({ data: event.toJSON() });
    })
    .catch((error) => {
      res.status(400);
      console.log(error);
      throw new Error("Failed to create event", error);
    });
});

//@desc get all timeline events for a user
//@route GET /api/events/timeline/:timeline_id
//@access private

const getTimelineEvents = asyncHandler(async (req, res) => {
  const user = req.user;
  const params = req.params;
  Event.findAll({ where: { timeline_id: params.id, user_id: user.user_id } })
    .then((timelineEvents) => {
      res.status(201).json(timelineEvents);
    })
    .catch((error) => {
      res.status(400);
      throw new Error("Failed to get user events", error);
    });
});

//@desc Delete event
//@route DELETE /api/timelines
//@access private

//@desc update event
//@route PUT /api/events
//@access private
module.exports = { createEvent, getTimelineEvents };
