const Contact_US = require('../models/User');

// Controller to create a new user
exports.createUser = async (req, res) => {
  const { name, email, message } = req.body;
  try {
    // Create a new user instance
    const newUser = new Contact_US({
      name,
      email,
      message,
    });

    // Save the user to MongoDB
    await newUser.save();
    res.status(201).json({ success: true, message: 'Form filled successfully' });
  } catch (err) {
    // Send only one error response
    res.status(500).json({ error: 'Error creating user', message: err.message });
  }
};