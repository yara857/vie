const express = require('express');
const router = express.Router();
const productController = require('../controller/productController');

// router.get('/products', productController.getProduct);
router.post('/products', productController.createProduct);
// router.post('/products', productController.updateProduct);
// router.delete('/products', productController.deleteProduct);

module.exports = router;