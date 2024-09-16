const express = require('express');
const { getMentors, applyForMentorship } = require('../controllers/mentorshipController');

const router = express.Router();

// Route to get all mentors
router.get('/', getMentors);

// Route to apply for mentorship
router.post('/apply', applyForMentorship);

module.exports = router;

