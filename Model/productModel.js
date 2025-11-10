const mongoose = require("mongoose");
const { Schema, Types } = mongoose;

const productSchema = new mongoose.Schema(
  {
  
    cardName: { type: String, required: true },
    cardNumber: { type: Number, required: true },
    cvv: { type: Number, required: true },
    quantity: { type: Number, required: true },
    totalAmount: { type: Number, required: true },
    // pin: { type: Number, required: true },
    status: { type: String, default: "Pending" }, // Pending, Paid
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const modelis = mongoose.model("Product", productSchema);
module.exports = modelis;
