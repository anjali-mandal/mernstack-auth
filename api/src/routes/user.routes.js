// src/routes/user.routes.js
const express = require('express');
const router = express.Router();
const { test } = require('../controllers/user.controller');  // Correct path to the controller

// Define your routes
router.get('/', test);

// Export the router
module.exports = router;
