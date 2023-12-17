const express = require("express");
const {
  registerUser,
  authUser,
  allUsers,
} = require("../controllers/userControllers");
const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

// when we add protect its mean we cannot access directly the user will be protect everyone can not search user like we use in postmen
router.route("/").post(registerUser).get(protect, allUsers);
router.post("/login", authUser);

// the $or operator performs a logical or operaton on an array of two or more <expressions> and select the document that

module.exports = router;
