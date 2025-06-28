const jwt = require("jsonwebtoken");

const generateOwnerToken = (owner) => {
  return jwt.sign(
    { email: owner.email, id: owner._id },
    process.env.JWT_OWNER_TOKEN
  );
};

module.exports.generateOwnerToken = generateOwnerToken;
