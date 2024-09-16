const express = require('express'); // Import Express
const { updateProfile } = require('../controllers/profileController'); // Import profile controller function

const router = express.Router(); // Create router

// Route to update profile based on role
router.post('/:role', updateProfile);

module.exports = router; // Export the router

