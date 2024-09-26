const { model, Schema } = require("mongoose");

const OrdersModel = new Schema({
  name: String,
  qty: Number,
  price: Number,
  mode: String,
});

module.exports = model("order", OrdersModel);