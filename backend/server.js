const express = require("express");
const mongoose = require('mongoose');
const cors = require("cors");
const dotenv = require("dotenv");
const auth = require("./routes/auth");
const connectDB = require("./config/db"); 
const paymentRoutes = require('./routes/paymentRoutes.js');

dotenv.config();
const app = express();

connectDB();

app.use(express.json());
app.use(cors());

app.use("/api/auth", auth);
app.use('/api/payment', paymentRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));