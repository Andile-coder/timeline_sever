const express = require("express");
const router = express.Router();

router.route("/login").post((req, res) => {
  res.send({ message: "login user" });
});

router.route("/register").post((req, res) => {
  res.send({ message: "create user" });
});

router.route("/current").get((req, res) => {
  res.send({ message: "get current user" });
});
router.route("/logout").get((req, res) => {
  res.send({ message: "logout user" });
});

module.exports = router;
