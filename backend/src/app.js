const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const authRoutes = require('./routes/auth.routes');
const userRoutes = require('./routes/user.routes');

const app = express();
app.use(cors());
app.use(bodyParser.json());


app.use('/api', authRoutes);
app.use('/api', userRoutes);

module.exports = app;