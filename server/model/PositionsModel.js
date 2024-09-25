const { model, Schema } = require("mongoose");

const PositionsModel = new Schema({
  product: String,
  name: String,
  qty: Number,
  avg: Number,
  price: Number,
  net: String,
  day: String,
  isLoss: Boolean,
});

module.exports = model("position", PositionsModel);