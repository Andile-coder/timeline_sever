const asynHandler = require("express-async-handler");

const { constants } = require("../constants");
const jwt = require("jsonwebtoken");

const validateToken = asynHandler(async (req, res, next) => {
  let token;
  let authHeader = req.headers.Authorization || req.headers.authorization;

  if (authHeader && authHeader.startsWith("Bearer")) {
    token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
      if (err) {
        res.status(constants.VALIDATION_ERROR);
        throw new Error("User Not Authorized");
      }
      req.user = decoded.user;
      next();
    });
  } else {
    res.status(constants.VALIDATION_ERROR);
    throw new Error("User Not Authorized");
  }
});

module.exports = validateToken;
