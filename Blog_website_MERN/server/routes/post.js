const express = require('express')
const { verifyToken } = require('../middlewares/authMiddleware')
const { createPost, deletePost, updatePost, getAllPost, getMyAllPost, getPost } = require('../controllers/postController')

const router = express.Router()

router.route('/').post(verifyToken, createPost)
router.route('/:id').delete(verifyToken, deletePost)
router.route('/:id').put(verifyToken, updatePost)
router.route('/').get(verifyToken,getAllPost)
router.route('/myPosts').get(verifyToken, getMyAllPost)
router.route('/:id').get(verifyToken, getPost)

module.exports = router
