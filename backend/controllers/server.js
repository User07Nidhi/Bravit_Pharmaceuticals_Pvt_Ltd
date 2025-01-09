const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // to parse JSON data

// MongoDB Connection URI (Replace with your URI)
const mongoURI = 'mongodb://localhost:27017/mydatabase'; // Local MongoDB
// Or, for MongoDB Atlas:
// const mongoURI = 'your_mongodb_atlas_connection_string_here';

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected successfully');
  })
  .catch((err) => {
    console.log('MongoDB connection error: ', err);
  });

// Basic route to check if server is running
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Start the server
const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
