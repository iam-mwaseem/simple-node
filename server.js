require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use("/", (req, res) => {
  res.send(
    "<h1>Hi!! from your simple node server with github actions in play</h1>"
  );
});

mongoose.connect(process.env.DATABASE_URI).then(() => {
  console.log("Connected to MongoDB");
  app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
  });
});
