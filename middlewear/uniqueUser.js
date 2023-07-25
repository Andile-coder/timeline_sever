const { v4: uuidv4 } = require("uuid");
const User = require("../models/userModel");
const Timeline = require("../models/timelineModel");
const Event = require("../models/eventModel");
const generateUniqueID = async () => {
  const uniquId = uuidv4().split("-")[0];

  return (userFound = await User.findOne({
    where: {
      user_id: uniquId,
    },
  })
    .then(async (user) => {
      if (user) {
        return await generateUniqueID();
      } else {
        return uniquId;
      }
    })
    .catch((error) => {
      console.error("Internal server error:", error);
    }));
};

const generateUniqueEventID = async ({ event_date, count }) => {
  const dateId = event_date.split("T")[0].split("-");
  let event_id;
  if (count <= 9) {
    event_id = dateId.join("") + `0${count}`;
  } else {
    event_id = dateId.join("") + `${count}`;
  }

  return (userFound = await Event.findOne({
    where: {
      event_id: event_id,
    },
  })
    .then(async (event) => {
      if (event) {
        return await generateUniqueEventID({ event_date, count: count + 1 });
      } else {
        console.log("Event", event, event_id);
        return event_id;
      }
    })
    .catch((error) => {
      console.error("Internal server error:", error);
    }));
};

const generateUniqueTimelineID = async () => {
  const uniquId = uuidv4();

  return (userFound = await Timeline.findOne({
    where: {
      timeline_id: uniquId,
    },
  })
    .then(async (user) => {
      if (user) {
        await generateUniqueTimelineID();
      } else {
        return uniquId;
      }
    })
    .catch((error) => {
      console.error("Internal server error:", error);
    }));
};
module.exports = {
  generateUniqueID,
  generateUniqueTimelineID,
  generateUniqueEventID,
};
