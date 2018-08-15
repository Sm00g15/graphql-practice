const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config({ path: "variables.env" });
const Project = require("./models/Projects");
const User = require("./models/User");

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("DB connected"))
  .catch(err => console.error(err));
const app = express();

//Initializes Application
const PORT = process.env.PORT || 4444;
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
