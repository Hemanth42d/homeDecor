const mongoose = require("mongoose");
const config = require("config");

const dbConnection = mongoose
  .connect(`${config.get("MONGODB_URI")}/homeDecor`)
  .then(() => {
    console.log("Connection successfull");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = dbConnection;
