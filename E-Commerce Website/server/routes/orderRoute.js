const express = require('express');
const { intent, confirmOrder } = require('../controllers/orderController');

const router = express.Router()

router.route("/create-payment-intent").post(verifyToken, intent)
router.route("/confirm").put(verifyToken, confirmOrder)

router.post('/order').post(verifyToken, createOrder)
router.get('/order/:id').get(verifyToken, getUserOrder)
router.get('/all/orders').get(verifyToken, verifyAdmin, getAllOrder)

module.exports = router