const express = require("express");
const {
  registerOwner,
  loginOwner,
  logoutOwner,
} = require("../controllers/ownerAuthControllers");
const {
  getOwnerProfile,
  updateOwnerDetails,
} = require("../controllers/ownerControllers");
const router = express.Router();

router.post("/register", registerOwner);
router.post("/login", loginOwner);
router.get("/owner-profile", getOwnerProfile);
router.post("/update-owner-profile", updateOwnerDetails);
router.get("/logout", logoutOwner);

module.exports = router;
