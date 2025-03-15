const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const authRoutes = require("./routes/auth");
const connectDB = require("./config/db"); // Import db.js

dotenv.config();
const app = express();

// Connect to MongoDB
connectDB();

app.use(express.json());
app.use(cors());

app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
