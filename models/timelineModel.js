const { DataTypes } = require("sequelize");

const sequelize = require("../config");

const User = require("./userModel"); // Import the User model
const Status = require("./StatusModel"); // Import the Status model

const Timeline = sequelize.define(
  "Timeline",
  {
    timeline_id: {
      type: DataTypes.STRING,
      primaryKey: true,
      autoIncrement: false,
    },
    user_id: {
      type: DataTypes.STRING(100),
      references: {
        model: User,
        key: "user_id",
      },
    },
    status_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Status,
        key: "status_id",
      },
    },
    title: {
      type: DataTypes.STRING(100),
    },
  },
  {
    tableName: "timelines", // Specify the table name
  }
);

module.exports = Timeline;
