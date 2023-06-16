const express = require('express')
const { verifyToken } = require('../middlewares/authMiddleware')

const router = express.Router()

router.route('/addedTo').post(verifyToken, addToWishlist)
router.route('/').get(verifyToken, getWishList)
router.route('/removeFrom').delete(verifyToken, removeFromWishlist)
router.route('/empty').delete(verifyToken, emptyWishlist)

module.export = router