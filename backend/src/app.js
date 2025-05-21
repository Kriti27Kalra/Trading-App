const express = require('express');
const cors = require('cors');

const authRoutes = require('./routes/auth.routes');
const userRoutes = require('./routes/user.routes');
const adminRoutes = require('./routes/admin.routes');

const app = express();

app.use(cors());
app.use(express.json()); // <-- use built-in express json parser

app.use('/api', authRoutes);
app.use('/api', userRoutes);
app.use('/api/admin', adminRoutes);

module.exports = app;
