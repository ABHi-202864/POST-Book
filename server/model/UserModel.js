const { model, Schema } = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    min: 2,
    max: 30,
  },
  lastName: {
    type: String,
    required: true,
    min: 2,
    max: 30,
  },
  email: {
    type: String,
    required: true,
    max: 30,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    min: 5,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  }
});

userSchema.pre("save", async () => {
  this.password = await bcrypt.hash(this.password, 12);
});

module.exports = model("user", userSchema);