const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routers/userRoutes');
const cors = require('cors');

const app = express();
connectDB();

app.use(express.json());
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));

app.use('/api/auth', userRoutes);

app.listen(5000, () => console.log('Server running on http://localhost:5000'));
