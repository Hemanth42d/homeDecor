const express = require("express");
const {
  registerOwner,
  loginOwner,
  logoutOwner,
} = require("../controllers/ownerAuthControllers");
const router = express.Router();

router.post("/register", registerOwner);
router.post("/login", loginOwner);
router.get("/logout", logoutOwner);

module.exports = router;
