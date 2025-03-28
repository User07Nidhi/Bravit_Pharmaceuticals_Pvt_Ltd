const express = require("express");
const router = express.Router();
const { registerUser, loginUser } = require("../controllers/RegisterController");
const { contact } = require('../controllers/contact_Controller');
const { careers } = require('../controllers/careers_Controller.js');
const { addToCart, viewCart, removeFromCart } = require('../controllers/cartController.js');

// Register Route
router.post("/register", registerUser);
router.post("/login", loginUser);
router.post('/contactus', contact);
router.post('/career', careers);
router.post('/add', addToCart);
router.get('/:userId', viewCart);
router.post('/remove', removeFromCart);

module.exports = router;
