const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Register = require("../models/Register"); // Ensure the model name is correct
require("dotenv").config();

// Register User
const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Check if the user already exists
        let user = await Register.findOne({ email });
        if (user) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Save new user
        const newUser = new Register({
            name,
            email,
            password: hashedPassword,
        });

        await newUser.save();

        // Generate JWT token
        const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

        res.status(201).json({ 
            message: "User Registered Successfully", 
            user: { id: newUser._id, name: newUser.name, email: newUser.email },
            token 
        });

    } catch (error) {
        console.error("Error registering user:", error);
        res.status(500).json({ message: "Server Error" });
    }
};

module.exports = { registerUser };
