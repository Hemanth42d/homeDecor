const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const { generateToken } = require("../utils/generatetoken");

module.exports.registerUser = async (req, res) => {
  try {
    let { email, password, fullName } = req.body;

    let user = await userModel.findOne({ email });
    if (user)
      return res.status(401).send("User already exists, Consider Login option");

    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(password, salt, async (err, hash) => {
        if (err) return res.send("Something went Wrong..");
        else {
          let user = userModel.create({
            email,
            password: hash,
            fullName,
          });
          let token = generateToken(user);
          res.cookie("token", token);
          res.send("User Succesfully Created");
          //   res.redirect("/shop");
        }
      });
    });
  } catch (error) {
    console.log(error);
    res.send("error : " + error.message);
  }
};

module.exports.loginUser = async (req, res) => {
  try {
    let { email, password } = req.body;
    let user = userModel.findOne({ email });
    if (!user) {
      return res.send("Something went wrong..");
    }

    bcrypt.compare(password, user.password, (err, result) => {
      if (result) {
        let token = generateToken(user);
        res.cookie("token", token);
        res.redirect("/shop");
      } else {
        res.send("Email Or Password is wrong..");
      }
    });
  } catch (error) {
    console.log(error);
    res.send("Error is : " + error.message);
  }
};

module.exports.logout = (req, res) => {
  res.cookie("token", "");
  res.redirect("/");
};
