const express = require('express');
const { verifyAdmin, verifyToken, verifyUser } =require('../middlewares/authMiddleware')
const { createCategory, getAllCategory, getCategory, updateCategory, deleteCategory } = require('../controllers/categoryController')
// import { upload } from '../utils/imageUplode.js'

const router = express.Router()

router.route('/').post(verifyToken, verifyAdmin, /*upload.single("image"),*/ createCategory)
router.route('/').get(getAllCategory)
router.route('/:id').get(getCategory)
router.route('/:id').put(verifyToken, verifyAdmin, /*upload.single("image"),*/ updateCategory)
router.route('/:id').delete(verifyToken, verifyAdmin, deleteCategory)

module.exports = router