const express = require('express');
const { intent, confirmOrder, getUserOrder } = require('../controllers/orderController');
const { verifyToken } = require('../middlewares/authMiddleware');

const router = express.Router()

router.route("/create-payment-intent").post(verifyToken, intent)
router.route("/confirm").put(verifyToken, confirmOrder)
router.route('/').get(verifyToken, getUserOrder)
// router.get('/all/orders').get(verifyToken, verifyAdmin, getAllOrder)

module.exports = router