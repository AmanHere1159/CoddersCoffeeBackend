const Order = require('../models/Order');
const Product = require('../models/Product');

exports.createOrder = async (req, res, next) => {
    const { productId, quantity } = req.body;

    try {
        const product = await Product.findById(productId);
        const totalAmount = product.price * quantity;

        const order = await Order.create({
            coffeeName,
            quantity,
            totalAmount,
            pin
        });

        res.status(201).json(order);
    } catch (error) {
        next(error);
    }
};

exports.confirmPayment = async (req, res, next) => {
    const { orderId, pin } = req.body;

    try {
        // Add PIN verification logic here (mock or real)

        const order = await Order.findById(orderId);
        order.status = 'Paid';
        await order.save();

        res.json({ message: 'Payment Successful' });
    } catch (error) {
        next(error);
    }
};
