// userRoutes.js
const express = require('express'); // Import Express
const { registerUser, authUser } = require('../controllers/userController'); // Import user controller functions

const router = express.Router(); // Create router

router.post('/register', registerUser); // Route for user registration
router.post('/login', authUser); // Route for user login

module.exports = router; // Export the router
