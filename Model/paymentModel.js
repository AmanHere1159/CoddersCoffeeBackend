const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
cardName:{type:String,required:true},
cardNumber:{type:Number,required:true},
cvv:{type:Number,required:true},
pin:{type:Number,required:true}
})
const payModel=mongoose.model('Payment',paymentSchema);
module.exports = payModel