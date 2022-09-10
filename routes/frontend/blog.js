const express = require('express');
const { FrontBlogPage, FrontSingleBlogPage } = require('../../controllers/frontend/BlogController');
const router = express.Router();

router.get('/', FrontBlogPage);
router.get('/:slug', FrontSingleBlogPage);

module.exports = router;