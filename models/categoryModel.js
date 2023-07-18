const { DataTypes } = require("sequelize");
const sequelize = require("../config");

const Category = sequelize.define(
  "Category",
  {
    category_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.TEXT,
    },
  },
  {
    tableName: "categories", // Specify the table name
  }
);

module.exports = Category;
