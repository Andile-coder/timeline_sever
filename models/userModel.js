const { DataTypes } = require("sequelize");

const sequelize = require("../config");

// Define the User model that matches your existing table
const User = sequelize.define(
  "User",
  {
    user_id: {
      type: DataTypes.STRING,
      primaryKey: true,
      autoIncrement: false,
    },
    username: {
      type: DataTypes.STRING(50),
    },
    email: {
      type: DataTypes.STRING(100),
    },
    password: {
      type: DataTypes.STRING(100),
    },
    active: {
      type: DataTypes.BOOLEAN,
    },
  },
  {
    tableName: "users", // Specify the table name
  }
);
module.exports = User;
