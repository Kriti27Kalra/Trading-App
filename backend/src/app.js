const express = require('express');
const app = express();
const db = require('./config/db');
const userRoutes = require('./routes/user.routes');
const authRoutes = require('./routes/auth.routes');

// middleware & routes
app.use(express.json());
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);

module.exports = app;
