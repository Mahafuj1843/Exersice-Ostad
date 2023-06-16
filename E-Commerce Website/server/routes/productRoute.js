const express = require('express')
const { uploadPhoto } = require('../middlewares/uploadImage')
const { verifyAdmin, verifyToken} = require('../middlewares/authMiddleware')
const { createProduct, getAllProduct, getProduct, updateProduct, getProductDetails, deleteProduct } = require('../controllers/productController')

const router = express.Router()

// router.route('/').post(verifyToken, verifyAdmin, uploadPhoto.array('images', 3), createProduct)
router.route('/').post(verifyToken, verifyAdmin, uploadPhoto.single('image'), createProduct)
router.route('/').get(getAllProduct)
router.route('/:id').get(getProduct)
router.route('/details/:id').get(getProductDetails)
router.route('/:id').put(verifyToken, verifyAdmin, uploadPhoto.single('image'), updateProduct)
router.route('/:id').delete(verifyToken, verifyAdmin, deleteProduct)
// router.route('/p/filter').get(filterProduct)

module.exports = router