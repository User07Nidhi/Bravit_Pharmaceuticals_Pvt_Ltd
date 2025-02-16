const mongoose = require('mongoose');

// Define a schema for User
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  message: { type: String, required: true }
}, { collection: 'Contact_US' });

// Create and export the model
module.exports = mongoose.model('Contact_US', userSchema);
