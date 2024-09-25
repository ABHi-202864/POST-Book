const { model, Schema } = require("mongoose");

const WatchlistModel = new Schema({
  name: String,
  price: Number,
  percent: Number,
  isDown: Boolean,
});

module.exports = model("watchlist", WatchlistModel);