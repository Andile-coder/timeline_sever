const Category = require("../models/categoryModel");
const asyncHandler = require("express-async-handler");

//@desc get categories
//@route GET /api/categories
//@access public
const getCategories = asyncHandler(async (req, res) => {
  Category.findAll()
    .then((response) => res.json({ response }))
    .catch((err) => {
      res.status(400);
      throw new Error("Failed get categories");
    });
  return response;
});

module.exports = { getCategories };
