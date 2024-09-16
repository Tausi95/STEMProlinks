const express = require('express');
const { getEvents, createEvent } = require('../controllers/eventsController');

const router = express.Router();

// Route to get all events
router.get('/', getEvents);

// Route to create a new event
router.post('/', createEvent);

module.exports = router;

