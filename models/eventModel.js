const { DataTypes } = require("sequelize");
const sequelize = require("../config");

const Timeline = require("./timelineModel"); // Import the Timeline model
const User = require("./userModel"); // Import the User model
const Category = require("./categoryModel"); // Import the Category model
const Status = require("./StatusModel"); // Import the Status model

const Event = sequelize.define(
  "Event",
  {
    event_id: {
      type: DataTypes.STRING(100),
      primaryKey: true,
    },
    timeline_id: {
      type: DataTypes.STRING(100),
      references: {
        model: Timeline,
        key: "timeline_id",
      },
    },
    user_id: {
      type: DataTypes.STRING(100),
      references: {
        model: User,
        key: "user_id",
      },
    },
    title: {
      type: DataTypes.STRING(100),
    },
    status_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Status,
        key: "status_id",
      },
    },
    category_id: {
      type: DataTypes.STRING(255),
      references: {
        model: Category,
        key: "category_id",
      },
    },
    description: {
      type: DataTypes.TEXT,
    },
    event_date: {
      type: DataTypes.DATE,
    },
  },
  {
    tableName: "events", // Specify the table name
  }
);

module.exports = Event;
