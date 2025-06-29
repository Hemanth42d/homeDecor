const express = require("express");
const {
  registerUser,
  loginUser,
  logout,
} = require("../controllers/authControllers");
const {
  getUserProfile,
  updateUserDetails,
} = require("../controllers/userControllers");
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/logout", logout);
router.get("/get-profile", getUserProfile);
router.post("/update-user-details", updateUserDetails);

module.exports = router;
