const { addToCart, decrementCartProductQty, emptyCart, getCart, incrementCartProductQty, removeFromCart } = require('../controllers/cartController')
const express = require('express')
const { verifyToken } = require('../middlewares/authMiddleware')

const router = express.Router()

router.route('/addedTo').post(verifyToken, addToCart)
router.route('/').get(verifyToken, getCart)
router.route('/removeFrom').delete(verifyToken, removeFromCart)
router.route('/empty').delete(verifyToken, emptyCart)
router.route('/increment').put(verifyToken, incrementCartProductQty)
router.route('/decrement').put(verifyToken, decrementCartProductQty)

module.exports = router