const jwt = require("jsonwebtoken");
const ownerModel = require("../models/ownerModel");

module.exports.getOwnerProfile = async (req, res) => {
  try {
    const ownerToken = req.cookies.ownerToken;
    if (!ownerToken) return res.status(401).send("No token provided");
    const decoded = jwt.verify(ownerToken, process.env.JWT_OWNER_TOKEN);
    const ownerId = decoded.id;
    let Owner = await ownerModel.findOne({ _id: ownerId });
    res.json(Owner);
  } catch (error) {
    res.status(401).send("Invalid token");
  }
};

module.exports.updateOwnerDetails = async (req, res) => {
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

    const owner = await ownerModel.findOneAndUpdate(
      addressId ? { email: email, "address._id": addressId } : { email: email },
      { $set: setObj },
      { new: true }
    );

    if (!owner) {
      return res.status(404).send("User or address not found");
    }

    res.send(owner);
  } catch (error) {
    res.status(401).send(error.message);
  }
};
