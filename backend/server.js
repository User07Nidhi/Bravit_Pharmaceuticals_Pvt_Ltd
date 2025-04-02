const express = require("express");
const mongoose = require('mongoose');
const cors = require("cors");
const dotenv = require("dotenv");
const auth = require("./routes/auth");
const connectDB = require("./config/db"); 
dotenv.config();
const app = express();

// Connect to MongoDB
connectDB();

app.use(express.json());
app.use(cors());

app.use("/api/auth", auth);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
