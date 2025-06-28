const ownerModel = require("../models/ownerModel");
const bcrypt = require("bcrypt");
const { generateOwnerToken } = require("../utils/generateOwnerToken");

module.exports.registerOwner = async (req, res) => {
  try {
    let { email, password, userName } = req.body;
    let owner = await ownerModel.findOne({ email });
    if (owner)
      return res.status(401).send("You already have an account, please login");
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(password, salt, async (err, hash) => {
        let owner = await ownerModel.create({
          email,
          password: hash,
          userName,
        });
        let token = generateOwnerToken(owner);
        res.cookie("ownerToken", token);
        res.send("Owner registered Successfully");
        // res.redirect("/owner");
      });
    });
  } catch (error) {
    console.log(error.messsage);
    return res.send("Something went Wrong...");
  }
};

module.exports.loginOwner = async (req, res) => {
  try {
    let { email, password } = req.body;
    let owner = await ownerModel.findOne({ email });
    if (!owner) return res.send("Something went Wrong...");

    bcrypt.compare(password, owner.password, (err, result) => {
      if (err) {
        console.log(err.message);
        return res.send("Something went wrong");
      }
      if (result) {
        let token = generateOwnerToken(owner);
        res.cookie("ownerToken", token);
        res.send("Owner login successfully");
        // res.redirect("/owner");
      } else {
        res.send("Email or password is incorrect");
      }
    });
  } catch (error) {
    console.log(error.messsage);
    return res.send("Something went Wrong...");
  }
};

module.exports.logoutOwner = (req, res) => {
  try {
    res.clearCookie("token");
    res.send("Logout successfully");
    // res.redirect("/");
  } catch (error) {
    console.log(error.messsage);
    return res.send("Something went Wrong...");
  }
};
