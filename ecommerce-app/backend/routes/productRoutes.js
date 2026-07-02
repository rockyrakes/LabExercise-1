const express = require('express');
const router = express.Router();
const { getProducts, getFilterOptions } = require('../controllers/productController');

router.get('/', getProducts);
router.get('/filters', getFilterOptions);

module.exports = router;