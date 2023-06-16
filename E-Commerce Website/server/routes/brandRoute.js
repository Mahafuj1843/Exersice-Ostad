const express = require('express')
const { verifyToken, verifyAdmin } = require('../middlewares/authMiddleware')
const { createBrand, getAllBrand, getBrand, updateBrand, deleteBrand } = require('../controllers/brandController')
// import { upload } = require('../utils/imageUplode')

const router = express.Router()

router.route('/').post(verifyToken, verifyAdmin, /*upload.single("image"),*/ createBrand)
router.route('/').get(getAllBrand)
router.route('/:id').get(getBrand)
router.route('/:id').put(verifyToken, verifyAdmin, /*upload.single("image"),*/ updateBrand)
router.route('/:id').delete(verifyToken, verifyAdmin, deleteBrand)

module.exports = router