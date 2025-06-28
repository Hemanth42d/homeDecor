require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const db = require("./config/mongooseConnection");
const userRoutes = require("./routes/userRoutes");
const indexRoutes = require("./routes/indexRoutes");
const ownerRoutes = require("./routes/ownerRoutes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/", indexRoutes);
app.use("/user", userRoutes);
app.use("/owner", ownerRoutes);

app.listen(3000, () => {
  console.log(`app is running at http://localhost:${3000}`);
});
