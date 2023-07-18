const express = require("express");
const router = express.Router();
const {
  createUser,
  loginUser,
  currentUser,
} = require("../controllers/userController");
const validateToken = require("../middlewear/validateToken");
router.post("/login", loginUser);

router.post("/register", createUser);

router.get("/user", validateToken, currentUser);

router.route("/logout").get((req, res) => {
  res.send({ message: "logout user" });
});

module.exports = router;
