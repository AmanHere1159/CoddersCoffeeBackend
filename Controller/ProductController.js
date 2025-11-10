const orderModelis = require("../Model/orderModel");
const payModel = require("../Model/paymentModel");
const modelis = require("../Model/productModel");
const { readUserFileSync, writeUserFileSync } = require("./asyncfunction");

exports.getProducts = async (req, res, next) => {
  res.send("Get Product");
};

exports.post = async (req, res) => {
  const allData = await modelis.find();
  try {
    const { product, pay } = req.body;

    if (!product || !pay) {
      return res
        .status(400)
        .json({ message: "Customer, product, and pay data are required." });
    }

    const { quantity, totalAmount } = product;
    const { cardName, cardNumber, cvv } = pay;

    // Simple validation
    if (!quantity || !totalAmount || !cardName || !cardNumber || !cvv) {
      return res.status(400).json({ message: "All fields are required." });
    }

    // Prepare a flat object for Mongoose
    const dataToSave = {
      quantity,
      totalAmount,
      cardName,
      cardNumber,
      cvv,
    };
    const proObj = await modelis.create(dataToSave);
    console.log("Added successfully");
    res.status(201).json({ message: "Product added", data: proObj });
  } catch (error) {
    console.error("Error in creating product:", error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};
exports.getter = async (req,res) =>{
  res.send("yeah it is working")
}
exports.cardDetails = async (req, res) => {
  const { cardName, cardNumber, cvv, pin } = req.body;
  const dataToSave = {
    cardName,
    cardNumber,
    cvv,
    pin,
  };
  console.log("recived body",dataToSave)
  try {
    if (!pin || !cardName || !cardNumber || !cvv) {
      return res.status(400).json({ message: "All fields are required." });
    }
    const details = await payModel.create(dataToSave);

    console.log("Added successfully",dataToSave);
    res.status(201).json({ message: "Product added", data: details });
  } catch (error) {
    console.error("Error in creating product:", error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};
exports.order = async (req,res)=>{
const  { coffeeName,quantity,totalAmount,pin } = req.body;
const dataToSave={ coffeeName,quantity,totalAmount,pin};
console.log(dataToSave)
try {
  if (!quantity || !totalAmount || !coffeeName || !pin) {
      return res.status(400).json({ message: "All fields are required." });
    }
  const payDetails = await orderModelis.create(dataToSave);
  console.log("Payment details added successfully",dataToSave);
    res.status(201).json({ message: "Payment details added", data: payDetails });
} catch (error) {
  console.error("Error occured in paying:", error);
    res.status(500).json({ message: "Paying Error", error: error.message });
}
}
