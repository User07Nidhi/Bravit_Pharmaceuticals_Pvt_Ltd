const express = require("express");
const router = express.Router();
const { registerUser, loginUser } = require("../controllers/RegisterController");
const { contact } = require('../controllers/contact_Controller');

// Register Route
router.post("/register", registerUser);
router.post("/login", loginUser);
router.post('/contactus', contact);

module.exports = router;
