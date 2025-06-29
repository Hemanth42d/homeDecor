const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

module.exports.getUserProfile = async (req, res) => {
  try {
    const token = req.cookies.token;
    if (!token) return res.status(401).send("No token provided");
    const decoded = jwt.verify(token, process.env.JWT_TOKEN);
    const userId = decoded.id;
    let user = await userModel.findOne({ _id: userId });
    res.json(user);
  } catch (error) {
    res.status(401).send("Invalid token");
  }
};

module.exports.updateUserDetails = async (req, res) => {
  try {
    let { email, userName, phoneNumber, address, addressId } = req.body;
    const setObj = {};
    if (userName !== undefined) setObj.userName = userName;
    if (email !== undefined) setObj.email = email;
    if (phoneNumber !== undefined) setObj.phoneNumber = phoneNumber;
    if (address && addressId) {
      for (const key in address) {
        setObj[`address.$.${key}`] = address[key];
      }
    }

    if (Object.keys(setObj).length === 0) {
      return res.status(400).send("No fields to update");
    }

    const user = await userModel.findOneAndUpdate(
      addressId ? { email: email, "address._id": addressId } : { email: email },
      { $set: setObj },
      { new: true }
    );

    if (!user) {
      return res.status(404).send("User or address not found");
    }

    res.send(user);
  } catch (error) {
    res.status(401).send(error.message);
  }
};
