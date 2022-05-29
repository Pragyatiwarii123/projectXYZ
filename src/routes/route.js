
const express = require('express')
const router = express.Router()

const {createUser, loginUser, getUserDetails, updateUserDetails} = require('../controllers/userController')

router.post('/register',createUser)
router.post('/login', loginUser)
router.get('/user/:userId/profile', getUserDetails)
router.put('/user/:userId/profile',updateUserDetails )

//********************************************************************************************************************

const { createProduct, getProduct, getProductById,updateProductDetails, deleteProductById } = require('../controllers/productController')


router.post('/products', createProduct)
router.get('/products', getProduct)
router.get('/products/:productId', getProductById)
router.put('/products/:productId', updateProductDetails)
router.delete('/products/:productId', deleteProductById)

//*********************************************************************************************************************** */

const { addToCart, updateCart, getCart, deleteCart } = require('../controllers/cartController')



router.post('/users/:userId/cart', addToCart)
router.put('/users/:userId/cart', updateCart)
router.get('/users/:userId/cart', getCart)
router.delete('/users/:userId/cart', deleteCart)








module.exports = router