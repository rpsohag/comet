const express = require('express');
const { FrontProductPage, FrontSingleProductPage } = require('../../controllers/frontend/ProductController');
const router = express.Router();

router.get('/', FrontProductPage);
router.get('/:slug', FrontSingleProductPage);

module.exports = router;