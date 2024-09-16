const express = require('express');
const { getConnections, addConnection } = require('../controllers/networkController');

const router = express.Router();

// Route to get all connections
router.get('/', getConnections);

// Route to add a new connection
router.post('/', addConnection);

module.exports = router;

