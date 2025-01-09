const User = require('../models/User');

// Controller to create a new user
const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Create a new user instance
    const newUser = new User({
      name,
      email,
      password
    });

    // Save the user to MongoDB
    await newUser.save();
    res.status(201).json({ message: 'User created successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Error creating user', message: err.message });
  }
};

module.exports = { createUser };
