const mongoose = require("mongoose");
const { Schema } = mongoose;

const recipientSchema = new Schema({
  email: String,
  responded: { type: Number, default: false },
});

mongoose.exports = recipientSchema;
