const express = require("express");
const app = express();
const db = require("./config/mongooseConnection");

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.listen(3000, () => {
  console.log(`app is running at https://localhost:${3000}`);
});
