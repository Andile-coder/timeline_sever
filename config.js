const { Sequelize } = require("sequelize");
const dotenv = require("dotenv").config();
const sequelize = new Sequelize(
  process.env.DATABASE_NAME,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD,
  {
    host: process.env.DATABASE_HOST,
    dialect: "mysql",
    define: {
      timestamps: true, // Enable automatic timestamps
      createdAt: "created_on", // Specify the column name for createdAt
      updatedAt: "last_updated_on", // Specify the column name for updatedAt
    },
  }
);

module.exports = sequelize;
