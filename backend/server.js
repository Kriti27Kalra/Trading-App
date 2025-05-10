const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const db = require('./src/config/db'); 
const authRoutes = require('./src/routes/auth.routes'); 

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Use built-in JSON parser

// Routes
app.use('/api', authRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
