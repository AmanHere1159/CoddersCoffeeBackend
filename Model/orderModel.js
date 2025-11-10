const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
    //  productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    quantity: { type: Number, required: true },
    totalAmount: { type: Number, required: true },
    status: { type: String, default: 'Pending' },  // Pending, Paid
    createdAt: { type: Date, default: Date.now }
    }
);

const orderModelis =mongoose.model('Order',userSchema);
 module.exports = orderModelis