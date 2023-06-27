const { DataTypes } = require("sequelize");

const sequelize = require("../config");

const Status = sequelize.define(
  "Status",
  {
    status_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    name: {
      type: DataTypes.ENUM("APPROVED", "PUBLISHED", "CANCELLED", "PENDING"),
    },
    description: {
      type: DataTypes.TEXT,
    },
  },
  {
    tableName: "statuses", // Specify the table name
  }
);

module.exports = Status;
