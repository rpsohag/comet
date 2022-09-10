const express = require('express');
const { FrontAboutPage, FrontServicesPage, FrontContactPage, FrontIndexPage } = require('../../controllers/frontend/PageController');
const router = express.Router();

router.get('/', FrontIndexPage);
router.get('/about', FrontAboutPage);
router.get('/services', FrontServicesPage);
router.get('/contact', FrontContactPage);

module.exports = router;