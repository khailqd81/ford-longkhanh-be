const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number },
  type: { type: String, required: true },
  numberSeat: { type: Number },
  fuelType: { type: String },
  imageUrl: { type: String },
});

module.exports = mongoose.model("Car", carSchema);
