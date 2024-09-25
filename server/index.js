if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3002;
const url = process.env.MONGO_URL;



app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(PORT, () => {
  console.log("Doking on port = 3002");
  mongoose.connect(url);
}); 