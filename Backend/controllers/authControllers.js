const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const { generateToken } = require("../utils/generatetoken");

module.exports.registerUser = async (req, res) => {
  try {
    let { email, password, userName } = req.body;

    let user = await userModel.findOne({ email });
    if (user)
      return res.status(401).send("You already have an account, please login");

    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(password, salt, async (err, hash) => {
        if (err) return res.send(err.message);
        else {
          let user = await userModel.create({
            email,
            password: hash,
            userName,
          });
          let token = generateToken(user);
          res.cookie("token", token);
          res.send("User registered Successfully");
          // res.redirect("/shop");
        }
      });
    });
  } catch (error) {
    res.send("error is :", error.message);
  }
};

module.exports.loginUser = async (req, res) => {
  try {
    let { email, password } = req.body;
    let user = await userModel.findOne({ email });
    if (!user) {
      return res.send("Email or password is incorrect");
    }

    bcrypt.compare(password, user.password, (err, result) => {
      if (err) {
        console.log(err.message);
        return res.send("Something went wrong");
      }
      // console.log(result);
      if (result) {
        let token = generateToken(user);
        res.cookie("token", token);
        res.send("Login successfull");
        // res.redirect("/shop");
      } else {
        res.send("Email or password is incorrect");
      }
    });
  } catch (error) {
    res.send(error.message);
  }
};

module.exports.logout = (req, res) => {
  res.clearCookie("token");
  res.send("Logout Successfull");
  // res.redirect("/");
};
