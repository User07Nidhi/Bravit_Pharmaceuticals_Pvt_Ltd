const express = require('express');
const { createUser } = require('../controllers/userController');
const router = express.Router();

// POST route to create a user
router.post('/user', createUser);

module.exports = router;