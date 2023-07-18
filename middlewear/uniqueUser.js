const { v4: uuidv4 } = require("uuid");
const User = require("../models/userModel");
const Timeline = require("../models/timelineModel");
const Event = require("../models/eventModel");
const generateUniqueID = async () => {
  const uniquId = uuidv4();

  return (userFound = await User.findOne({
    where: {
      user_id: uniquId,
    },
  })
    .then(async (user) => {
      if (user) {
        await generateUniqueID();
      } else {
        return uniquId;
      }
    })
    .catch((error) => {
      console.error("Internal server error:", error);
    }));
};

const generateUniqueTimelineID = async () => {
  const uniquId = uuidv4();
  console.log("hello");
  return (userFound = await Event.findOne({
    where: {
      event_id: uniquId,
    },
  })
    .then(async (event) => {
      if (event) {
        await generateUniqueID();
      } else {
        return uniquId;
      }
    })
    .catch((error) => {
      console.error("Internal server error:", error);
    }));
};

const generateUniqueEventID = async () => {
  const uniquId = uuidv4();

  return (userFound = await Timeline.findOne({
    where: {
      timeline_id: uniquId,
    },
  })
    .then(async (user) => {
      if (user) {
        await generateUniqueID();
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
