const express = require("express");
const router = express.Router();
const { registerUser, loginUser } = require("../controllers/RegisterController");
const { contact } = require('../controllers/contact_Controller');
const { careers } = require('../controllers/careers_Controller.js');

// Register Route
router.post("/register", registerUser);
router.post("/login", loginUser);
router.post('/contactus', contact);
router.post('/career', careers);

module.exports = router;
