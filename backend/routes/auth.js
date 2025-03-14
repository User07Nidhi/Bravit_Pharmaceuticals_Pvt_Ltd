const express = require("express");
const router = express.Router();
const { registerUser } = require("../controllers/RegisterController");

// Register Route
router.post("/register", registerUser);

module.exports = router;
