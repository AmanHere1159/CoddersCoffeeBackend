const express = require('express');
const { createOrder, confirmPayment } = require('../Controller/PaymentController');
const { cardDetails, getter } = require('../Controller/ProductController');
const router = express.Router();

router.post('/order', createOrder);
router.post('/confirm', confirmPayment);
router.post('/details',cardDetails)
router.get('/get',getter)

module.exports = router;
